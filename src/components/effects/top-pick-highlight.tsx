/**
 * TopPickHighlight — STANDALONE copy for affiliate sites.
 *
 * Drop this file into: src/components/effects/top-pick-highlight.tsx
 * No library imports. Zero external dependencies.
 *
 * Usage:
 *   <TopPickHighlight hue={210}>
 *     <th className="...">Top Pick</th>
 *   </TopPickHighlight>
 *
 * Tier cascade (resolved at runtime):
 *   1. WebGPU  — animated depth-glow via WGSL shader
 *   2. WebGL2  — CSS keyframe pulse (no GPU overhead)
 *   3. Static  — single CSS ring (no animation)
 *
 * prefers-reduced-motion → forces Static tier regardless of GPU.
 */
'use client';

import {
  type CSSProperties,
  type ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

/* ── Minimal WebGPU types (avoids @webgpu/types dep) ────────────────────── */
interface WGpuDevice {
  createShaderModule(d: { code: string }): unknown;
  createRenderPipeline(d: unknown): unknown;
  createBuffer(d: { size: number; usage: number }): WGpuBuffer;
  createBindGroup(d: unknown): unknown;
  createCommandEncoder(): WGpuEncoder;
  queue: { writeBuffer(b: WGpuBuffer, o: number, d: Float32Array): void; submit(c: unknown[]): void };
  destroy(): void;
}
interface WGpuBuffer { destroy(): void }
interface WGpuEncoder {
  beginRenderPass(d: unknown): WGpuPass;
  finish(): unknown;
}
interface WGpuPass {
  setPipeline(p: unknown): void;
  setBindGroup(i: number, bg: unknown): void;
  draw(n: number): void;
  end(): void;
}
interface WGpuCtx {
  configure(d: unknown): void;
  getCurrentTexture(): { createView(): unknown };
}
interface WGpuAdapter { requestDevice(): Promise<WGpuDevice> }

/* ── Tier detection ─────────────────────────────────────────────────────── */

type RenderTier = 'webgpu' | 'webgl2' | 'static';

function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

async function detectTier(): Promise<RenderTier> {
  if (typeof window === 'undefined') return 'static';
  if (prefersReducedMotion()) return 'static';
  const gpu = (navigator as unknown as { gpu?: { requestAdapter: () => Promise<unknown> } }).gpu;
  if (gpu) {
    try {
      const adapter = await gpu.requestAdapter();
      if (adapter) return 'webgpu';
    } catch { /* fall through */ }
  }
  try {
    const c = document.createElement('canvas');
    if (c.getContext('webgl2')) return 'webgl2';
  } catch { /* fall through */ }
  return 'static';
}

function useTier(): RenderTier {
  const [tier, setTier] = useState<RenderTier>('static');
  useEffect(() => { detectTier().then(setTier); }, []);
  return tier;
}

/* ── InView hook ────────────────────────────────────────────────────────── */

function useInView(ref: React.RefObject<HTMLElement | null>): boolean {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === 'undefined') { setInView(true); return; }
    const obs = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { rootMargin: '200px' });
    obs.observe(node);
    return () => obs.disconnect();
  }, [ref]);
  return inView;
}

/* ── WGSL shader source ─────────────────────────────────────────────────── */

const WGSL = /* wgsl */`
struct U { res: vec2f, t: f32, hue: f32 }
@group(0) @binding(0) var<uniform> u: U;
fn hsl(h: f32, s: f32, l: f32) -> vec3f {
  let c = (1.0 - abs(2.0*l-1.0))*s;
  let h6 = h/60.0; let x = c*(1.0-abs(h6%2.0-1.0));
  var r = vec3f(0.0);
  if (h6<1.0){r=vec3f(c,x,0.0);}else if(h6<2.0){r=vec3f(x,c,0.0);}
  else if(h6<3.0){r=vec3f(0.0,c,x);}else if(h6<4.0){r=vec3f(0.0,x,c);}
  else if(h6<5.0){r=vec3f(x,0.0,c);}else{r=vec3f(c,0.0,x);}
  return r+vec3f(l-c*0.5);
}
@vertex fn vs(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {
  var p = array<vec2f,6>(vec2f(-1,-1),vec2f(1,-1),vec2f(-1,1),
    vec2f(-1,1),vec2f(1,-1),vec2f(1,1));
  return vec4f(p[i],0.0,1.0);
}
@fragment fn fs(@builtin(position) pos: vec4f) -> @location(0) vec4f {
  let uv = (pos.xy/u.res - 0.5)*2.0;
  let r  = length(uv*vec2f(0.55,1.0));
  let p  = 0.82+0.06*sin(u.t*1.8);
  let g  = smoothstep(p+0.25,p,r);
  let e  = smoothstep(p-0.04,p,r)*smoothstep(p+0.04,p,r);
  let a  = g*0.32+e*0.18;
  let rgb = hsl(u.hue, 0.68+0.12*sin(u.t*0.7), 0.56);
  return vec4f(rgb*a, a);
}
`;

/* ── WebGPU effect mount ────────────────────────────────────────────────── */

async function mountWebGpu(
  host: HTMLDivElement,
  hue: number,
  signal: AbortSignal,
): Promise<() => void> {
  const gpu = (navigator as unknown as { gpu?: { requestAdapter: () => Promise<WGpuAdapter | null>; getPreferredCanvasFormat: () => string } }).gpu;
  if (!gpu || signal.aborted) return () => {};
  const adapter = await gpu.requestAdapter().catch(() => null);
  if (!adapter || signal.aborted) return () => {};
  const device = await adapter.requestDevice().catch(() => null);
  if (!device || signal.aborted) return () => {};

  const canvas = document.createElement('canvas');
  canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;pointer-events:none;border-radius:inherit;';
  host.style.position = 'relative';
  host.appendChild(canvas);

  const ctx = canvas.getContext('webgpu') as WGpuCtx | null;
  if (!ctx) { canvas.remove(); device.destroy(); return () => {}; }

  const fmt = gpu.getPreferredCanvasFormat();
  const resize = () => {
    canvas.width = host.clientWidth * devicePixelRatio;
    canvas.height = host.clientHeight * devicePixelRatio;
    ctx.configure({ device, format: fmt, alphaMode: 'premultiplied' });
  };
  resize();
  const ro = new ResizeObserver(resize);
  ro.observe(host);

  const mod = device.createShaderModule({ code: WGSL });
  const pipeline = device.createRenderPipeline({
    layout: 'auto',
    vertex: { module: mod, entryPoint: 'vs' },
    fragment: {
      module: mod, entryPoint: 'fs',
      targets: [{ format: fmt, blend: {
        color: { srcFactor: 'one', dstFactor: 'one-minus-src-alpha', operation: 'add' },
        alpha: { srcFactor: 'one', dstFactor: 'one-minus-src-alpha', operation: 'add' },
      }}],
    },
    primitive: { topology: 'triangle-list' },
  });

  const ubuf = device.createBuffer({ size: 16, usage: 0x40 | 0x08 /* UNIFORM | COPY_DST */ });
  const bg   = device.createBindGroup({ layout: (pipeline as unknown as { getBindGroupLayout(i: number): unknown }).getBindGroupLayout(0), entries: [{ binding: 0, resource: { buffer: ubuf } }] });
  let raf = 0;
  const t0 = performance.now();

  const frame = () => {
    if (signal.aborted) return;
    const t = (performance.now() - t0) * 0.001;
    device.queue.writeBuffer(ubuf, 0, new Float32Array([canvas.width, canvas.height, t, hue]));
    const view = ctx.getCurrentTexture().createView();
    const enc = device.createCommandEncoder();
    const pass = enc.beginRenderPass({ colorAttachments: [{ view, loadOp: 'clear', clearValue: { r: 0, g: 0, b: 0, a: 0 }, storeOp: 'store' }] });
    pass.setPipeline(pipeline); pass.setBindGroup(0, bg); pass.draw(6); pass.end();
    device.queue.submit([enc.finish()]);
    raf = requestAnimationFrame(frame);
  };
  raf = requestAnimationFrame(frame);

  const dispose = () => { cancelAnimationFrame(raf); ro.disconnect(); canvas.remove(); ubuf.destroy(); device.destroy(); };
  signal.addEventListener('abort', dispose, { once: true });
  return dispose;
}

/* ── Component ──────────────────────────────────────────────────────────── */

interface TopPickHighlightProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Brand hue in degrees (0-360). Default 210 (blue). */
  hue?: number;
  /** Aria label for screen readers. */
  ariaLabel?: string;
}

export function TopPickHighlight({
  children,
  className,
  style,
  hue = 210,
  ariaLabel = 'Top pick',
}: TopPickHighlightProps) {
  const tier   = useTier();
  const hostRef = useRef<HTMLDivElement | null>(null);
  const inView  = useInView(hostRef as React.RefObject<HTMLElement | null>);

  useEffect(() => {
    if (tier !== 'webgpu' || !inView || !hostRef.current) return;
    const ctrl = new AbortController();
    mountWebGpu(hostRef.current, hue, ctrl.signal);
    return () => ctrl.abort();
  }, [tier, inView, hue]);

  if (tier === 'static') {
    return (
      <div
        className={className}
        style={{
          position: 'relative',
          boxShadow: `0 0 0 2px oklch(0.72 0.14 ${hue} / 0.45), 0 0 18px 3px oklch(0.72 0.14 ${hue} / 0.15)`,
          borderRadius: 8,
          ...style,
        }}
      >
        {children}
      </div>
    );
  }

  if (tier === 'webgl2') {
    return (
      <div className={className} style={{ position: 'relative', overflow: 'visible', ...style }}>
        <style>{`
          @keyframes _tph{0%,100%{box-shadow:0 0 0 0 oklch(0.72 0.14 ${hue}/0),0 0 10px 1px oklch(0.72 0.14 ${hue}/0.15);}50%{box-shadow:0 0 0 2px oklch(0.72 0.14 ${hue}/0.12),0 0 22px 5px oklch(0.72 0.14 ${hue}/0.25);}}
          @media(prefers-reduced-motion:reduce){._tph-r{animation:none!important;box-shadow:0 0 0 2px oklch(0.72 0.14 ${hue}/0.3)!important;}}
        `}</style>
        <div
          className="_tph-r"
          style={{ position: 'absolute', inset: 0, borderRadius: 8, pointerEvents: 'none', animation: '_tph 3.4s ease-in-out infinite' }}
          aria-hidden="true"
        />
        {children}
      </div>
    );
  }

  // WebGPU — the canvas is mounted imperatively via useEffect above
  return (
    <div
      ref={hostRef}
      className={className}
      style={{ position: 'relative', overflow: 'visible', ...style }}
      role="img"
      aria-label={ariaLabel}
    >
      {children}
    </div>
  );
}

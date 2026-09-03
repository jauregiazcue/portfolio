
import { useRef, useEffect, type RefObject, type CanvasHTMLAttributes } from 'react';

type ContextType = '2d' | 'webgl' | 'webgl2' | 'bitmaprenderer';

export interface CanvasOptions { context: ContextType }


interface UseCanvasHooks {
  predraw: (context: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => void,
  postdraw: (frameCount: number, context: CanvasRenderingContext2D) => number
}


export interface UseCanvasPayload extends CanvasHTMLAttributes<HTMLCanvasElement> {
  draw: (context: CanvasRenderingContext2D) => void,

  options: CanvasOptions,
  canvasHooks?: UseCanvasHooks
}


function Canvas(props: UseCanvasPayload) {

  const { draw, options, ...rest } = props;
  const { context } = options;


  function resizeCanvas(canvas: HTMLCanvasElement) {
    const { width, height } = canvas.getBoundingClientRect()
    if (!canvas) return;
    if (canvas.width !== width || canvas.height !== height) {
      const { devicePixelRatio: ratio = 1 } = window;
      const context = canvas.getContext('2d');
      if (!context) return;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      context.scale(ratio, ratio);
      return true;
    }
    return false;
  }

  function useCanvas(payload: UseCanvasPayload
  ): RefObject<HTMLCanvasElement | null> {
    const { draw, options, canvasHooks } = payload;
    if (!canvasHooks) throw new Error("Required");
    const { predraw, postdraw } = canvasHooks;

    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const context = canvas.getContext(options.context || '2d') as CanvasRenderingContext2D;
      if (!context) return;

      let frameCount: number = 0;
      let animationFrameId: number;

      const render = () => {
        predraw(context, canvas);
        draw(context);
        frameCount = postdraw(frameCount, context);
        animationFrameId = window.requestAnimationFrame(render);
      }
      render();
      return () => { window.cancelAnimationFrame(animationFrameId); }
    }, [draw, options, postdraw, predraw]);
    return canvasRef;
  }

  function postdraw(index: number, ctx: CanvasRenderingContext2D) {
    ctx.restore();
    return index + 1;
  }

  function predraw(context: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
    context.save();
    resizeCanvas(canvas);
    const { width, height } = context.canvas;
    context.clearRect(0, 0, width, height);
  }

  const canvasRef = useCanvas({ draw: draw, options: { context }, canvasHooks: { predraw, postdraw } });

  return <canvas ref={canvasRef} {...rest} />;
}

export default Canvas;
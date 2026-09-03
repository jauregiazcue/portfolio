import React, { useEffect } from "react";


interface CanvasPayload {
  width: number,
  height: number,
  ref: React.RefObject<HTMLCanvasElement | null>,
  init: (context: CanvasRenderingContext2D) => void
}

function Canvas(props: CanvasPayload) {
  const { width, height, ref, init } = props;

  useEffect(() => {
    const canvas = ref.current;
    if (canvas != null) {
      const context = canvas.getContext("2d");
      if (context != null) init(context);
    }
  });




  return <div>
    <canvas ref={ref} width={width} height={height} />
  </div>;
}

export default Canvas;
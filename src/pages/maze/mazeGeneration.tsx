import { MazeGenType as GenType } from "@/utils/payload";
import { aldousBroderMaze } from "./mazeUtils/aldous-broder";
import { binaryTreeMaze } from "./mazeUtils/binary-tree";
import { ellersMaze } from "./mazeUtils/ellers";
import { kruskalsMaze } from "./mazeUtils/kruskals";
import { recursiveDivisionMaze } from "./mazeUtils/recursive-division";
import { sidewinderMaze } from "./mazeUtils/sidewinder";
import { wilsonsMaze } from "./mazeUtils/wilsons";


class Maze {
  constructor() {
    this.size = 10;
  }

  init(type: GenType, size?: number) {
    if (!size) size = this.size;

    size = size <= 0 ? 10 : size;
    this.maze = this.genMaze(type, size, size);
    this.getJSON();
  }

  genMaze(type: GenType, width: number, height: number) {
    // Make dimensions odd
    width -= width % 2; width++;
    height -= height % 2; height++;
    switch (type) {
      case GenType.aldous: return aldousBroderMaze(width, height);
      case GenType.binaryTree: return binaryTreeMaze(width, height);
      case GenType.ellers: return ellersMaze(width, height);
      case GenType.kruskals: return kruskalsMaze(width, height);
      case GenType.recursiveDivision: return recursiveDivisionMaze(width, height);
      case GenType.sideWider: return sidewinderMaze(width, height);
      case GenType.wilsons: return wilsonsMaze(width, height);
      default: return aldousBroderMaze(width, height);
    }

  }

  firstDraw(ctx: CanvasRenderingContext2D) {
    const canvas = ctx.canvas;
    const width = canvas.width;
    const height = canvas.height;
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = "#FFA72B";
    ctx.font = "32px Alexandria Variable";
    ctx.fillText("Click Generate",
      (width / 2) - ctx.measureText("Click Generate").width / 2, height / 2);
  }

  errorDraw(ctx: CanvasRenderingContext2D) {
    const canvas = ctx.canvas;
    const width = canvas.width;
    const height = canvas.height;
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = "red";
    ctx.font = "24px Alexandria Variable";

    ctx.fillText('WIDTH AND HEIGHT',
      (width / 2) - ctx.measureText("WIDTH AND HEIGHT").width / 2, (height / 2.25));

    ctx.fillText('MUST BE BIGGER',
      (width / 2) - ctx.measureText("MUST BE BIGGER").width / 2, (height / 2.25) + 50);

    ctx.fillText('OR EQUAL TO 10',
      (width / 2) - ctx.measureText("OR EQUAL TO 10").width / 2, (height / 2.25) + 100);
  }


  draw(ctx: CanvasRenderingContext2D) {
    const canvas = ctx.canvas;
    const width = canvas.width;
    const height = canvas.height;
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, width, height);

    if (this.maze.length <= 0) return;

    const rectangleSize = 11;
    const rectWidth = (width / rectangleSize);
    const rectHeight = (width / rectangleSize);

    ctx.fillStyle = "#cac8b9";

    const startX = rectangleSize * (this.stepX);
    const startY = rectangleSize * (this.stepY);

    let endX = rectangleSize * (this.stepX + 1);
    if (endX >= this.maze.length) endX = this.maze.length;

    let endY = rectangleSize * (this.stepY + 1);
    if (endY >= this.maze.length) endY = this.maze.length;

    let fakeX = 0;
    let fakeY = 0;
    for (let y = startY; y < endY; y++) {
      for (let x = startX; x < endX; x++) {
        if (y > this.maze.length) return;
        if (x > this.maze[y].length) return;
        if (this.maze[y][x]) {
          ctx.fillRect(rectWidth * fakeY, rectHeight * fakeX,
            rectWidth, rectHeight);
        }
        else {
          ctx.clearRect(rectWidth * fakeY, rectHeight * fakeX,
            rectWidth, rectHeight);
        }
        fakeY++;
      }
      fakeX++;
      fakeY = 0;
    }
  }


  getRandomNumber(max: number) {
    return Math.floor(Math.random() * max);
  }

  handleSizeInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.size = Number(event.target.value);
  }

  handleStepXInputChange(add: number, ctx: CanvasRenderingContext2D) {
    this.stepX += add;
    if (this.stepX < 0) this.stepX = 0;
    this.draw(ctx);
  }

  handleStepYInputChange(add: number, ctx: CanvasRenderingContext2D) {
    this.stepY += add;
    if (this.stepY < 0) this.stepY = 0;
    this.draw(ctx);
  }

  getJSON() {
    let jsonAuxString = "{\n";
    jsonAuxString += '"maze": [\n';
    for (let y = 0; y < this.maze.length; y++) {
      jsonAuxString += '[';
      for (let x = 0; x < this.maze[y].length; x++) {
        jsonAuxString += x + 1 < this.maze[y].length ?
          this.maze[y][x].toString() + "," :
          this.maze[y][x].toString();
      }
      jsonAuxString += y + 1 < this.maze.length ? "],\n" : "]";
    }
    jsonAuxString += "]\n}";
    this.jsonString = jsonAuxString;
  }

  stepX: number = 0;
  stepY: number = 0;
  size: number = 10;
  maze: number[][] = [];
  jsonString: string = "";
}

export const maze = new Maze();

import { divide, getNumberFromBoolean, horv } from "./mUtils";

export function recursiveDivisionMaze(width : number, height : number){
    
    // Make dimensions odd
    
    
    const maze : number[][]=[];
    
    for (let i = 0; i < height; i++) {
        maze.push([]);
        for (let j = 0; j < width; j++) {
            maze[i].push(getNumberFromBoolean(i == 0 ||
                          j == 0 ||
                          i == height - 1 ||
                          j == width - 1));
        }
    }
    
    divide(maze, [1, height - 2], [1, width - 2], horv(1, 1));
    
    maze[0][1] = 0;
    maze[height - 1][width - 2] = 0;
    
    return maze;
    
}

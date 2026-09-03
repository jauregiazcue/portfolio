export function binaryTreeMaze(width : number, height : number) {
    
    // Make dimensions odd
    
    
    // Initialize maze
    const maze : number[][]=[];
    for (let i = 0; i < height; i++) {
        maze.push([]);
        for (let j = 0; j < width; j++) {
            maze[i].push((Number(!(i % 2 == 1 && j % 2 == 1))));
        }
    }
    
    for (let k = 1; k < width; k += 2) {
        for (let m = 1; m < height; m += 2) {
            let south = Math.floor(Math.random() * 2);
            
            if (m == height - 2)
                south = 0;
            if (k == width - 2)
                south = 1;
            if (k == width - 2 && m == height - 2)
                break;
            
            if (south)
                maze[m + 1][k] = 0;
            else
                maze[m][k + 1] = 0;
        }
    }
    
    maze[0][1] = 0;
    maze[height - 1][width - 2] = 0;
    
    return maze;
}
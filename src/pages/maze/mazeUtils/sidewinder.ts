export function sidewinderMaze(width : number, height : number){
    
    
    
    const maze : number[][]=[];
    for (let i = 0; i < height; i++) {
        maze.push([]);
        for (let j = 0; j < width; j++) {
            maze[i].push(Number(!(i % 2 == 1 && j % 2 == 1)));
        }
    }
    
    for (let row = 1; row < height; row += 2) {
        
        let begin = 1;
        
        for (let col = 1; col < width; col += 2) {
            
            let ctn = (row == 1) ? 1 : Math.floor(Math.random() * 2);
            if (col == width - 2) ctn = 0;
            
            if (ctn) {
                maze[row][col + 1] = 0;
            }
            
            else if (row != 1){
                let up;
                do {
                    up = Math.floor(Math.random() * (col - begin)) + begin;
                } while (!(up % 2));    
                maze[row - 1][up] = 0;
                
                begin = col + 2;
                
            }
            
        }
        
    }
    
    maze[0][1] = 0;
    maze[height - 1][width - 2] = 0;
    
    return maze;
    
}

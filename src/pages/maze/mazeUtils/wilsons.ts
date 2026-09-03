import { complete, indexOfCoord, neighbors, randCoord } from "./mUtils";


export function wilsonsMaze(width : number, height : number){
    
    // Make dimensions odd
    
    
    const maze : number[][]=[];
    for (let i = 0; i < height; i++) {
        maze.push([]);
        for (let j = 0; j < width; j++) {
            maze[i].push(1);
        }
    }
    
    const s = randCoord(width, height);
    maze[s[0]][s[1]] = 0;
    
    while (!complete(maze)) {
        let c;
        do {
            c = randCoord(width, height);
        } while (maze[c[0]][c[1]] != 1); 
        
        maze[c[0]][c[1]] = 2;
        
        const path = [c];
        while (maze[path[path.length - 1][0]][path[path.length - 1][1]] != 0) {
            
            
            let last = path[path.length - 1];
            const n = neighbors(maze, last[0], last[1]);
            const nb = n[Math.floor(Math.random() * n.length)];
            
            path.push(nb);
            
            maze[(nb[0] + last[0]) / 2][(nb[1] + last[1]) / 2] = 2;
            if (maze[nb[0]][nb[1]] == 0) {
                
                for (let i = 0; i < height; i++) {
                    for (let j = 0; j < width; j++) {
                        if (maze[i][j] == 2)
                            maze[i][j] = 0;
                    }
                }
            }
            
            else {
                
                maze[nb[0]][nb[1]] = 2;
                const loc = indexOfCoord(path, nb);
                if (loc != path.length - 1) {
                    
                    const removed = path.splice(loc + 1, path.length - loc - 1);
                    maze[(nb[0] + last[0]) / 2][(nb[1] + last[1]) / 2] = 1;
                    last = path[path.length - 1];
                    
                    for (let k = removed.length - 1; k >= 0; k--) {
                        const on = removed[k];
                        const next = k ? removed[k - 1] : last;
                        
                        if (k != removed.length - 1)
                            maze[on[0]][on[1]] = 1;
                        
                        maze[(on[0] + next[0]) / 2][(on[1] + next[1]) / 2] = 1;
                    }
                    
                }
                
            }
            
        }
        
    }
    
    maze[0][1] = 0;
    maze[height - 1][width - 2] = 0;
    
    return maze;
    
}
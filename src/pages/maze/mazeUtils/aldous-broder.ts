import { neighbors } from "./mUtils";


export function aldousBroderMaze(width: number, height: number) {

    

    // Initialize maze: each square is its own set
    const maze: number[][] = [];
    let unvisited = 0;

    for (let i = 0; i < height; i++) {
        maze.push([]);
        for (let j = 0; j < width; j++) {
            if ((i % 2 == 1 && j % 2 == 1))
                unvisited++;

            maze[i].push(1);
        }
    }
    let on = [];

    do {
        on[0] = Math.floor(Math.random() * height);
        on[1] = Math.floor(Math.random() * width);
    } while (on[0] % 2 == 0 || on[1] % 2 == 0);

    maze[on[0]][on[1]] = 0;
    unvisited--;

    while (unvisited > 0) {
        const n = neighbors(maze, on[0], on[1]);
        const to = n[Math.floor(Math.random() * n.length)];

        if (maze[to[0]][to[1]] == 1) {
            maze[to[0]][to[1]] = 0;
            maze[(to[0] + on[0]) / 2][(to[1] + on[1]) / 2] = 0;
            unvisited--;
        }
        on = to;
    }

    maze[0][1] = 0;
    maze[height - 1][width - 2] = 0;

    return maze;

}
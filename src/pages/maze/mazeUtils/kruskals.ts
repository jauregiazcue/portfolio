import { indexOfSet } from "./mUtils";

export function kruskalsMaze(width: number, height: number) {

    // Make dimensions odd
    

    // Initialize maze: each square is its own set
    const maze: number[][] = [];
    const sets = [];
    const edges = [];

    for (let i = 0; i < height; i++) {
        maze.push([]);
        for (let j = 0; j < width; j++) {
            const add = Number(!(i % 2 == 1 && j % 2 == 1));
            maze[i].push(add + 0);
            if (!add)
                sets.push([[i, j]]);

            if (i != height - 2 && !add)
                edges.push([i + 1, j]);

            if (j != width - 2 && !add)
                edges.push([i, j + 1]);
        }
    }

    maze[0][1] = 0;

    while (edges.length) {

        const index = Math.floor(Math.random() * edges.length);
        const removed = edges.splice(index, 1)[0];

        const iorj = removed[0] % 2;

        let cell1, cell2;

        if (iorj) {
            cell1 = [removed[0], removed[1] - 1];
            cell2 = [removed[0], removed[1] + 1];
        }
        else {
            cell1 = [removed[0] - 1, removed[1]];
            cell2 = [removed[0] + 1, removed[1]];
        }

        let i1 = indexOfSet(sets, cell1);
        const i2 = indexOfSet(sets, cell2);

        if (i1 != i2) {
            const add: number[][] = sets.splice(i2, 1)[0];
            if (i2 < i1)
                i1--;
            sets[i1] = sets[i1].concat(add);
            maze[removed[0]][removed[1]] = 0;
        }

    }

    maze[height - 1][width - 2] = 0;
    return maze;

}
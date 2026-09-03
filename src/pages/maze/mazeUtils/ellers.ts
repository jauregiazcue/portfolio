import { indexOfSet } from "./mUtils";

export function ellersMaze(width: number, height: number) {

    // Make dimensions odd
    

    // Initialize maze: each square is its own set
    const maze: number[][] = [];
    for (let i = 0; i < height; i++) {
        maze.push([]);
        for (let j = 0; j < width; j++) {
            maze[i].push(Number(!(i % 2 == 1 && j % 2 == 1)));
        }
    }

    maze[0][1] = 0;

    const sets = [];
    for (let i = 1; i < width; i += 2) {
        sets.push([[1, i]]);
    }



    for (let i = 1; i < height; i += 2) {

        // Clear sets
        for (let m = 0; m < sets.length; m++) {
            for (let n = 0; n < sets[m].length; n++) {
                if (sets[m][n][0] < i)
                    sets[m].splice(n, 1);
            }
        }

        for (let j = 3; j < width; j += 2) {
            let set1 = indexOfSet(sets, [i, j - 2]);
            const set2 = indexOfSet(sets, [i, j]);
            if (set1 != set2) {

                const join = (i != height - 2) ?
                    Math.floor(Math.random() * 2) :
                    1;

                if (join) {
                    const removed: number[][] = sets.splice(set2, 1)[0];
                    if (set2 < set1) {
                        set1--;
                    }

                    sets[set1] = sets[set1].concat(removed);
                    maze[i][j - 1] = 0;
                }
            }
        }

        if (i == height - 2)
            break;

        const initialSetLength = sets.length;
        for (let j = 0; j < initialSetLength; j++) {
            let continued = false;

            const initialLength = sets[j].length;
            for (let k = 0; k < initialLength; k++) {

                const newCoord = sets[j][k].slice();
                newCoord[0] += 2;

                if (newCoord[0] != i + 2)
                    continue;

                const add = Math.floor(Math.random() * 2);
                if (add) {
                    continued = true;
                    sets[j].push(newCoord);
                    maze[newCoord[0] - 1][newCoord[1]] = 0;

                }
                else
                    sets.push([newCoord]);
            }

            if (!continued) {
                let ind;
                do {
                    ind = Math.floor(Math.random() * sets[j].length);
                } while (sets[j][ind][0] != i);
                const newC = sets[j][ind].slice();
                newC[0] += 2;

                sets.splice(indexOfSet(sets, newC), 1);

                sets[j].push(newC);
                maze[newC[0] - 1][newC[1]] = 0;
            }
        }

    }

    maze[height - 1][width - 2] = 0;

    return maze;

}


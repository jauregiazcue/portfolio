import { getRandomInteger, indexOfSet, openEntranceAndExit } from "./mUtils";

export function ellersMaze(width: number, height: number) {

    const maze: number[][] = [];
    for (let row = 0; row < height; row++) {
        maze.push([]);
        for (let column = 0; column < width; column++) {
            maze[row].push(Number(!(row % 2 == 1 && column % 2 == 1)));
        }
    }


    const sets = [];
    for (let row = 1; row < width; row += 2) {
        sets.push([[1, row]]);
    }

    for (let row = 1; row < height; row += 2) {

        // Clear sets
        for (let m = 0; m < sets.length; m++) {
            for (let n = 0; n < sets[m].length; n++) {
                if (sets[m][n][0] < row)
                    sets[m].splice(n, 1);
            }
        }

        for (let column = 3; column < width; column += 2) {
            let set1 = indexOfSet(sets, [row, column - 2]);
            const set2 = indexOfSet(sets, [row, column]);
            if (set1 != set2) {

                const join = (row != height - 2) ?
                    getRandomInteger(2) :
                    1;

                if (join) {
                    const removed: number[][] = sets.splice(set2, 1)[0];
                    if (set2 < set1) {
                        set1--;
                    }

                    sets[set1] = sets[set1].concat(removed);
                    maze[row][column - 1] = 0;
                }
            }
        }

        if (row == height - 2)
            break;

        const initialSetLength = sets.length;
        for (let column = 0; column < initialSetLength; column++) {
            let continued = false;

            const initialLength = sets[column].length;
            for (let k = 0; k < initialLength; k++) {

                const newCoord = sets[column][k].slice();
                newCoord[0] += 2;

                if (newCoord[0] != row + 2)
                    continue;

                const add = getRandomInteger(2);
                if (add) {
                    continued = true;
                    sets[column].push(newCoord);
                    maze[newCoord[0] - 1][newCoord[1]] = 0;

                }
                else
                    sets.push([newCoord]);
            }

            if (!continued) {
                let ind;
                do {
                    ind = getRandomInteger(sets[column].length);
                } while (sets[column][ind][0] != row);
                const newC = sets[column][ind].slice();
                newC[0] += 2;

                sets.splice(indexOfSet(sets, newC), 1);

                sets[column].push(newC);
                maze[newC[0] - 1][newC[1]] = 0;
            }
        }

    }

    openEntranceAndExit(maze, width, height);

    return maze;

}

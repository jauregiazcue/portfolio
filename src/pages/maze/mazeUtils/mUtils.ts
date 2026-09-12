

//change neighbours and neighbborsAB to this
function neighbours(maze: number[][], rowCoords: number, columnCords: number) {
    const final = [];
    for (let i = 0; i < 4; i++) {
        const n = [rowCoords, columnCords];

        // Iterates through four neighbours
        // [i][j - 2] 
        // [i][j + 2]
        // [i - 2][j]
        // [i + 2][j]
        n[i % 2] += ((Math.floor(i / 2) * 2) || -2);
        if (n[0] < maze.length &&
            n[1] < maze[0].length &&
            n[0] > 0 &&
            n[1] > 0) {

            final.push(n);
        }
    }
    return final;
}


function indexOfSet(sets: number[][][], cell: number[]) {
    for (let set = 0; set < sets.length; set++) {
        if (indexOfCoord(sets[set], cell) != -1)
            return set;
    }
    return -1;
}

function indexOfCoord(set: number[][], cell: number[]) {
    for (let i = 0; i < set.length; i++) {
        if (set[i][0] == cell[0] && set[i][1] == cell[1])
            return i;
    }
    return -1;
}

function complete(maze: number[][]) {
    for (let row = 1; row < maze.length; row += 2) {
        for (let column = 1; column < maze[0].length; column += 2) {
            if (maze[row][column] != 0) return false;
        }
    }
    return true;
}

function findCoord(maze: number[][]) {
    for (let row = 1; row < maze.length; row += 2) {
        for (let column = 1; column < maze[0].length; column += 2) {

            if (maze[row][column] == 1) {
                const neightbourList = neighbours(maze, row, column);

                for (let neighbour = 0; neighbour < neightbourList.length; neighbour++) {
                    // If the neighbour is a path, return the cell and the path
                    if (maze[
                        neightbourList[neighbour][0]][
                        neightbourList[neighbour][1]] == 0)
                        return [[row, column], neightbourList[neighbour]];
                }
            }

        }
    }
}

function divide(maze: number[][],
    rowCords: number[],
    columnCords: number[],
    hv: string) {
    const rowDim = rowCords[1] - rowCords[0];
    const columnDim = columnCords[1] - columnCords[0];

    if (rowDim <= 0 || columnDim <= 0) return;

    if (hv == "h") {

        let split;
        do {
            split = getRandomInteger((rowDim + 1)) + rowCords[0];
        } while (split % 2);

        let hole;
        do {
            hole = getRandomInteger((columnDim + 1)) + columnCords[0];
        } while (!(hole % 2));

        for (let column = columnCords[0]; column <= columnCords[1]; column++) {
            if (column != hole)
                maze[split][column] = 1;
        }

        divide(maze,
            [rowCords[0], split - 1],
            columnCords,
            horizontalOrVertical(split - rowCords[0] - 1, columnDim));

        divide(maze,
            [split + 1, rowCords[1]],
            columnCords,
            horizontalOrVertical(rowCords[1] - split - 1, columnDim));

    }

    let split;
    do {
        split = getRandomInteger((columnDim + 1)) + columnCords[0];
    } while (split % 2);

    let hole;
    do {
        hole = getRandomInteger((rowDim + 1)) + rowCords[0];
    } while (!(hole % 2));

    for (let row = rowCords[0]; row <= rowCords[1]; row++) {
        if (row != hole) {
            maze[row][split] = 1;
        }
    }

    divide(maze,
        rowCords,
        [columnCords[0], split - 1],
        horizontalOrVertical(rowDim, split - columnCords[0] - 1));
    divide(maze,
        rowCords,
        [split + 1, columnCords[1]],
        horizontalOrVertical(columnCords[0] - split - 1, 0));



}

function horizontalOrVertical(rowDim: number, columnDim: number) {
    if (rowDim < columnDim) return "v";
    if (columnDim < rowDim) return "h";
    return getRandomInteger(2) ? "h" : "v";
}




function randCoord(width: number, height: number) {
    const cell = [];

    cell[0] = (getRandomInteger(Math.floor(height / 2)) * 2) + 1;
    cell[1] = (getRandomInteger(Math.floor(width / 2)) * 2) + 1;
    return cell;
}

function getRandomInteger(max: number) {
    return Math.floor(Math.random() * max);
}

function getNumberFromBoolean(bool: boolean) {
    return Number(bool);
}

function openEntranceAndExit(maze: number[][], width: number, height: number) {
    let topOpening = getRandomInteger(width - 2) + 1;
    if (maze[1][topOpening] == 1) topOpening++;
    maze[0][topOpening] = 0;

    let bottomOpening = getRandomInteger(width - 2) + 1;
    if (maze[height - 2][bottomOpening] == 1) bottomOpening++;
    maze[height - 1][bottomOpening] = 0;
}

export {
    neighbours, getRandomInteger, openEntranceAndExit,
    indexOfSet, indexOfCoord, horizontalOrVertical,
    randCoord, findCoord, divide,
    complete, getNumberFromBoolean
};

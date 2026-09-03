

//change neighbors and neighbborsAB to this
function neighbors(maze: number[][], ic: number, jc: number) {
    const final = [];
    for (let i = 0; i < 4; i++) {
        const n = [ic, jc];

        // Iterates through four neighbors
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


function indexOfSet(sets: number[][][], c: number[]) {
    for (let i = 0; i < sets.length; i++) {
        if (contains(sets[i], c))
            return i;
    }
    return -1;
}

function contains(s: number[][], c: number[]) {
    for (let i = 0; i < s.length; i++) {
        if (s[i][0] == c[0] && s[i][1] == c[1])
            return true;
    }
    return false;
}

function complete(maze: number[][]) {
    for (let i = 1; i < maze.length; i += 2) {
        for (let j = 1; j < maze[0].length; j += 2) {
            if (maze[i][j] != 0)
                return false;
        }
    }
    return true;
}

function findCoord(maze: number[][]) {
    for (let i = 1; i < maze.length; i += 2) {
        for (let j = 1; j < maze[0].length; j += 2) {

            if (maze[i][j] == 1) {
                const n = neighbors(maze, i, j);

                for (let k = 0; k < n.length; k++) {
                    if (maze[n[k][0]][n[k][1]] == 0)
                        return [[i, j], n[k]];
                }
            }

        }
    }
}

function divide(maze: number[][], iCoords: number[], jCoords: number[], hv: string) {
    const iDim = iCoords[1] - iCoords[0];
    const jDim = jCoords[1] - jCoords[0];

    if (iDim <= 0 || jDim <= 0)
        return;

    if (hv == "h") {

        let split;
        do {
            split = Math.floor(Math.random() * (iDim + 1)) + iCoords[0];
        } while (split % 2);

        let hole;
        do {
            hole = Math.floor(Math.random() * (jDim + 1)) + jCoords[0];
        } while (!(hole % 2));

        for (let j = jCoords[0]; j <= jCoords[1]; j++) {
            if (j != hole)
                maze[split][j] = 1;
        }

        divide(maze,
            [iCoords[0], split - 1],
            jCoords,
            horv(split - iCoords[0] - 1, jDim));

        divide(maze,
            [split + 1, iCoords[1]],
            jCoords,
            horv(iCoords[1] - split - 1, jDim));

    }

    else {

        let split;
        do {
            split = Math.floor(Math.random() * (jDim + 1)) + jCoords[0];
        } while (split % 2);

        let hole;
        do {
            hole = Math.floor(Math.random() * (iDim + 1)) + iCoords[0];
        } while (!(hole % 2));

        for (let i = iCoords[0]; i <= iCoords[1]; i++) {
            if (i != hole) {
                maze[i][split] = 1;
            }
        }

        divide(maze,
            iCoords,
            [jCoords[0], split - 1],
            horv(iDim, split - jCoords[0] - 1));
        divide(maze,
            iCoords,
            [split + 1, jCoords[1]],
            horv(jCoords[0] - split - 1, 0));

    }

}

function horv(iDim: number, jDim: number) {

    if (iDim < jDim)
        return "v";
    else if (jDim < iDim)
        return "h";
    else
        return Math.floor(Math.random() * 2) ? "h" : "v";
}


function indexOfCoord(s: number[][], c: number[]) {
    for (let i = 0; i < s.length; i++) {
        if (s[i][0] == c[0] && s[i][1] == c[1])
            return i;
    }
    return -1;
}


function randCoord(width: number, height: number) {
    const c = [];
    c[0] = (Math.floor(Math.random() * Math.floor(height / 2)) * 2) + 1;
    c[1] = (Math.floor(Math.random() * Math.floor(width / 2)) * 2) + 1;
    return c;
}

function getNumberFromBoolean(bool: boolean) {
    return Number(bool);
}


export {
    neighbors,
    indexOfSet, indexOfCoord, horv,
    randCoord, findCoord, divide,
    complete,getNumberFromBoolean
};

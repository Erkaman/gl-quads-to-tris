

function quadsToTris(cells) {

    var newCells = [];

    for (var iCell = 0; iCell < cells.length; ++iCell) {

        var cell = cells[iCell];

        newCells.push([cell[0], cell[1], cell[2]]);
        newCells.push([cell[0], cell[2], cell[3]]);
    }

    return newCells;
}

module.exports= quadsToTris;



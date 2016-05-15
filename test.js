var quadsToTris  = require('./');
var test        = require('tape');

test('quadsToTris', function(t) {

    cells = [ [0,1,2,3], [4,5,1,0], [6,7,5,4] ];

    var actual = quadsToTris(cells);
    var expected = [
        [0,1,2], [0,2,3],
        [4,5,1], [4,1,0],
        [6,7,5], [6,5,4],
    ];

    t.deepEqual(actual, expected, "test1");

    t.end();
});
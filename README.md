# gl-quads-to-tris

This module has a helper function that converts an array of quad indices to
an array of triangle indices. So, given the array `[ [0,1,2,3], [4,5,1,0] ]`, which
specifies the indices of two quads, this module will give an array
`[ [0,1,2], [0,2,3], [4,5,1], [4,1,0] ]`. And if you render these indices as triangles,
you will draw the two quads, but as four triangles instead of as two quads.

[![NPM](https://nodei.co/npm/gl-quads-to-tris.png)](https://www.npmjs.com/package/gl-quads-to-tris)

## Usage

### `function quadsToTris(cells)`

Given `cells`, an array of quad indices, return the corresponding array of triangle
indices. Note that it is assumed that the indices in `cells` are stored in
counter-clockwise order!

**Example**: If `cells = [ [0,1,2,3], [4,5,1,0] ]`, then the functions returns
`[ [0,1,2], [0,2,3], [4,5,1], [4,1,0] ]`.

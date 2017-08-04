# MazeCraze

[MazeCraze live][GitHubPages]

[GitHubPages]: https://aravi3.github.io/MazeCraze/

MazeCraze is an algorithm visualization tool for solving mazes. It uses different
tree traversal methods to present the visualization of the solution.

## Features & Implementation

### Different Tree Traversal Solutions

The maze is actually a HTML table with each square being a data cell. Therefore,
to more easily work with and traverse the table, I convert it to an array first
using jQuery:

```js
export const convertToArray = function() {
  let tblArray = [];

  $("#table#maze tr").each(function() {
    let rowArray = [];
    let dataCell = $(this).find('td');

    if (dataCell.length > 0) {
      dataCell.each(function() {
        rowArray.push($(this));
      })

      tblArray.push(rowArray);
    }
  })
}
```

Then, I let the user select a starting point and ending point. If no endpoints are
chosen, then the maze will be traversed from the top-left corner to the bottom-right
corner. After a tree traversal method is clicked, the respective algorithm is
triggered in order to construct the solution. I wrap the given algorithm in a
setInterval so that the visited nodes can be visualized as they are visited. At
the end, I retrace the solution back to the starting point and color it a darker
color.

I construct a tree node class for
each algorithm so that its position, parent, etc. can be easily accessed to create
a trail:

```js
class breadthFirstNode {
  constructor(pos, parent) {
    this.pos = pos;
    this.row = pos[0];
    this.col = pos[1];
    this.parent = parent;
  }
}
```

### Efficiency Calculations

I calculate efficiency calculations for each algorithm. These calculations include
execution time, nodes visited, and efficiency. In this application, I define
efficiency as `((totalNodes - nodesVisited) / totalNodes) * 100`. As an example
below, you can see that I perform these calculations once the ending point is found.
`t0 = performance.now()` is executed right before the start of the algorithm:

```js
if (arraysEqual(neighbors[i], endPos())) {
  t1 = performance.now();
  duration = (t1 - t0) / 1000;
  nodesVisited = visitedNodes.length;
  efficiency = ((totalNodes - nodesVisited) / totalNodes) * 100;
}
```

### Random Maze Generation

The user may enter in the numbers of rows and columns for the maze. If no values
are entered, then the default 20 x 20 maze is randomly generated. The depth-first
search algorithm is used to render the maze.

## Future Directions for the Project

The following 2 features are next steps
for MazeCraze:

### Visual Representation of Efficiency Calculations

I plan to use D3.js to graph the execution time, visited nodes, and efficiency
for each tree traversal methods at different grid sizes.

### More Tree Traversal Solutions

I plan to research and implement further tree traversal solutions.

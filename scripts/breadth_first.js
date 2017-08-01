import TreeNode from './tree_node';
import {
  convertToArray,
  startPos,
  endPos,
  upPos,
  downPos,
  leftPos,
  rightPos,
  occupiable,
  arraysEqual,
  includedIn
} from './modules';

const breadthFirstSolve = function() {
  let tblArray = convertToArray();
  let square;
  let neighborRow, neighborCol;
  let topNode, neighbors, up, right, down, left;
  let nodeQueue = [];
  let visitedNodes = [];
  let trail = [];
  let solution = [];

  trail.push(new TreeNode(startPos(), undefined));
  nodeQueue.push(new TreeNode(startPos(), undefined));
  visitedNodes.push(startPos);

  let endFound = false;

  while (nodeQueue.length !== 0 && !endFound) {
    topNode = nodeQueue.shift();
    neighbors = [];
    up = upPos(topNode.pos);
    right = rightPos(topNode.pos);
    down = downPos(topNode.pos);
    left = leftPos(topNode.pos);
    neighbors.push(up, right, down, left);

    for (let i = 0; i < neighbors.length; i++) {
      neighborRow = neighbors[i][0];
      neighborCol = neighbors[i][1];

      if (neighborRow < 0 || neighborCol < 0 ||
          neighborRow >= tblArray.length || neighborCol >= tblArray[0].length) {
        continue;
      }

      if (occupiable(i, tblArray[neighborRow][neighborCol]) && !includedIn(neighbors[i], visitedNodes)) {
        visitedNodes.push(neighbors[i]);
        nodeQueue.push(new TreeNode(neighbors[i], topNode));
        trail.push(new TreeNode(neighbors[i], topNode));

        tblArray[neighborRow][neighborCol].addClass('mid');

        if (arraysEqual(neighbors[i], endPos())) {
          endFound = true;
          break;
        }
      }
    }
  }

  square = trail.slice(-1)[0];

  while (square.parent) {
    square = square.parent;

    if (arraysEqual(square.pos, startPos())) {
      break;
    }

    solution.unshift(square);
  }

  solution.forEach(cell => {
    tblArray[cell.row][cell.col].removeClass('mid');
    tblArray[cell.row][cell.col].addClass('v');
  });
};

export default breadthFirstSolve;

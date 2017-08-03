import TreeNode from './depth_first_node';
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
  includedIn,
  findNode
} from './modules';

const depthFirstSolve = function(node, visitedNodes = []) {
  let tblArray = convertToArray();
  let timerId;
  let neighbors, up, right, down, left;
  let neighborRow, neighborCol;
  let result;

  if (arraysEqual(node.pos, endPos())) {
    node.nodesVisited = visitedNodes;
    return node;
  }

  neighbors = [];
  up = new TreeNode(upPos(node.pos), node);
  right = new TreeNode(rightPos(node.pos), node);
  down = new TreeNode(downPos(node.pos), node);
  left = new TreeNode(leftPos(node.pos), node);
  neighbors.push(up, right, down, left);

  for (let i = 0; i < neighbors.length; i++) {
    neighborRow = neighbors[i].pos[0];
    neighborCol = neighbors[i].pos[1];

    if (neighborRow < 0 || neighborCol < 0 ||
        neighborRow >= tblArray.length || neighborCol >= tblArray[0].length) {
      continue;
    }

    if (findNode(neighbors[i], visitedNodes) || !occupiable(i, tblArray[neighborRow][neighborCol])) {
      continue;
    }

    visitedNodes.push(neighbors[i]);

    // tblArray[neighborRow][neighborCol].addClass('mid');

    result = depthFirstSolve(neighbors[i], visitedNodes);

    if (result) {
      return result;
    }
  }

  return undefined;
};

const renderSolution = function() {
  let t0 = performance.now();
  let square = depthFirstSolve(new TreeNode(startPos(), undefined));
  let t1 = performance.now();

  let tblArray = convertToArray();
  let totalNodes = tblArray.length * tblArray[0].length;
  let duration = (t1 - t0)/1000;
  let nodesVisited = square.nodesVisited.length;
  let efficiency = ((totalNodes - nodesVisited) / totalNodes) * 100;

  let finishedMarkingVisited = false;
  let timerId;
  let neighborRow, neighborCol;
  let i = 0;

  timerId = setInterval(() => {
    neighborRow = square.nodesVisited[i].pos[0];
    neighborCol = square.nodesVisited[i].pos[1];
    tblArray[neighborRow][neighborCol].addClass('mid');

    i++;

    if (i === square.nodesVisited.length) {
      finishedMarkingVisited = true;
    }

    if (finishedMarkingVisited) {
      $('.time-value').text(`${duration.toFixed(2)} s`);
      $('.visited-value').text(nodesVisited);
      $('.efficiency-value').text(`${efficiency.toFixed(2)} %`);

      let solution = [];

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

      clearInterval(timerId);
    }
  });
};

export default renderSolution;

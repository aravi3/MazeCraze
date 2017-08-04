import TreeNode from './breadth_first_node';
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
  let timerId;
  let duration, t1, t0;
  let neighborRow, neighborCol, interimRow, interimCol;
  let topNode, neighbors, up, right, down, left;
  let nodesVisited, efficiency;
  let nodeQueue = [];
  let visitedNodes = [];
  let trail = [];

  trail.push(new TreeNode(startPos(), undefined));
  nodeQueue.push(new TreeNode(startPos(), undefined));
  visitedNodes.push(startPos());

  t0 = performance.now();

  timerId = setInterval(() => {
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

        tblArray[neighborRow][neighborCol].addClass('head');

        for (let j = 0; j < (visitedNodes.length - 1); j++) {
          interimRow = visitedNodes[j][0];
          interimCol = visitedNodes[j][1];
          tblArray[interimRow][interimCol].removeClass('head');
          tblArray[interimRow][interimCol].addClass('mid');
        }

        if (arraysEqual(neighbors[i], endPos())) {
          t1 = performance.now();
          duration = (t1 - t0)/1000;
          nodesVisited = visitedNodes.length;
          // efficiency = ((totalNodes - nodesVisited) / totalNodes) * 100;
          $('.time-value').text(`${duration.toFixed(2)} s`);
          $('.visited-value').text(nodesVisited);
          renderSolution(tblArray, trail, nodesVisited);
          clearInterval(timerId);
          break;
        }
      }
    }
  }, 0);
};

const renderSolution = function(tblArray, trail, nodesVisited) {
  let efficiency;
  let totalNodes = tblArray.length * tblArray[0].length;
  let square;
  let solution = [];

  square = trail.slice(-1)[0];

  while (square.parent) {
    square = square.parent;

    if (arraysEqual(square.pos, startPos())) {
      break;
    }

    solution.unshift(square);
  }

  solution.forEach(cell => {
    tblArray[cell.row][cell.col].removeClass('head');
    tblArray[cell.row][cell.col].removeClass('mid');
    tblArray[cell.row][cell.col].addClass('v');
  });

  efficiency = ((totalNodes - (nodesVisited - solution.length)) / totalNodes) * 100;

  $('.efficiency-value').text(`${efficiency.toFixed(2)} %`);

  $("table#maze tr").each(function() {
    let dataCell = $(this).find('td');

    if (dataCell.length > 0) {
        dataCell.each(function() {
          $(this).removeClass('head');
        });
    }
  });
};

export default breadthFirstSolve;

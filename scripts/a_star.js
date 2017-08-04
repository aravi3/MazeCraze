import TreeNode from './a_star_node';
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
  calculateHValue,
  removeNode,
  findNode
} from './modules';

const aStarSolve = function() {
  let tblArray = convertToArray();
  let totalNodes = tblArray.length * tblArray[0].length;
  let timerId;
  let duration, t1, t0;
  let neighbors, neighborRow, neighborCol, interimRow, interimCol;
  let up, right, down, left;
  let nodesVisited, efficiency;
  let gScore, gScoreIsBest;
  // let gValue = 10;
  let endFound = false;
  let currentNode;
  let openList = [];
  let closedList = [];

  openList.push(new TreeNode(startPos(), undefined, calculateHValue(startPos())));

  t0 = performance.now();

  timerId = setInterval(() => {
    let lowInd = 0;

    for (let i = 0; i < openList.length; i++) {
      if (openList[i].fValue < openList[lowInd].fValue) {
        lowInd = i;
      }
    }

    currentNode = openList[lowInd];

    if (arraysEqual(currentNode.pos, endPos())) {
      t1 = performance.now();
      duration = (t1 - t0)/1000;
      nodesVisited = closedList.length;
      efficiency = ((totalNodes - nodesVisited) / totalNodes) * 100;
      $('.time-value').text(`${duration.toFixed(2)} s`);
      $('.visited-value').text(nodesVisited);
      $('.efficiency-value').text(`${efficiency.toFixed(2)} %`);
      renderSolution(tblArray, currentNode);
      clearInterval(timerId);
      endFound = true;
    }

    removeNode(currentNode, openList);

    closedList.push(currentNode);
    tblArray[currentNode.pos[0]][currentNode.pos[1]].removeClass('head');
    tblArray[currentNode.pos[0]][currentNode.pos[1]].addClass('mid');

    neighbors = [];
    up = new TreeNode(upPos(currentNode.pos), currentNode, calculateHValue(upPos(currentNode.pos)));
    right = new TreeNode(rightPos(currentNode.pos), currentNode, calculateHValue(rightPos(currentNode.pos)));
    down = new TreeNode(downPos(currentNode.pos), currentNode, calculateHValue(downPos(currentNode.pos)));
    left = new TreeNode(leftPos(currentNode.pos), currentNode, calculateHValue(leftPos(currentNode.pos)));
    neighbors.push(up, right, down, left);

    for (let i = 0; i < neighbors.length; i++) {
      neighborRow = neighbors[i].pos[0];
      neighborCol = neighbors[i].pos[1];

      if (neighborRow < 0 || neighborCol < 0 ||
          neighborRow >= tblArray.length || neighborCol >= tblArray[0].length) {
        continue;
      }

      if (findNode(neighbors[i], closedList) || !occupiable(i, tblArray[neighborRow][neighborCol])) {
        continue;
      }

      if (!endFound) {
        tblArray[neighborRow][neighborCol].addClass('head');

        // for (let j = 0; j < closedList.length; j++) {
        //   interimRow = closedList[j].pos[0];
        //   interimCol = closedList[j].pos[1];
        //   tblArray[interimRow][interimCol].removeClass('head');
        //   tblArray[interimRow][interimCol].addClass('mid');
        // }
      }

      gScore = currentNode.gValue + 1;
      gScoreIsBest = false;

      if(!findNode(neighbors[i], openList)) {
        gScoreIsBest = true;
        openList.push(neighbors[i]);
      }
      else if (gScore < neighbors[i].gValue) {
        gScoreIsBest = true;
      }

      if (gScoreIsBest) {
        neighbors[i].parent = currentNode;
        neighbors[i].gValue = gScore;
        neighbors[i].fValue = neighbors[i].gValue + neighbors[i].hValue;
      }
    }

    if (openList.length === 0) {
      clearInterval(timerId);
    }
  }, 0);

  return undefined;
};

const renderSolution = function(tblArray, square) {
  let solution = [];

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

  $("table#maze tr").each(function() {
    let dataCell = $(this).find('td');

    if (dataCell.length > 0) {
        dataCell.each(function() {
          $(this).removeClass('head');
        });
    }
  });
};

export default aStarSolve;

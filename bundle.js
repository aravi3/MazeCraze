/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const convertToArray = function() {
  let tblArray = [];

  $("table#maze tr").each(function() {
      let rowArray = [];
      let dataCell = $(this).find('td');

      if (dataCell.length > 0) {
          dataCell.each(function() {
            rowArray.push($(this));
          });

          tblArray.push(rowArray);
      }
  });

  return tblArray;
};
/* harmony export (immutable) */ __webpack_exports__["c"] = convertToArray;


const startPos = function() {
  let tblArray = convertToArray();

  for (let row = 0; row < tblArray.length; row++) {
    for (let col = 0; col < tblArray[0].length; col++) {
      if (tblArray[row][col].attr('id') === 'start') {
        return [row, col];
      }
    }
  }
};
/* harmony export (immutable) */ __webpack_exports__["l"] = startPos;


const endPos = function() {
  let tblArray = convertToArray();

  for (let row = 0; row < tblArray.length; row++) {
    for (let col = 0; col < tblArray[0].length; col++) {
      if (tblArray[row][col].attr('id') === 'end') {
        return [row, col];
      }
    }
  }
};
/* harmony export (immutable) */ __webpack_exports__["e"] = endPos;


const upPos = function(pos) {
  return [pos[0] - 1, pos[1]];
};
/* harmony export (immutable) */ __webpack_exports__["m"] = upPos;


const rightPos = function(pos) {
  return [pos[0], pos[1] + 1];
};
/* harmony export (immutable) */ __webpack_exports__["k"] = rightPos;


const downPos = function(pos) {
  return [pos[0] + 1, pos[1]];
};
/* harmony export (immutable) */ __webpack_exports__["d"] = downPos;


const leftPos = function(pos) {
  return [pos[0], pos[1] - 1];
};
/* harmony export (immutable) */ __webpack_exports__["h"] = leftPos;


const occupiable = function(i, el) {
  if (i === 0 && el.hasClass('s')) {
    return true;
  }
  else if (i === 1 && el.hasClass('w'))
    return true;
  else if (i === 2 && el.hasClass('n')) {
    return true;
  }
  else if (i === 3 && el.hasClass('e')) {
    return true;
  }

  return false;
};
/* harmony export (immutable) */ __webpack_exports__["i"] = occupiable;


const arraysEqual = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if(arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};
/* harmony export (immutable) */ __webpack_exports__["a"] = arraysEqual;


const includedIn = function(childArr, parentArr) {
  for (let i = 0; i < parentArr.length; i++) {
    if (arraysEqual(childArr, parentArr[i])) {
      return true;
    }
  }

  return false;
};
/* harmony export (immutable) */ __webpack_exports__["g"] = includedIn;


const calculateHValue = function(pos) {
  let hValue = Math.abs(endPos()[1] - pos[1]) + Math.abs(endPos()[0] - pos[0]);
  return hValue;
};
/* harmony export (immutable) */ __webpack_exports__["b"] = calculateHValue;


const removeNode = function(node, list) {
  for (let i = 0; i < list.length; i++) {
    if (arraysEqual(list[i].pos, node.pos)) {
      if (i > -1) {
        list.splice(i, 1);
      }
    }
  }
};
/* harmony export (immutable) */ __webpack_exports__["j"] = removeNode;


const findNode = function(node, list) {
  for (let i = 0; i < list.length; i++) {
    if (arraysEqual(list[i].pos, node.pos)) {
      if (i > -1) {
        return true;
      }
    }
  }

  return false;
};
/* harmony export (immutable) */ __webpack_exports__["f"] = findNode;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scripts_generate_new_maze__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts_modules__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scripts_breadth_first__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scripts_depth_first__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scripts_a_star__ = __webpack_require__(7);






$(() => {
  $('#rows').val('20');
  $('#cols').val('20');

  $('.modal-button').on('click', (e) => {
    e.preventDefault();
    $('#splash').css('visibility', 'hidden');
    $('#overlay').css('overflow-y', 'scroll');
  });

  $('.instructions-link').on('click', (e) => {
    e.preventDefault();
    $('#splash').css('visibility', 'visible');
    $('#overlay').css('overflow-y', 'hidden');
  });

  $('#generate').on('click', (e) => {
    e.preventDefault();
    Object(__WEBPACK_IMPORTED_MODULE_0__scripts_generate_new_maze__["a" /* makeMaze */])($('#rows').val(), $('#cols').val());
  });

  $('#maze').on('click', (e) => {
    e.preventDefault();

    const $table = $(e.currentTarget);

    if ($table.find("td").is(e.target)) {
      if (($('#start').length + $('#end').length) === 2) {
      }
      else if ($('#start').length === 0) {
        $(e.target).attr('id', 'start');
      }
      else if (($('#start').length === 1) && ($('#end').length === 0)) {
        $(e.target).attr('id', 'end');
      }
    }
  });

  $('#breadth').on('click', (e) => {
    e.preventDefault();

    $('#astar').css('text-decoration', 'none');
    $('#depth').css('text-decoration', 'none');
    $('#breadth').css('text-decoration', 'underline');

    $("table#maze tr").each(function() {
      let dataCell = $(this).find('td');

      if (dataCell.length > 0) {
          dataCell.each(function() {
            $(this).removeClass('mid');
            $(this).removeClass('solution');
            $(this).removeClass('head');
          });
      }
    });

    if (($('#start').length + $('#end').length) === 2) {
      Object(__WEBPACK_IMPORTED_MODULE_2__scripts_breadth_first__["a" /* default */])();
    }
    else if (($('#start').length + $('#end').length) === 1) {
      alert("Must select endpoint");
    }
    else {
      let tblArray = Object(__WEBPACK_IMPORTED_MODULE_1__scripts_modules__["c" /* convertToArray */])();
      tblArray[0][0].attr('id', 'start');
      tblArray[tblArray.length - 1][tblArray[0].length - 1].attr('id', 'end');
      Object(__WEBPACK_IMPORTED_MODULE_2__scripts_breadth_first__["a" /* default */])();
    }
  });

  $('#astar').on('click', (e) => {
    e.preventDefault();

    $('#depth').css('text-decoration', 'none');
    $('#breadth').css('text-decoration', 'none');
    $('#astar').css('text-decoration', 'underline');

    $("table#maze tr").each(function() {
      let dataCell = $(this).find('td');

      if (dataCell.length > 0) {
          dataCell.each(function() {
            $(this).removeClass('mid');
            $(this).removeClass('solution');
            $(this).removeClass('head');
          });
      }
    });

    if (($('#start').length + $('#end').length) === 2) {
      Object(__WEBPACK_IMPORTED_MODULE_4__scripts_a_star__["a" /* default */])();
    }
    else if (($('#start').length + $('#end').length) === 1) {
      alert("Must select endpoint");
    }
    else {
      let tblArray = Object(__WEBPACK_IMPORTED_MODULE_1__scripts_modules__["c" /* convertToArray */])();
      tblArray[0][0].attr('id', 'start');
      tblArray[tblArray.length - 1][tblArray[0].length - 1].attr('id', 'end');
      Object(__WEBPACK_IMPORTED_MODULE_4__scripts_a_star__["a" /* default */])();
    }
  });

  $('#depth').on('click', (e) => {
    e.preventDefault();

    $('#astar').css('text-decoration', 'none');
    $('#breadth').css('text-decoration', 'none');
    $('#depth').css('text-decoration', 'underline');

    $("table#maze tr").each(function() {
      let dataCell = $(this).find('td');

      if (dataCell.length > 0) {
          dataCell.each(function() {
            $(this).removeClass('mid');
            $(this).removeClass('solution');
            $(this).removeClass('head');
          });
      }
    });

    if (($('#start').length + $('#end').length) === 2) {
      Object(__WEBPACK_IMPORTED_MODULE_3__scripts_depth_first__["a" /* default */])();
    }
    else if (($('#start').length + $('#end').length) === 1) {
      alert("Must select endpoint");
    }
    else {
      let tblArray = Object(__WEBPACK_IMPORTED_MODULE_1__scripts_modules__["c" /* convertToArray */])();
      tblArray[0][0].attr('id', 'start');
      tblArray[tblArray.length - 1][tblArray[0].length - 1].attr('id', 'end');
      Object(__WEBPACK_IMPORTED_MODULE_3__scripts_depth_first__["a" /* default */])();
    }
  });

  $('#clear').on('click', (e) => {
    e.preventDefault();

    $('#astar').css('text-decoration', 'none');
    $('#breadth').css('text-decoration', 'none');
    $('#depth').css('text-decoration', 'none');

    $('#start').removeAttr('id');
    $('#end').removeAttr('id');

    $("table#maze tr").each(function() {
      let dataCell = $(this).find('td');

      if (dataCell.length > 0) {
          dataCell.each(function() {
            $(this).removeClass('mid');
            $(this).removeClass('solution');
            $(this).removeClass('head');
          });
      }
    });

    $('.time-value').text("");
    $('.visited-value').text("");
    $('.efficiency-value').text("");
  });

  $('#generate').trigger('click');
});


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// Followed code tutorial on how to generate a random maze using depth-first search
// from https://rosettacode.org/wiki/Maze_generation

const DIRS = ['s', 'e', 'w', 'n'];

NodeList.prototype.map = function(node) {
	for (let i = 0; i < this.length; i++) {
    node(this[i]);
  }
};

Node.prototype.add = function(tag, count, text) {
	let el;

	for (let i = 0; i < count; i++) {
		el = document.createElement(tag);

		if (text !== undefined) {
			el.innerHTML = text;
		}

    this.appendChild(el);
  }
};

const shuffle = (arr) => {
	for (let i = 3; i > 0; i--) {
		let rand = Math.floor(Math.random() * (i + 1));

		if (i === rand) {
      continue;
    }

		let temp = arr[rand];
    arr[rand] = arr[i];
    arr[i] = temp;
	}

	return arr;
};

const walk = (node) => {
	node.innerHTML = '&nbsp;';
	let idx = shuffle([0, 1, 2, 3]);

	for (let j = 0; j < 4; j++) {
		let i = idx[j];
		let neighbor = node.neighbors[i];

		if (neighbor.textContent !== '*') {
      continue;
    }

		node.className += ' ' + DIRS[i];
		neighbor.className += ' ' + DIRS[3 - i];
		walk(neighbor);
	}
};

const makeMaze = (rows, cols) => {
	if (parseInt(rows) <= 0 || parseInt(cols) <= 0) {
		alert("Dimensions must be positive numbers!");
		return;
	}

	let width = parseInt(cols) || 20;
	let height = parseInt(rows) || 20;

	if (width > 50 || height > 50) {
		alert("Dimensions must be under 50 x 50 for performance reasons!");
		return;
	}

	let tbl = document.getElementById('maze');

	tbl.innerHTML = "";
	tbl.add('tr', height);

	tbl.childNodes.map(node => {
    node.add('th', 1);
    node.add('td', width, '*');
    node.add('th', 1);
  });

	let el = document.createElement('tr');

	tbl.insertBefore(el, tbl.firstChild);
	tbl.add('tr', 1);
	tbl.firstChild.add('th', width + 2);
	tbl.lastChild.add('th', width + 2);

	for (let i = 1; i <= height; i++) {
		for (let j = 1; j <= width; j++) {
			tbl.childNodes[i].childNodes[j].neighbors = [
				tbl.childNodes[i + 1].childNodes[j],
				tbl.childNodes[i].childNodes[j + 1],
				tbl.childNodes[i].childNodes[j - 1],
				tbl.childNodes[i - 1].childNodes[j]
			];
		}
	}

	walk(tbl.childNodes[Math.floor(Math.random() * height) + 1].childNodes[Math.floor(Math.random() * width) + 1]);
};
/* harmony export (immutable) */ __webpack_exports__["a"] = makeMaze;



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__breadth_first_node__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules__ = __webpack_require__(0);



const breadthFirstSolve = function() {
  let tblArray = Object(__WEBPACK_IMPORTED_MODULE_1__modules__["c" /* convertToArray */])();
  let timerId;
  let duration, t1, t0;
  let neighborRow, neighborCol, interimRow, interimCol;
  let topNode, neighbors, up, right, down, left;
  let nodesVisited, efficiency;
  let nodeQueue = [];
  let visitedNodes = [];
  let trail = [];

  trail.push(new __WEBPACK_IMPORTED_MODULE_0__breadth_first_node__["a" /* default */](Object(__WEBPACK_IMPORTED_MODULE_1__modules__["l" /* startPos */])(), undefined));
  nodeQueue.push(new __WEBPACK_IMPORTED_MODULE_0__breadth_first_node__["a" /* default */](Object(__WEBPACK_IMPORTED_MODULE_1__modules__["l" /* startPos */])(), undefined));
  visitedNodes.push(Object(__WEBPACK_IMPORTED_MODULE_1__modules__["l" /* startPos */])());

  t0 = performance.now();

  timerId = setInterval(() => {
    topNode = nodeQueue.shift();
    neighbors = [];
    up = Object(__WEBPACK_IMPORTED_MODULE_1__modules__["m" /* upPos */])(topNode.pos);
    right = Object(__WEBPACK_IMPORTED_MODULE_1__modules__["k" /* rightPos */])(topNode.pos);
    down = Object(__WEBPACK_IMPORTED_MODULE_1__modules__["d" /* downPos */])(topNode.pos);
    left = Object(__WEBPACK_IMPORTED_MODULE_1__modules__["h" /* leftPos */])(topNode.pos);
    neighbors.push(up, right, down, left);

    for (let i = 0; i < neighbors.length; i++) {
      neighborRow = neighbors[i][0];
      neighborCol = neighbors[i][1];

      if (neighborRow < 0 || neighborCol < 0 ||
          neighborRow >= tblArray.length || neighborCol >= tblArray[0].length) {
        continue;
      }

      if (Object(__WEBPACK_IMPORTED_MODULE_1__modules__["i" /* occupiable */])(i, tblArray[neighborRow][neighborCol]) && !Object(__WEBPACK_IMPORTED_MODULE_1__modules__["g" /* includedIn */])(neighbors[i], visitedNodes)) {
        visitedNodes.push(neighbors[i]);
        nodeQueue.push(new __WEBPACK_IMPORTED_MODULE_0__breadth_first_node__["a" /* default */](neighbors[i], topNode));
        trail.push(new __WEBPACK_IMPORTED_MODULE_0__breadth_first_node__["a" /* default */](neighbors[i], topNode));

        tblArray[neighborRow][neighborCol].addClass('head');

        for (let j = 0; j < (visitedNodes.length - 1); j++) {
          interimRow = visitedNodes[j][0];
          interimCol = visitedNodes[j][1];
          tblArray[interimRow][interimCol].removeClass('head');
          tblArray[interimRow][interimCol].addClass('mid');
        }

        if (Object(__WEBPACK_IMPORTED_MODULE_1__modules__["a" /* arraysEqual */])(neighbors[i], Object(__WEBPACK_IMPORTED_MODULE_1__modules__["e" /* endPos */])())) {
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

    if (Object(__WEBPACK_IMPORTED_MODULE_1__modules__["a" /* arraysEqual */])(square.pos, Object(__WEBPACK_IMPORTED_MODULE_1__modules__["l" /* startPos */])())) {
      break;
    }

    solution.unshift(square);
  }

  solution.forEach(cell => {
    tblArray[cell.row][cell.col].removeClass('head');
    tblArray[cell.row][cell.col].removeClass('mid');
    tblArray[cell.row][cell.col].addClass('solution');
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

/* harmony default export */ __webpack_exports__["a"] = (breadthFirstSolve);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class breadthFirstNode {
  constructor(pos, parent) {
    this.pos = pos;
    this.row = pos[0];
    this.col = pos[1];
    this.parent = parent;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (breadthFirstNode);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__depth_first_node__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules__ = __webpack_require__(0);



const depthFirstSolve = function(node, visitedNodes = []) {
  let tblArray = Object(__WEBPACK_IMPORTED_MODULE_1__modules__["c" /* convertToArray */])();
  let timerId;
  let neighbors, up, right, down, left;
  let neighborRow, neighborCol;
  let result;

  if (Object(__WEBPACK_IMPORTED_MODULE_1__modules__["a" /* arraysEqual */])(node.pos, Object(__WEBPACK_IMPORTED_MODULE_1__modules__["e" /* endPos */])())) {
    node.nodesVisited = visitedNodes;
    return node;
  }

  neighbors = [];
  up = new __WEBPACK_IMPORTED_MODULE_0__depth_first_node__["a" /* default */](Object(__WEBPACK_IMPORTED_MODULE_1__modules__["m" /* upPos */])(node.pos), node);
  right = new __WEBPACK_IMPORTED_MODULE_0__depth_first_node__["a" /* default */](Object(__WEBPACK_IMPORTED_MODULE_1__modules__["k" /* rightPos */])(node.pos), node);
  down = new __WEBPACK_IMPORTED_MODULE_0__depth_first_node__["a" /* default */](Object(__WEBPACK_IMPORTED_MODULE_1__modules__["d" /* downPos */])(node.pos), node);
  left = new __WEBPACK_IMPORTED_MODULE_0__depth_first_node__["a" /* default */](Object(__WEBPACK_IMPORTED_MODULE_1__modules__["h" /* leftPos */])(node.pos), node);
  neighbors.push(up, right, down, left);

  for (let i = 0; i < neighbors.length; i++) {
    neighborRow = neighbors[i].pos[0];
    neighborCol = neighbors[i].pos[1];

    if (neighborRow < 0 || neighborCol < 0 ||
        neighborRow >= tblArray.length || neighborCol >= tblArray[0].length) {
      continue;
    }

    if (Object(__WEBPACK_IMPORTED_MODULE_1__modules__["f" /* findNode */])(neighbors[i], visitedNodes) || !Object(__WEBPACK_IMPORTED_MODULE_1__modules__["i" /* occupiable */])(i, tblArray[neighborRow][neighborCol])) {
      continue;
    }

    visitedNodes.push(neighbors[i]);

    result = depthFirstSolve(neighbors[i], visitedNodes);

    if (result) {
      return result;
    }
  }

  return undefined;
};

const renderSolution = function() {
  let efficiency;
  let t0 = performance.now();
  let square = depthFirstSolve(new __WEBPACK_IMPORTED_MODULE_0__depth_first_node__["a" /* default */](Object(__WEBPACK_IMPORTED_MODULE_1__modules__["l" /* startPos */])(), undefined));
  let t1 = performance.now();

  let tblArray = Object(__WEBPACK_IMPORTED_MODULE_1__modules__["c" /* convertToArray */])();
  let totalNodes = tblArray.length * tblArray[0].length;
  let duration = (t1 - t0)/1000;
  let nodesVisited = square.nodesVisited.length;

  let finishedMarkingVisited = false;
  let timerId;
  let neighborRow, neighborCol, interimRow, interimCol;
  let i = 0;

  timerId = setInterval(() => {
    neighborRow = square.nodesVisited[i].pos[0];
    neighborCol = square.nodesVisited[i].pos[1];

    tblArray[neighborRow][neighborCol].addClass('head');

    for (let j = 0; j < i; j++) {
      interimRow = square.nodesVisited[j].pos[0];
      interimCol = square.nodesVisited[j].pos[1];
      tblArray[interimRow][interimCol].removeClass('head');
      tblArray[interimRow][interimCol].addClass('mid');
    }

    i++;

    if (i === nodesVisited) {
      finishedMarkingVisited = true;
    }

    if (finishedMarkingVisited) {
      $('.time-value').text(`${duration.toFixed(2)} s`);
      $('.visited-value').text(nodesVisited);

      let solution = [];

      while (square.parent) {
        square = square.parent;

        if (Object(__WEBPACK_IMPORTED_MODULE_1__modules__["a" /* arraysEqual */])(square.pos, Object(__WEBPACK_IMPORTED_MODULE_1__modules__["l" /* startPos */])())) {
          break;
        }

        solution.unshift(square);
      }

      solution.forEach(cell => {
        tblArray[cell.row][cell.col].removeClass('head');
        tblArray[cell.row][cell.col].removeClass('mid');
        tblArray[cell.row][cell.col].addClass('solution');
      });

      efficiency = ((totalNodes - (nodesVisited - solution.length)) / totalNodes) * 100;
      $('.efficiency-value').text(`${efficiency.toFixed(2)} %`);

      clearInterval(timerId);

      $("table#maze tr").each(function() {
        let dataCell = $(this).find('td');

        if (dataCell.length > 0) {
            dataCell.each(function() {
              $(this).removeClass('head');
            });
        }
      });
    }
  });
};

/* harmony default export */ __webpack_exports__["a"] = (renderSolution);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class depthFirstNode {
  constructor(pos, parent) {
    this.nodesVisited = [];
    this.pos = pos;
    this.row = pos[0];
    this.col = pos[1];
    this.parent = parent;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (depthFirstNode);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__a_star_node__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules__ = __webpack_require__(0);



const aStarSolve = function() {
  let tblArray = Object(__WEBPACK_IMPORTED_MODULE_1__modules__["c" /* convertToArray */])();
  let timerId;
  let duration, t1, t0;
  let neighbors, neighborRow, neighborCol, interimRow, interimCol;
  let up, right, down, left;
  let nodesVisited;
  let gScore, gScoreIsBest;
  let endFound = false;
  let currentNode;
  let openList = [];
  let closedList = [];

  openList.push(new __WEBPACK_IMPORTED_MODULE_0__a_star_node__["a" /* default */](Object(__WEBPACK_IMPORTED_MODULE_1__modules__["l" /* startPos */])(), undefined, Object(__WEBPACK_IMPORTED_MODULE_1__modules__["b" /* calculateHValue */])(Object(__WEBPACK_IMPORTED_MODULE_1__modules__["l" /* startPos */])())));

  t0 = performance.now();

  timerId = setInterval(() => {
    let lowInd = 0;

    for (let i = 0; i < openList.length; i++) {
      if (openList[i].fValue < openList[lowInd].fValue) {
        lowInd = i;
      }
    }

    currentNode = openList[lowInd];

    if (Object(__WEBPACK_IMPORTED_MODULE_1__modules__["a" /* arraysEqual */])(currentNode.pos, Object(__WEBPACK_IMPORTED_MODULE_1__modules__["e" /* endPos */])())) {
      t1 = performance.now();
      duration = (t1 - t0)/1000;
      nodesVisited = closedList.length;
      $('.time-value').text(`${duration.toFixed(2)} s`);
      $('.visited-value').text(nodesVisited);
      renderSolution(tblArray, currentNode, nodesVisited);
      clearInterval(timerId);
      endFound = true;
    }

    Object(__WEBPACK_IMPORTED_MODULE_1__modules__["j" /* removeNode */])(currentNode, openList);

    closedList.push(currentNode);
    tblArray[currentNode.pos[0]][currentNode.pos[1]].removeClass('head');
    tblArray[currentNode.pos[0]][currentNode.pos[1]].addClass('mid');

    neighbors = [];
    up = new __WEBPACK_IMPORTED_MODULE_0__a_star_node__["a" /* default */](Object(__WEBPACK_IMPORTED_MODULE_1__modules__["m" /* upPos */])(currentNode.pos), currentNode, Object(__WEBPACK_IMPORTED_MODULE_1__modules__["b" /* calculateHValue */])(Object(__WEBPACK_IMPORTED_MODULE_1__modules__["m" /* upPos */])(currentNode.pos)));
    right = new __WEBPACK_IMPORTED_MODULE_0__a_star_node__["a" /* default */](Object(__WEBPACK_IMPORTED_MODULE_1__modules__["k" /* rightPos */])(currentNode.pos), currentNode, Object(__WEBPACK_IMPORTED_MODULE_1__modules__["b" /* calculateHValue */])(Object(__WEBPACK_IMPORTED_MODULE_1__modules__["k" /* rightPos */])(currentNode.pos)));
    down = new __WEBPACK_IMPORTED_MODULE_0__a_star_node__["a" /* default */](Object(__WEBPACK_IMPORTED_MODULE_1__modules__["d" /* downPos */])(currentNode.pos), currentNode, Object(__WEBPACK_IMPORTED_MODULE_1__modules__["b" /* calculateHValue */])(Object(__WEBPACK_IMPORTED_MODULE_1__modules__["d" /* downPos */])(currentNode.pos)));
    left = new __WEBPACK_IMPORTED_MODULE_0__a_star_node__["a" /* default */](Object(__WEBPACK_IMPORTED_MODULE_1__modules__["h" /* leftPos */])(currentNode.pos), currentNode, Object(__WEBPACK_IMPORTED_MODULE_1__modules__["b" /* calculateHValue */])(Object(__WEBPACK_IMPORTED_MODULE_1__modules__["h" /* leftPos */])(currentNode.pos)));
    neighbors.push(up, right, down, left);

    for (let i = 0; i < neighbors.length; i++) {
      neighborRow = neighbors[i].pos[0];
      neighborCol = neighbors[i].pos[1];

      if (neighborRow < 0 || neighborCol < 0 ||
          neighborRow >= tblArray.length || neighborCol >= tblArray[0].length) {
        continue;
      }

      if (Object(__WEBPACK_IMPORTED_MODULE_1__modules__["f" /* findNode */])(neighbors[i], closedList) || !Object(__WEBPACK_IMPORTED_MODULE_1__modules__["i" /* occupiable */])(i, tblArray[neighborRow][neighborCol])) {
        continue;
      }

      if (!endFound) {
        tblArray[neighborRow][neighborCol].addClass('head');
      }

      gScore = currentNode.gValue + 1;
      gScoreIsBest = false;

      if(!Object(__WEBPACK_IMPORTED_MODULE_1__modules__["f" /* findNode */])(neighbors[i], openList)) {
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

const renderSolution = function(tblArray, square, nodesVisited) {
  let efficiency;
  let totalNodes = tblArray.length * tblArray[0].length;
  let solution = [];

  while (square.parent) {
    square = square.parent;

    if (Object(__WEBPACK_IMPORTED_MODULE_1__modules__["a" /* arraysEqual */])(square.pos, Object(__WEBPACK_IMPORTED_MODULE_1__modules__["l" /* startPos */])())) {
      break;
    }

    solution.unshift(square);
  }

  solution.forEach(cell => {
    tblArray[cell.row][cell.col].removeClass('head');
    tblArray[cell.row][cell.col].removeClass('mid');
    tblArray[cell.row][cell.col].addClass('solution');
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

/* harmony default export */ __webpack_exports__["a"] = (aStarSolve);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class aStarNode {
  constructor(pos, parent = undefined, hValue = 0) {
    this.hValue = hValue;
    this.gValue = 0;
    this.fValue = 0;
    this.pos = pos;
    this.row = pos[0];
    this.col = pos[1];
    this.parent = parent;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (aStarNode);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map
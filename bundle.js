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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scripts_generate_new_maze__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts_modules__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scripts_breadth_first__ = __webpack_require__(3);




$(() => {
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

  $('#solve').on('click', (e) => {
    e.preventDefault();

    if (($('#start').length + $('#end').length) === 2) {
      Object(__WEBPACK_IMPORTED_MODULE_2__scripts_breadth_first__["a" /* default */])();
    }
    else {
      let tblArray = Object(__WEBPACK_IMPORTED_MODULE_1__scripts_modules__["b" /* convertToArray */])();
      tblArray[0][0].attr('id', 'start');
      tblArray[tblArray.length - 1][tblArray[0].length - 1].attr('id', 'end');
      Object(__WEBPACK_IMPORTED_MODULE_2__scripts_breadth_first__["a" /* default */])();
    }
  });

  $('#clear').on('click', (e) => {
    e.preventDefault();
    $('#start').removeAttr('id');
    $('#end').removeAttr('id');

    $("table#maze tr").each(function() {
      let dataCell = $(this).find('td');

      if (dataCell.length > 0) {
          dataCell.each(function() {
            $(this).removeClass('mid');
            $(this).removeClass('v');
          });
      }
    });
  });
});

// document.addEventListener("DOMContentLoaded", () => {
//   let canvas = document.getElementById('mycanvas');
//   canvas.height = 500;
//   canvas.width = 500;
//
//   let ctx = canvas.getContext('2d');
//   ctx.fillStyle = "red";
//   ctx.fillRect(100, 100, 600, 600);
// });


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Node.prototype.add = function(tag, cnt, txt) {
	for (let i = 0; i < cnt; i++) {
    this.appendChild(ce(tag, txt));
  }
};

Node.prototype.ins = function(tag) {
	this.insertBefore(ce(tag), this.firstChild);
};

Node.prototype.kid = function(i) {
  return this.childNodes[i];
};

Node.prototype.cls = function(t) {
  this.className += ' ' + t;
};

NodeList.prototype.map = function(g) {
	for (let i = 0; i < this.length; i++) {
    g(this[i]);
  }
};

function ce(tag, txt) {
	let x = document.createElement(tag);

	if (txt !== undefined) {
    x.innerHTML = txt;
  }

	return x;
}

const gid = function(e) {
  return document.getElementById(e);
};
/* unused harmony export gid */


function irand(x) {
  return Math.floor(Math.random() * x);
}

const makeMaze = function(rows, cols) {
	let w = parseInt(cols || 20);
	let h = parseInt(rows || 20);
	let tbl = gid('maze');

	tbl.innerHTML = '';
	tbl.add('tr', h);

	tbl.childNodes.map(x => {
    x.add('th', 1);
    x.add('td', w, '*');
    x.add('th', 1);
  });

	tbl.ins('tr');
	tbl.add('tr', 1);
	tbl.firstChild.add('th', w + 2);
	tbl.lastChild.add('th', w + 2);

	for (let i = 1; i <= h; i++) {
		for (let j = 1; j <= w; j++) {
			tbl.kid(i).kid(j).neighbors = [
				tbl.kid(i + 1).kid(j),
				tbl.kid(i).kid(j + 1),
				tbl.kid(i).kid(j - 1),
				tbl.kid(i - 1).kid(j)
			];
		}
	}

	walk(tbl.kid(irand(h) + 1).kid(irand(w) + 1));
	// gid('solve').style.display='inline';
};
/* harmony export (immutable) */ __webpack_exports__["a"] = makeMaze;


function shuffle(x) {
	for (let i = 3; i > 0; i--) {
		let j = irand(i + 1);

		if (j == i) {
      continue;
    }

		let t = x[j];
    x[j] = x[i];
    x[i] = t;
	}

	return x;
}

let dirs = ['s', 'e', 'w', 'n'];

function walk(c) {
	c.innerHTML = '&nbsp;';
	let idx = shuffle([0, 1, 2, 3]);
	for (let j = 0; j < 4; j++) {
		let i = idx[j];
		let x = c.neighbors[i];

		if (x.textContent != '*') {
      continue;
    }

		c.cls(dirs[i]), x.cls(dirs[3 - i]);
		walk(x);
	}
}

// export const solve = function(c, t) {
// 	c = gid('start');
// 	t = gid('end');
//
// 	if (c === undefined) {
// 		c = gid('maze').kid(1).kid(1);
// 		c.cls('v');
// 	}
//
// 	if (t === undefined) {
// 		t = gid('maze').kid(24).kid(39);
// 	}
//
// 	if (c === t) {
// 		return 1;
// 	}
//
// 	c.vis = 1;
//
// 	for (let i = 0; i < 4; i++) {
// 		let x = c.neighbors[i];
//
// 		if (x.tagName.toLowerCase() == 'th') {
// 			continue;
// 		}
//
// 		if (x.vis || !c.className.match(dirs[i] || !solve(x, t))) {
// 			continue;
// 		}
//
// 		x.cls('v');
// 		return 1;
// 	}
//
// 	c.vis = null;
// 	return 0;
// };


/***/ }),
/* 2 */
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
/* harmony export (immutable) */ __webpack_exports__["b"] = convertToArray;


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
/* harmony export (immutable) */ __webpack_exports__["i"] = startPos;


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
/* harmony export (immutable) */ __webpack_exports__["d"] = endPos;


const upPos = function(pos) {
  return [pos[0] - 1, pos[1]];
};
/* harmony export (immutable) */ __webpack_exports__["j"] = upPos;


const rightPos = function(pos) {
  return [pos[0], pos[1] + 1];
};
/* harmony export (immutable) */ __webpack_exports__["h"] = rightPos;


const downPos = function(pos) {
  return [pos[0] + 1, pos[1]];
};
/* harmony export (immutable) */ __webpack_exports__["c"] = downPos;


const leftPos = function(pos) {
  return [pos[0], pos[1] - 1];
};
/* harmony export (immutable) */ __webpack_exports__["f"] = leftPos;


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
/* harmony export (immutable) */ __webpack_exports__["g"] = occupiable;


const arraysEqual = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
      if(arr1[i] !== arr2[i])
          return false;
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
/* harmony export (immutable) */ __webpack_exports__["e"] = includedIn;



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tree_node__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules__ = __webpack_require__(2);



const breadthFirstSolve = function() {
  let tblArray = Object(__WEBPACK_IMPORTED_MODULE_1__modules__["b" /* convertToArray */])();
  let square;
  let neighborRow, neighborCol;
  let topNode, neighbors, up, right, down, left;
  let nodeQueue = [];
  let visitedNodes = [];
  let trail = [];
  let solution = [];

  trail.push(new __WEBPACK_IMPORTED_MODULE_0__tree_node__["a" /* default */](Object(__WEBPACK_IMPORTED_MODULE_1__modules__["i" /* startPos */])(), undefined));
  nodeQueue.push(new __WEBPACK_IMPORTED_MODULE_0__tree_node__["a" /* default */](Object(__WEBPACK_IMPORTED_MODULE_1__modules__["i" /* startPos */])(), undefined));
  visitedNodes.push(__WEBPACK_IMPORTED_MODULE_1__modules__["i" /* startPos */]);

  let endFound = false;

  while (nodeQueue.length !== 0 && !endFound) {
    topNode = nodeQueue.shift();
    neighbors = [];
    up = Object(__WEBPACK_IMPORTED_MODULE_1__modules__["j" /* upPos */])(topNode.pos);
    right = Object(__WEBPACK_IMPORTED_MODULE_1__modules__["h" /* rightPos */])(topNode.pos);
    down = Object(__WEBPACK_IMPORTED_MODULE_1__modules__["c" /* downPos */])(topNode.pos);
    left = Object(__WEBPACK_IMPORTED_MODULE_1__modules__["f" /* leftPos */])(topNode.pos);
    neighbors.push(up, right, down, left);

    for (let i = 0; i < neighbors.length; i++) {
      neighborRow = neighbors[i][0];
      neighborCol = neighbors[i][1];

      if (neighborRow < 0 || neighborCol < 0 ||
          neighborRow >= tblArray.length || neighborCol >= tblArray[0].length) {
        continue;
      }

      if (Object(__WEBPACK_IMPORTED_MODULE_1__modules__["g" /* occupiable */])(i, tblArray[neighborRow][neighborCol]) && !Object(__WEBPACK_IMPORTED_MODULE_1__modules__["e" /* includedIn */])(neighbors[i], visitedNodes)) {
        visitedNodes.push(neighbors[i]);
        nodeQueue.push(new __WEBPACK_IMPORTED_MODULE_0__tree_node__["a" /* default */](neighbors[i], topNode));
        trail.push(new __WEBPACK_IMPORTED_MODULE_0__tree_node__["a" /* default */](neighbors[i], topNode));

        tblArray[neighborRow][neighborCol].addClass('mid');

        if (Object(__WEBPACK_IMPORTED_MODULE_1__modules__["a" /* arraysEqual */])(neighbors[i], Object(__WEBPACK_IMPORTED_MODULE_1__modules__["d" /* endPos */])())) {
          endFound = true;
          break;
        }
      }
    }
  }

  square = trail.slice(-1)[0];

  while (square.parent) {
    square = square.parent;

    if (Object(__WEBPACK_IMPORTED_MODULE_1__modules__["a" /* arraysEqual */])(square.pos, Object(__WEBPACK_IMPORTED_MODULE_1__modules__["i" /* startPos */])())) {
      break;
    }

    solution.unshift(square);
  }

  solution.forEach(cell => {
    tblArray[cell.row][cell.col].removeClass('mid');
    tblArray[cell.row][cell.col].addClass('v');
  });
};

/* harmony default export */ __webpack_exports__["a"] = (breadthFirstSolve);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class TreeNode {
  constructor(pos, parent) {
    this.pos = pos;
    this.row = pos[0];
    this.col = pos[1];
    this.parent = parent;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (TreeNode);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map
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

export const makeMaze = (rows, cols) => {
	if (parseInt(rows) <= 0 || parseInt(cols) <= 0) {
		alert("Dimensions must be positive numbers!");
		return;
	}

	let width = parseInt(cols || 20);
	let height = parseInt(rows || 20);

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

	let firstRow = document.createElement('tr');

	tbl.insertBefore(firstRow, tbl.firstChild);
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

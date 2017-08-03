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

export const gid = function(e) {
  return document.getElementById(e);
};

function irand(x) {
  return Math.floor(Math.random() * x);
}

export const makeMaze = function(rows, cols) {
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
};

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

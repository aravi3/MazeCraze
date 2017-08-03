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

export default aStarNode;

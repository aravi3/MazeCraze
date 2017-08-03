class depthFirstNode {
  constructor(pos, parent) {
    this.nodesVisited = 0;
    this.pos = pos;
    this.row = pos[0];
    this.col = pos[1];
    this.parent = parent;
  }
}

export default depthFirstNode;

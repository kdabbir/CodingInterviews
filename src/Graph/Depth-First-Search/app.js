
function Graph(){
  this.nodes = null;
}

const stateEnum = {
  VISITED:"VISITED",
  VISITING: "VISITING",
  UNVISITED: "UNVISITED"
}

function Node(){
  this.neighbors = null;
  this.state = null;
  this.value = null;
}

Node.prototype.setState = function(state){
  this.state = state;
}


Node.prototype.getNeighbors = function(){
  return this.neighbors;
}

function DFSSearch(startNode , targetValue){
    if(startNode && startNode.state!= stateEnum.UNVISITED){
      if(DFSVisit(startNode, targetValue)) return true;
    }
    return false;
};

function DFSVisit(startNode,  targetValue){
    let queue = [startNode];
    startNode.setState(stateEnum.VISITING);
    while(queue.length){
      let currNode = queue.pop();
      if(currNode.value == targetValue) return true;
      let neighborsList = currNode.getNeighbors();
      neighborsList.forEach(neighborNode => {
        queue.push(neighborNode);
        neighborNode.setState(stateEnum.VISITING);
      });
      currNode.setState(stateEnum.VISITED);
    }
    return false;
}


//Alternate version is as below:


// /**
//  * @typedef {Object} Callbacks
//  *
//  * @property {function(vertices: Object): boolean} [allowTraversal] -
//  *  Determines whether DFS should traverse from the vertex to its neighbor
//  *  (along the edge). By default prohibits visiting the same vertex again.
//  *
//  * @property {function(vertices: Object)} [enterVertex] - Called when DFS enters the vertex.
//  *
//  * @property {function(vertices: Object)} [leaveVertex] - Called when DFS leaves the vertex.
//  */

// /**
//  * @param {Callbacks} [callbacks]
//  * @returns {Callbacks}
//  */
// function initCallbacks(callbacks = {}) {
//   const initiatedCallback = callbacks;

//   const stubCallback = () => {};

//   const allowTraversalCallback = (
//     () => {
//       const seen = {};
//       return ({ nextVertex }) => {
//         if (!seen[nextVertex.getKey()]) {
//           seen[nextVertex.getKey()] = true;
//           return true;
//         }
//         return false;
//       };
//     }
//   )();

//   initiatedCallback.allowTraversal = callbacks.allowTraversal || allowTraversalCallback;
//   initiatedCallback.enterVertex = callbacks.enterVertex || stubCallback;
//   initiatedCallback.leaveVertex = callbacks.leaveVertex || stubCallback;

//   return initiatedCallback;
// }

// /**
//  * @param {Graph} graph
//  * @param {GraphVertex} currentVertex
//  * @param {GraphVertex} previousVertex
//  * @param {Callbacks} callbacks
//  */
// function depthFirstSearchRecursive(graph, currentVertex, previousVertex, callbacks) {
//   callbacks.enterVertex({ currentVertex, previousVertex });

//   graph.getNeighbors(currentVertex).forEach((nextVertex) => {
//     if (callbacks.allowTraversal({ previousVertex, currentVertex, nextVertex })) {
//       depthFirstSearchRecursive(graph, nextVertex, currentVertex, callbacks);
//     }
//   });

//   callbacks.leaveVertex({ currentVertex, previousVertex });
// }

// /**
//  * @param {Graph} graph
//  * @param {GraphVertex} startVertex
//  * @param {Callbacks} [callbacks]
//  */
// export default function depthFirstSearch(graph, startVertex, callbacks) {
//   const previousVertex = null;
//   depthFirstSearchRecursive(graph, startVertex, previousVertex, initCallbacks(callbacks));
// }

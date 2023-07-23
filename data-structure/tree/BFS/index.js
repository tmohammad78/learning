
////// For a Graph 

const bfs = (graph, start)  => {
    const queue = [start];
    const visited = new Set();
    const result = [];
    //// [A]
    //// [B,D]
    //// [D,A,C,E]  => we put B and set his neighbor
    /// [A,C,E,A,E]  => we put D and set his neighbor => [A,C,E]
    /// [C,E] => 
    /// [E,B]
    /// [B,D,F]
    while (queue.length) {
      const vertex = queue.shift();
        console.log(vertex,queue)
      if (!visited.has(vertex)) {
        visited.add(vertex);
        result.push(vertex);
  
        for (const neighbor of graph[vertex]) {
          queue.push(neighbor);
        }
      }
    }
  
    return result;
  }

const graph = {
    A: ['B', 'D'],
    B: ['A', 'C', 'E'],
    C: ['B'],
    D: ['A', 'E'],
    E: ['B', 'D', 'F'],
    F: ['E'],
  };

console.log(bfs(graph,'A'))


/////////////// For a tree

const BFSTree = (node) => {
    if(!node) {
        return []
    }
    const queue = [node]
    const result = []

    while(queue.length) {
        const current = queue.shift()
        result.push(current.value)
        if(current.left){
            queue.push(current.left)
        }
        if(current.right){
            queue.push(current.right)
        }
    }
    return result;
}

bfs(treeNode)
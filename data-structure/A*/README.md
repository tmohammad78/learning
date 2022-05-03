# Introduction A* Algorithm
A* is a modification of Dijkstra’s Algorithm that is optimized for a single destination. Dijkstra’s Algorithm can find paths to all locations; A* finds paths to one location, or the closest of several locations. It prioritizes paths that seem to be leading closer to a goal. 

In finding path from A to B , we should have data, the data is graph , A* doesn't know about how to reach to that destination , it has no sense about the indoors and outdoors .

Dijkstra’s Algorithm works by visiting vertices in the graph starting with the object’s starting point. It then repeatedly examines the closest not-yet-examined vertex, adding its vertices to the set of vertices to be examined. It expands outwards from the starting point until it reaches the goal. Dijkstra’s Algorithm is guaranteed to find a shortest path from the starting point to the goal, as long as none of the edges have a negative cost. 

The Greedy Best-First-Search algorithm works in a similar way, except that it has some estimate (called a heuristic) of how far from the goal any vertex is. Instead of selecting the vertex closest to the starting point, it selects the vertex closest to the goal.
Greedy Best-First-Search is not guaranteed to find a shortest path. However, it runs much quicker than Dijkstra’s Algorithm because it uses the heuristic function to guide its way towards the goal very quickly.

The trouble is that Greedy Best-First-Search is “greedy” and tries to move towards the goal even if it’s not the right path. Since it only considers the cost to get to the goal and ignores the cost of the path so far, it keeps going even if the path it’s on has become really long.

A* was developed in 1968 to combine heuristic approaches like Greedy Best-First-Search and formal approaches like Dijsktra’s Algorithm.

links :
https://www.redblobgames.com/pathfinding/a-star/implementation.html
https://www.redblobgames.com/pathfinding/grids/algorithms.html
https://www.redblobgames.com/pathfinding/tower-defense/
https://www.redblobgames.com/pathfinding/a-star/introduction.html
http://theory.stanford.edu/~amitp/GameProgramming/AStarComparison.html
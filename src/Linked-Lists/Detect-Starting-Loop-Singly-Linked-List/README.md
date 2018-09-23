#Using Floyd’s loop detection Algorithm

This is basically the Floyd's loop detection algorithm.

1. Initialize two references: a slow reference 'S' and a fast reference 'F' to the start of the list
2. Move 'S' forward one node at a time and move 'F' forward two nodes at a time.
3. If at some point of time, reference 'S' and reference 'F' point to the same node of the list then we know that there is a loop in the list otherwise we return null saying there is no loop.
4. After the loop is detected in step #3, we move back reference 'S' to the start of the list again and keep 'F' at same meeting point.
5. Now this time around, we move both 'S' and 'F' forward one node at a time until they meet.
6. The node where they meet is start of the loop.


https://www.ideserve.co.in/learn/detect-a-loop-in-a-linked-list
// Maze Runner (6kyu)
// https://www.codewars.com/kata/58663693b359c4a6560001d6/train/javascript
function mazeRunner(maze, directions) {
  const startPos = findStart(maze);
  let currentPos = startPos;
  while (directions.length > 0) {
    const nextMove = directions.shift();
    if (nextMove === "N") currentPos[0] -= 1;
    if (nextMove === "S") currentPos[0] += 1;
    if (nextMove === "W") currentPos[1] -= 1;
    if (nextMove === "E") currentPos[1] += 1;
    if (!maze[currentPos[0]] === undefined) {
      return "Dead";
    } else {
      const key = maze[currentPos[0]][currentPos[1]];
      if (key === 1 || key === undefined) {
        return "Dead";
      }
      if (key === 3) {
        return "Finish";
      }
    }
  }
  return "Lost";
}
function findStart(maze) {
  for (let i = 0; i < maze.length; i++) {
    for (let j = 0; j < maze[i].length; j++) {
      if (maze[i][j] === 2) return [i, j];
    }
  }
}

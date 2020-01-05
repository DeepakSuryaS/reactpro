const CANVAS_SIZE = [800, 800];
const SNAKE_START = [
  [8, 7],
  [8, 8]
];
const APPLE_START = [8, 3];
const SCALE = 40;
const SPEED = 100;
const DIRECTIONS = {
  37: [-1, 0], // left
  38: [0, -1], // up
  39: [1, 0], // right
  40: [0, 1] // down
};

export {
  CANVAS_SIZE,
  SNAKE_START,
  APPLE_START,
  SCALE,
  SPEED,
  DIRECTIONS
};

var cube, square;

square = function(x) {
  return x * x;
};

cube = function(x) {
  return square(x) * x;
};

console.log("Hello World from CoffeeScript!");

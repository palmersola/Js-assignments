recursion = (x, y) => (y === 0 ? 1 : x * recursion(x, y - 1));
console.log(recursion(72, 4));

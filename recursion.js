function recursion(x, y) {
  if (y === 0) return 1;
  else return x * recursion(x, y - 1);
}

console.log(recursion(9, 4));

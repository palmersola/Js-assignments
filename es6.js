const numbers1 = [1, 2, 3, 4, 5, 6];
const numbers2 = [7, 8, 9, 10, 11, 12];

let numbers = [...numbers1, ...numbers2];
const square = num => num * num;
let squares = numbers.map(num => square(num));

const isEven = num => (num % 2 ? false : true);
let evenSquares = squares.filter(num => isEven(num));
let [firstEvenSquare, secondEvenSquare] = evenSquares;

console.log(
  `--Numbers: ${numbers}--   --Squares: ${squares}--    --Even Square: ${evenSquares}--   -- 1st Even Square: ${firstEvenSquare}--   --2nd Even Square: ${secondEvenSquare}--`
);

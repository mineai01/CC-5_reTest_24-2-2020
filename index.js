let num1 = +prompt("num1", 8);
let num2 = +prompt("num1", 12);
let i;

if (num1 % 2 == 0 && num2 % 2 == 0) {

  for (i = 1; num1%2 == 0 || num2%2 == 0; ++i) {

    num1 = num1 / 2;
    num2 = num2 / 2;
    
    console.log(num1, num2, i);

    
  }
  // console.log(num1%2, num2%2);
  let sum1 = (num1)*(i);
  let sum2 = (num2)*(i);

  console.log(sum1, sum2);


  // console.log(`%2 ${num1},${num2}`);
}
// } else if (a % 3 == 0 && b % 3 == 0) {
//   let num1 = a / 3;
//   let num2 = b / 3;
//   console.log(`%3 ${num1},${num2}`);

// } else if (a % 5 == 0 && b % 5 == 0) {
//   let num1 = a / 5;
//   let num2 = b / 5;
//   console.log(`%5 ${num1},${num2}`);

// } else if (a % 7 == 0 && b % 7 == 0) {
//   let num1 = a / 7;
//   let num2 = b / 7;
//   console.log(`%7 ${num1},${num2}`);

// } else {
//   console.log(`is to lowest ${a},${b}`);
// }

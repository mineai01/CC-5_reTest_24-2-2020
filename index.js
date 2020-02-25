let a = +prompt("num1", 5);
let b = +prompt("num1", 7);

while (true) {
  let minA = a / 2;
  let minB = b / 2;
  let sum = minA/minB;


  if (sum >= 0) {
    console.log(a, b);
  } else {
    console.log("no");
  }
  return console.log(minA, minB);
}

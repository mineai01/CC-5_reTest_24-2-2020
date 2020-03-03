//1
// let n1, n2;
// let num1 = +prompt("num1", 10);
// let num2 = +prompt("num2", 5);

// let i;

// for (i = 1; i < num1 && i < num2; i++) {
//   if (num1 % 2 == 0 && num2 % 2 == 0) {
//     n1 = num1;
//     n2 = num2;
//     for (i = 0; n1 % 2 == 0 && n2 % 2 == 0; i++) {
//       n1 = n1 / 2;
//       n2 = n2 / 2;
//     }
//     console.log(n1, n2);
//     // (n1 = n1 * i), (n2 = n2 * i);

//     console.log(`mod2 ${n1},${n2}`);
//   } else if (num1 % 3 == 0 && num2 % 3 == 0) {
//     n1 = num1;
//     n2 = num2;
//     for (i = 0; n1 % 3 == 0 && n2 % 3 == 0; i++) {
//       n1 = n1 / 3;
//       n2 = n2 / 3;
//     }
//     console.log(n1, n2);
//     // (n1 = n1 * i), (n2 = n2 * i);
//     console.log(`mod3 ${n1},${n2}`);
//   } else if (num1 % 5 == 0 && num2 % 5 == 0) {
//     n1 = num1;
//     n2 = num2;
//     for (i = 0; n1 % 5 == 0 && n2 % 5 == 0; i++) {
//       n1 = n1 / 5;
//       n2 = n2 / 5;
//     }
//     console.log(n1, n2);
//     // (n1 = n1 * i), (n2 = n2 * i);
//     console.log(`mod5 ${n1},${n2}`);
//   } else if (num1 % 7 == 0 && num2 % 7 == 0) {
//     n1 = num1;
//     n2 = num2;
//     for (i = 0; n1 % 7 == 0 && n2 % 7 == 0; i++) {
//       n1 = n1 / 7;
//       n2 = n2 / 7;
//     }
//     console.log(n1, n2);

//     // (n1 = n1 * i), (n2 = n2 * i);
//     console.log(`mod7 ${n1},${n2}`);
//   } else {
//     console.log(`noMod ${num1},${num2}`);
//   }
// }
//////////////////////////////////////
// let n1 = 0;
// let n2 = 0;
// let max = 0;
// let min = 0;
// let i =1;

// let num1 = +prompt("num1", 10);
// let num2 = +prompt("num2", 5);
// console.log(num1);
// console.log(num2);

// if(num1 < num2){
//   min = num1;
//   max = num2;
// }else{
//   min = num2;
//   max = num1;
// }
// console.log(min , max);

// while( i <= min ){
//   if(num1 % i == 0 && num2 % i == 0){
//     n1 = num1/i;
//     n2 = num2/i;
//     i++;
//     console.log(`n1 = ${n1}, n2 = ${n2}`);
//   } else{ i++; }
// }

// console.log(`n1 = ${n1}, n2 = ${n2}`);

//-----------------------------------------------
//2
// let un = 2048;
// let total = 0;

// for( let i = 160; i <= un ; i = i + 2){
//   total = i + total ;

// console.log(i);
// }
// console.log(total);

//------------------------------------------------
// 3

// let un = 815;
// let total = 0;

// for( let i = 160; i <= un ; i = i + 4){
//   total = i + total ;

//   console.log(i);
// }
// console.log(total);
//-----------------------------------------------
//4

// let n = Number(prompt("insert position of fibonacci"));

// if( n === 1 ){
//   console.log(sum = 0);

// }
// else if( n === 2){
//   console.log(sum = 1);
// }else if(n > 0){
//   let n3 = 0;
//   let n1 = 0;
//   let n2 = 1;

//   for(let i = 2 ; n > i ; i++){
//     n3 = (n1) + (n2) ;
//     console.log(`i${i}`);
//     console.log( `n1 = ${n1}, n2 = ${n2}, n3 = ${n3}`);

//     if(i !== n){
//       n1 = n2;
//       n2 = n3;
//       console.log( `R2 n1 = ${n1}, n2 = ${n2}, n3 = ${n3}`);
//     }

//     console.log(n3) ;
//   }
// }else{
//   console.log("Not a fibonacci");
// }

//----------------------------------
//5

// let num = 18954;
// let sum = 0;
// num = num-1;
// let i ;
// for(i = 0; num >= i ; i++){
//   console.log(`R${i}`)
//   // console.log(`num ${num} sum ${sum}`)
//   if(i%2 == 1){

//     sum -= i+1;

//     console.log(`+ ${i} sum = ${sum} `)
//   }else if(i%2 == 0){

//     sum += i+1;

//     console.log(`-${i} sum = ${sum}`)

//   }

// }

// alert(`R${i} ,sum${sum}`);
//-----------------------------------------------
// 6

// let num = 88;
// let sum = 0;

// let i;
// let mul = 0;

// for (i = 1; num - 1 >= i; i++) {
//   console.log(`i = ${i}`)
//   mul = i * (i + 1);
//   console.log(`mul ${mul} = ${i}*${i}+1`);

//   sum = mul + sum;
//   console.log(`sum ${sum} = mul${mul}+sum${sum}`);
// }

// alert(`R${i} ,sum${sum}`);

//------------------------------------------------
// 7

// let num = 89;
// let sum = 0;

// let i;
// let mul = 0;

// for (i = 1; num - 2 >= i; i++) {
//   console.log(`i = ${i}`)
//   mul = i * (i + 1)*(i + 2);
//   console.log(`mul ${mul} = ${i}*${i}+1*${i}+2`);

//   sum = mul + sum;
//   console.log(`sum ${sum} = mul${mul}+sum${sum}`);
// }

// alert(`R${i} ,sum${sum}`);

//-------------------------------------------------
//8

// let num = 159;
// let sum = 0;

// let i;
// let mul = 0;

// for (i = 1; num - 4 >= i; i+=2) {
//   console.log(`i = ${i}`)
//   mul = i * (i + 2)*(i + 4);
//   console.log(`mul ${mul} = ${i}*${i}+2*${i}+4`);

//   sum = mul + sum;
//   console.log(`sum ${sum} = mul${mul}+sum${sum}`);
// }

// alert(`R${i} ,sum${sum}`);

//----------------------------------------------
// 10
// let min = null;

// while (true) {
//   let num = prompt("insert num");
//   console.log(`insert ${num}`);

//   if(min === null){
//     min = num;
//     console.log(min);
//   }
//   else if (Number(num) < min) {
//     min = num;
//     console.log(min);
//   }else if(Number(num) > min){
//     min = min;
//     console.log(min);
//   }
//   else if( num === "stop" || num === null){
//     break;
//   }
// }

// console.log(min);

//--------------------------------------------
// 11 not

// let min1 = Infinity;
// let min2 = Infinity;
// let min3 = Infinity;

// while (true) {
//   let num = prompt("insert num");
//   console.log(`insert ${num}`);

//   if (num === "stop" || num === null) {
//     break;
//   } else {
//     num = Number(num);

//       if (num <= min1) {
//         min3 = min2;
//         min2 = min1;
//         min1 = num;
//       console.log(`num < min1 ; min1 = ${min1} min2 = ${min2} min3 = ${min3}`);

//       } else if (num > min1 && num <= min2) {
//         min3 = min2;
//         min2 = num;
      
//       console.log(`num < min2 ; min1 = ${min1} min2 = ${min2} min3 = ${min3}`);

//       } else if (num > min1 && num > min2 && num <= min3) {
//         min3 = num;
      
//       console.log(`num < min3 ; min1 = ${min1} min2 = ${min2} min3 = ${min3}`);

//       }
//     // }
//   }
// }

// console.log(`min1 = ${min1}, min2 = ${min2}, min3 = ${min3}`);

//---------------------------------------------
//12

// let min = Infinity;
// let max = -Infinity;

// while (true) {
//   let num = prompt("insert num");
//   console.log(`insert ${num}`);

//   if (num === "stop" || num === null) {
//     break;

//   }else {
//     num = Number(num);

//     if (num <= min) {
//       min = num;
//       console.log(min);
//     } else if (num >= max) {
//       max = num;
//       console.log(max);
//     }

//   }
// }

// console.log(min , max);
//-----------------------------------------
//13

// let min = Infinity;
// let max = -Infinity;

// while (true) {
//   let num = prompt("insert num");
//   console.log(`insert ${num}`);

//   if (num === "stop" || num === null) {
//     break;

//   }else {
//     num = Number(num);

//     if (num <= min) {
//       min = num;
//       console.log(min);
//     } else if (num >= max) {
//       max = num;
//       console.log(max);
//     }

//   }
// }

// console.log(max - min);

//-------------------------------------------------
//14

// let num = 0;
// let sum = 0;
// let i = 0;

// while (true) {
//   let num = prompt("insert num");
//   console.log(`insert ${num}`);

//   if (num === "stop" || num === null) {
//     break;

//   }else {
//     num = Number(num);

//     sum = num + sum;
//     i++;

//   }
// }

// console.log(i);
// console.log((sum)/i);

//---------------------------------------------------------
// 15

// let num = prompt("insert");

// if (Number(num) > 0) {
//   let arr = [num];
//   for (let num of arr) {
//     arr = num.split("");
//     arr.reverse();

//     console.log(arr);
//   }
//   let b = arr.join('');

//   console.log(b);

// } else if( Number(num) < 0 ) {
//   let arr = [num];
//   for (let num of arr) {
//     arr = num.split("");
//     arr.reverse();

//     console.log(arr);
//   }
//   arr.pop();
//   let b = arr.join('');

//   console.log(`-${b}`);
// }

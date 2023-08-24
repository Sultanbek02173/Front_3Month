// A---------------------------------------------------------------------
// let str = "";

// const natural = (num1, num2 = 1) => {

//     if (num2 === num1){
//         str += num2 + ''; 
//         return str;
//     }

//     str += num2 + ' ';
//     result = natural(num1, num2 + 1);
//     return result;  
// }

// console.log(natural(5));

// B---------------------------------------------------------------------

// let str = "";

// const natural = (num1, num2 = 1) => {

//     if (num2 === num1){
//         str += num1 + ''; 
//         return str;
//     }

//     str += num1 + ' ';
//     result = natural(num1 - 1, num2);
//     return result;  
// }

// console.log(natural(5, 1));

// C---------------------------------------------------------------------

// const Akerman = (m, n) => {
//     if (m === 0){
//         return n + 1;
//     }
//     else{
//         if ((m > 0 && n === 0)){
//             return Akerman(m - 1, 1);
//         }
//         else{
//             return Akerman(m - 1, Akerman(m, n - 1));
//         }
//     }
// }

// console.log(Akerman(2, 2));

// D---------------------------------------------------------------------

// let flag = false;

// const Stepen = (num) => {
//     if (num === 0){
//         flag = true; 
//         return flag;
//     }else if(num < 0){
//         return flag
//     }

//     num = Stepen(num - 2)

//     return num
// }

// console.log(Stepen(3));

// E---------------------------------------------------------------------

// let count = 0;    

// const sumNum = (num) => {    
//     if (num < 10){
//         return count += num;
//     }

//     count += num % 10;
//     return sumNum(~~(num / 10))
// }

// console.log(sumNum(232));

// F---------------------------------------------------------------------

// const numsStr = (num) => {

//     if (num < 10) {
//         return num;
//     }

//     console.log(num % 10);

//     return numsStr(~~(num / 10));
// }

// console.log(numsStr(179));

// G---------------------------------------------------------------------

// const numsStr = (num) => {

//     if (num < 10) {
//         console.log(num);
//     } else {
//         numsStr(~~(num / 10));

//         console.log(num % 10);
//     }
// }

// numsStr(179);

// function declaration
function add(a,b){
  const result = a + b ; 
  return result; 

}

function add(a,b){
  return a + b ;
}
// function expression
// nam nai take anonoymous function bole 
const add2 = function(a, b){
  return a + b ;
}


const sum2 = add(5,7);
// console.log(sum2);

//arrow function

const add3 = (a,b) =>   a+b;
// const sum = add3(5, 93);
const add4 = (num1,num2,num3,num4) => num1 + num2 + num3 +num4 ; 

const multiply = ( num1, num2) => num1 * num2 ; 
const  mult = multiply(4,5);
console.log(mult)
const sum = add4(4,5,6,7)
console.log(sum)
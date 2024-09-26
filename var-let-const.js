// var : no reason to use 
//let : allow to it reassign 
//const: donot it to reassign

const money = 30 ; 
const rich = money + 25 ; 
console.log(rich);

let count = 10 ; 
count = count + 20 ; 
console.log(count)

const number = [24, 2, 23, 42, 56];
// number = [4, 5,7]
number[1] = 55
number.push(8,9,65)
console.log(number)

//Object

let student ={
  name: 'moyna', 
  class: 12
}
student.name = 'mu complete'
// student = {name: 'hal ja '}
console.log(student)

//loop
let sum = 0
for(let i=0; i< 10;i++){
   const num = i
    sum = sum + i ; 
    
  }
  console.log(sum)
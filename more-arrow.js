const difference = (x,y) => x - y ; 
const multiply = (first,second,third) => first * second * third; 


//single parameter : 
const getAge = (person) => person.age ; 
const student = { name: 'ananta', age: 45}; 
const age = getAge(student) ; 
console.log(age);


const  getThird = numbers => numbers[2];
const third = getThird([5,9,8,22,23]);
console.log(third);

const doubleIt = num => num * 2 ; 

//no Parameter 
const getPi = () => Math.PI; 
console.log(getPi())

//large Arrow Functions . if you want to get anythging returned from this function then you have to use this return keyword!

const doMath = (x, y, z) => {
  const sum = x + y +z ; 
  const mul = x * y * z ; 
  const result = sum + mul ; 
  return result ; 

}
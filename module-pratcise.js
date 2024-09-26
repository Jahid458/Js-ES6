// 1 multiply using arrow fnction
const multiply = (num1, num2, num3) =>  num1 * num2 * num3
// console.log(multiply(3,4,6))

//2. write a arrow function it will take a array where the array element will be name of your freinds check if the length the each element is even , ush elements with even length to new array and return thr result 

 const getFreinds = (freinds) =>{

   const evenNewName = [];
   freinds.filter(freind => {
    console.log(freind)
      if(freind.length % 2 === 0){
        evenNewName.push(freind);
      }
   });
   return evenNewName
}

const friendsArray = ['Harissh', 'Alam', 'chakti', 'Danila','bob','mama'];
const res = getFreinds(friendsArray);
// console.log(res)

//=========== 3. Array squre, sum ,average =================
const squreArray = (arr) => {
  const squre = arr.map(num => num * num);
  let sum = 0;
  for(const x of squre){
    sum += x;

  }
  return sum/arr.length;

}

const numbers = [2,3,5]
const results = squreArray(numbers);
// console.log(results)

// 4 two array input write a max number
const number1 = [4,5,9];
const number2 = [55,44,78];

const maxNumbers = (a, b) =>{
  const MaximumArray = [];
  const newMax = [...a,...b];
   MaximumArray.push(...newMax)
   return Math.max(...MaximumArray)


}
const result = maxNumbers(number1,number2);
// console.log(result)
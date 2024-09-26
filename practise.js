

// const str=`I am web developer
// I love to code 
// i love to eat biriyani`;
// console.log(str)

// const add3 = (a,b) =>   a+b;

// const sum = (num1,num2 = 7) => num1 + num2 ; 
// console.log(sum(15))

// const mobile = {
//   brand: 'Samsung',
//   model:'S4'
//  };
//  delete mobile.model
// // console.log(mobile)
// const myFunc = () => console.log('Nayok!');
// const nayikas=['mousumi' , 'popy' ,'shabnur', 'purnima' ]
// const arr2 = [...nayikas]
// console.log(arr2)

// const numbers = [45, 12, 36, 84];
// numbers.push(25)
// const obj = { foo: 1 };
// obj.bar = 2;
// console.log(obj)

const freinds = () => {
   console.log([jahid, karim])
}

//2. write a arrow function it will take a array where the array element will be name of your freinds check if the length the each element is even , ush elements with even length to new array and return thr result 

//  const getFreinds = (freinds) =>{

//    const evenNewName = [];
//    freinds.filter(freind => {
//     console.log(freind)
//       if(freind.length % 2 === 0){
//         evenNewName.push(freind);
//       }
//    });
//    return evenNewName
// }

// const friendsArray = ['Harissh', 'Alam', 'chakti', 'Danila','bob','mama'];
// const res = getFreinds(friendsArray);
// console.log(res)
//=========== 3. Array squre, sum ,average =================
// const squreArray = (arr) => {
//   const squre = arr.map(num => num * num);
//   let sum = 0;
//   for(const x of squre){
//     sum += x;

//   }
//   return sum/arr.length;

// }

// const numbers = [2,3,5]
// const results = squreArray(numbers);
// console.log(results)



// const newArray = [...number1, ...number2]
// const maxNumber = Math.max(...newArray)
// console.log(newArray)
// console.log(maxNumber)

// 4 two array input write a max number
const number1 = [4,5,9];
const number2 = [55,44,78];

const maxNumbers = (a, b) =>{
  const MaximumArray = [];
  const newMax = [...a,...b];
   MaximumArray.push(...newMax)
   return Math.max(...MaximumArray)


}
const results = maxNumbers(number1,number2);
console.log(results)

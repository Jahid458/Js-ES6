const max = Math.max(6,23,45,1,89,23); 
const numbers = [3, 5, 2, 45, 5, 43, 90, 32, 15];
const arrayMax = Math.max(...numbers)
console.log(...numbers)
console.log(arrayMax)

// use spread operator to copy
const freinds = [4,5,87,9];
const bhondhu = freinds ; 
const dosto = [...freinds] ; 
console.log(dosto)

freinds.push(100)
console.log(dosto)
console.log(freinds)

//advanced
const sonkha  = [...freinds, 999]; 
console.log(sonkha); 

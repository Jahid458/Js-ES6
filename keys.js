const glass = {
  name: 'glass', 
  color: 'golden',
   price:12,
   isCleaned:true
  }
//  console.log(glass)
const key = Object.keys(glass)
const values = Object.values(glass)
//  console.log(key);
//  console.log(values);
//array two dimentional way
 const pairs = Object.entries(glass);
//  console.log(pairs)

//  delete glass.isCleaned
  console.log(glass)


const {isCleaned, ...rest} = glass;
console.log(rest)

//freeze

// Object.freeze(glass);
glass.source = 'bangladesh';
console.log(glass)

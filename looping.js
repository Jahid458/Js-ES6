const numbers = [1, 6, 8, 4];
// for(let i = 0; i < numbers.length ; i++ ){}
// while 

for(const num of numbers){
  // console.log(num);
}


const nobab = 'Siraj ud Dola';
for(const char of nobab){
  // console.log(char)
}


const glass = {
  name: 'glass', 
  color: 'golden',
   price:12,
   isCleaned:true
  }
  // for(const key of glass){
  //   console.log(key)
  // }

  for(const key in  glass){
     const value = glass[key]
       console.log(key, value)
    }

const key = Object.keys(glass);
console.log(key)

// for of use on array or string not in object
// for in use an object


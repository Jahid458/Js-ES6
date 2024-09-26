





const actor ={
   name: 'Ananata',
   age:30,
   phone : '01521223296', 
   money: 452464558
}

const phones = actor.phone
const name = actor.name; 
const age = actor.age;
// if right side is an object left siide of destrucing will be an object as
// use property name as a variable that contains the property value 

//destructor actor  upadan gulo copy kore jai 
const {phone, age: boyos}  = actor
// console.log(phone)
// console.log(phone)
// console.log(phone)
// console.log(phone)
// console.log(boyos)
// console.log(boyos)
// console.log(boyos)


const numbers = [45, 99];
const [first, second] = numbers; 
const [x, y] = [35 , 38]; 


//
function doubleTheme(a,b){
   return [a*2, b*2];

}

const [prothom, detio] = doubleTheme(12,9)
console.log(prothom, detio)


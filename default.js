//default --> value its not provided, take this is default.

function add(num1 = 88, num2 = 25, num3){
    const result = num1 + num2 + num3; 
    console.log(num1, num2, result);
    return result;

}

const sum = add(5,7)

// const sum = add(5)
const sum2 = add()

function fullname(first, last =''){ //emphty string
  const full = first + ' ' + last 

  return full; 

}

function freinds(numbs=[]){

}

function person(human = {}){

} 
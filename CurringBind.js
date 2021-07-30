let multiply = function (x,y){
    return x*y
}

//Bind method will make a copy of multiply method with its own arguments
let multiplyByTwo = multiply.bind(this,2)
console.log(multiplyByTwo(6));
console.log(multiplyByTwo(5));

let multiplyByTen = multiply.bind(this,10)
console.log(multiplyByTen(8));

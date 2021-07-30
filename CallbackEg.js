let x = function (){
    console.log("Inside callback function")
}

let y = function(callback){
    console.log("Inside function Y")
    callback()
}

y(x)

//Example
//If we didnt use callback function we have to use else if
//Callback makes functions as abstract as possible
let add = function (a,b){
    return a+b
}

let multiply = function (a,b){
    return a*b
}

let devide = function (a,b){
    return a/b
}

let mod = function (a,b){
    return a%b
}

let calculate = function (num1,num2,callback){
    //Callback shoule always be a function
    if(typeof callback === 'function'){
        return callback(num1,num2)
    }
    else{
        console.error('Callback is not a function')
    }
    
}

console.log(calculate(20,5,multiply))

//Can also use arrow function as callback
console.log(calculate(20,5,(a,b)=>{return a+b+2}))

//Should print error
console.log(calculate(20,5,8888))

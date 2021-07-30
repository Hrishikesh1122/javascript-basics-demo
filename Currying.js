/*
Currying takes a function that recieves more than one parameter
and breaks it into a series of unary (one parameter ) function
Therefore , a curried function takes only one parameter at a time
*/

//Example one 
//Returns the tempelete literal
let createSandwich = (ingredient1) => {
    return (ingredient2) => {
        return (ingredient3) => {
            return `${ingredient1},${ingredient2},${ingredient3}`
        }
    }
}

let sandwich = createSandwich("Tomato")("Lattuce")("Cheese")
console.log(sandwich)

//Example one refactored
let createSandwichCurried = ingrd1 => ingrd2 => ingred3 => {
    `${ingrd1},${ingrd2},${ingred3}`}
let curriedSandwich = createSandwich("Bread")("Cheese")("Bread")
console.log(curriedSandwich)

//Example 2 multiply
let multiply = x=> y=> x*y
console.log(multiply(2)(4)) //Prints 8 
console.log(multiply(4)) //Will just print the function // This tells anathor parameter is required

//Partially applied functions
//Partially applied functions are common use of currying

let multiplyByTen = multiply(10) //This function send in 1st argument ie 10
let numberTimesTen = multiplyByTen(9) //Ths function will send 2nd arument ie number to be multiplied by 10
console.log(numberTimesTen) // Prints 90


//Example 3 
//Anathor common use of currying is function composition
//Allows calling functions in  a specific order
let addCustomer = fn => (...args) => {
    console.log('Saving customer info ...')
    return fn(...args)
} 

let processOrder = fn => (...args) => {
    console.log(`Processing order #${args[0]}`)
    return fn(...args)
}

let completeOrder = (...args) => {
    console.log(`Order #${[...args].toString()} completed`)
}

completeOrder = processOrder(completeOrder)
completeOrder = addCustomer(completeOrder)
completeOrder('7777',"Hrishikesh's order")


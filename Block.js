//Block is used to combine multiple js statements in one group
//This group of multiple statements can be used in a place where js expects
//single statement

{
    //This is a Block
    //It is also known as compound statement
    //{} is a valid js code 
}

{
    let a=10;
    console.log(a)
}

if(true){
    //This is a block
    //js expects a single statement after if
    let b=200;
    console.log(b)
}

//Block scope

{
    var x=10;
    let y=20;
    const z=30;

    //Thsese will run normally
    console.log(x)
    console.log(y)
    console.log(z)
}

//Var is hoisted in globar scope
//let and const are hoisted in block scope
//Therefore let and var are block scoped i.e we cannot let and const variables outside block

console.log(x) //This will run normally as var is global scope

//Thsese will give uncaught refrence error as y and z are not accessible outside block
console.log(y)
console.log(z)
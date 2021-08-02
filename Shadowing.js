var a=100
let b=200
const c=300
{
    var a=10;
    let b= 20;
    const c= 30;

    console.log(a) //This will print 10 i.e it shadows the value 100
    console.log(b)
    console.log(c)
}

console.log(a) //This will print 10 !!!
//This happens because both the a's point to the same memory location
//i.e the global scope

//But its not the case with let vatiables
//this is because the b outside the block are pointing to different location
console.log(b) //This will print 200

//similar with const variable
console.log(c) //This will print 300
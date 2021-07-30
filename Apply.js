let employee1 = {
    firstName : "Steve",
    lastName : "Smith"
}
let employee2 = {
    firstName : "Joe",
    lastName : "Root"
}

let printPayroll = function(country,city,salary){
    console.log(this.firstName+" "+this.lastName+ ","+" Country: "+country+" ,city: "+city+", Salary: "+salary)
}

printPayroll.apply(employee1,["Australia","Perth","500000"])
printPayroll.apply(employee2,["England","Loverpool","100"])

//Bind function
let myBindFunction = printPayroll.bind(employee2,["England","Loverpool","100"])
//This console log will give the bind function
console.log(myBindFunction)
//Have to invoke bind function
myBindFunction()
let name1 = {
    firstName : "Hrishikesh",
    lastName : "Ugavekar",
    // printfullName : function (){
    //     console.log(this.firstName+" "+this.lastName)
    // }
}

let printfullName = function (country,state){
    console.log(this.firstName+" "+this.lastName+" Country : "+country+" State: "+state)
}

let name2 = {
    firstName : "Rohan",
    lastName : "Sharma"
}

// name1.printfullName()
// name1.printfullName.call(name2)
// printfullName.call(name1)
// printfullName.call(name2)
printfullName.call(name1,"India","Goa")
printfullName.call(name2,"India","Maharashtra")
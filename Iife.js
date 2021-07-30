//Immediately invoked Function Expression (IIFE)
//Runs as soon as it is defined 
//The function has no name and is not stored in a variable

(function(){
    console.log('Addition of two numbers')
})();

//Named IIFE with arguments
//num1 and num2 are default arguments 
//They are used if no argument is passed
(addition = function(num1=1,num2=2){
    console.log(num1+num2)
})()

//Passing arguments to IIFE
addition(7) //Prints 9 i.e 7+2
addition(7,7) //Prints 14
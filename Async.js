//Async returns a promise
console.log('Async/Await demo')
async function getData(){
    console.log('Inside getData')
    const response = await fetch('https://api.github.com/users')
    console.log('Before response')
    const users = await response.json()
    console.log('After json response')
    return users
}

console.log('Before getData')
let data = getData()
console.log('After getData')
console.log(data)
data.then(users => console.log(users))
console.log('OVER')
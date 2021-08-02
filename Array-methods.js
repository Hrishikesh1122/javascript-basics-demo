const items = [
    {name : 'Bike' , price :'100'},
    {name : 'TV' , price :'200'},
    {name : 'Album' , price :'10'},
    {name : 'Book' , price :'5'},
    {name : 'Phone' , price :'500'},
    {name : 'Computer' , price :'1000'},
    {name : 'Keyboard' , price :'25'},
]

//Filter mathod
//Filter items that are less than or equal to 100 in price
const filteredItems = items.filter((item)=>{
    return item.price <= 100
})
console.log(filteredItems)

//Map
//Used to take elemts of object and put it in other array
//Eg make a differt array of names from item

const mappedArray = items.map((item)=>{
    return item.name
})
console.log(mappedArray)

//Find method
//Find and item in an array
//Returns the first item it finds

//Eg find item with name phone

const foundItem = items.find((item)=>{
    return item.name == 'Phone'
})

console.log(foundItem)

//For each
//Eg print al names of items
items.forEach((item)=>{
    console.log(item.name)
})

//Some method
//Returns true or false
//Eg check if any item has price less than 100
const hasInexpensiveItems = items.some((item)=>{
    return item.price < 100
})

console.log(hasInexpensiveItems)

//Every 
//Returns true or false
//Checks if evry item fits some condition
//Eg check if price of every item is less than 1000
const isEveryItem = items.every((item)=>{
    return item.price <=1000
})
console.log(isEveryItem)


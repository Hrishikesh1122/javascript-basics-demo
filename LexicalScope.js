const a=10
{
    const a=100
    {
        const a=1000
        console.log(a) //Will print 1000
    }
    console.log(a) //will print 100
}
console.log(a) //will print 10
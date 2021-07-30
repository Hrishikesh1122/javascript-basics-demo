let p = new Promise((resolve,reject)=>{
    let a=1+4
    if (a==2){
        resolve('Success')
    }else {
        reject('Fail')
    }
})

p.then((message)=>{
    console.log(message)
}).catch((message)=>{
    console.log(message)
})
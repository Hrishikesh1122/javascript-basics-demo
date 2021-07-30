//Fatch returns a promise
//Therefore we can do .then() and .catch()
let URL = 'https://reqres.in/api/users'
fetch(URL ,{
    method : 'POST',
    headers : {
        'content-type' : 'application/json'
    },
    body : JSON.stringify({
        name : 'Hrishi'
    })
})
.then(res => {
    if(res.ok){
        console.log('SUCCESS')
        return res.json()
    }else {
        console.log('FAIL')
    }
})
.then(data => console.log(data))

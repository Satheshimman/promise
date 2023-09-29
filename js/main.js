/*

// let c=new Promise((a,b)=>{
  
//    a("success")
// })

// c.then(console.log)
// .catch(console.log)



// promise with function..........................


// function a(){

//     return new Promise((x,y) => {
//         setTimeout(()=>{
//             x("timeout");
//         },5000)
//     })

// }
// a().then(console.log)
// .catch(console.log)



function a(){
    let d= new Promise((u,v)=>{
        setTimeout(()=>{
           u("2") 

        },5000)

    })
    return d
}

function b(){
     let e=new Promise((w,x) => {
        setTimeout(()=>{
            w("3")
        },1000)
     })

     return e
}

function c(){
    let f=new Promise((y,z) => {
       setTimeout(()=>{
           y("4")
       },1000)
    })
    return f
}

a().then((i)=>{
    console.log(i)
    return b().then((j)=>{
        console.log(j)
        return c().then(console.log)
    })
})


.catch(console.log)
    
// promise all...

[a(),b(),c()]

.then(console.log)
.catch(console.log)



// promise chaining...................

a().then (u)=>{
    console.log(u)
    return b(u).then((v)=>{
        console.log(v)
    })
        return c(v).then((w)=>{
            console.log(w)
        })




        
    
}



*/




var a=10

export default a
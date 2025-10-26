// function test1(){
//     setTimeout(()=>{
//         console.log("This is test 1");
//     },2000)
// }

// function test2(){
//     console.log("This is test 2");
// }

type resultType={
    name:string,
    id:number,
    email:string
}

function complexLogic(): Promise<resultType>{
    return new Promise((resolved)=>{
        setTimeout(()=>{
            resolved({
                name:"Nidhi",
                id:123,
                email:"nidhi@email.com"
            });
        },2000)
    })
}

complexLogic().then((data:resultType)=>{
    console.log(data)
})



let userData20:number|string|boolean="Nidhi"

userData20=true

if(typeof userData20=="boolean"){
    console.log("boolean data type")
}else if(typeof userData20=="string"){
    console.log("string data type")
}else{
    console.log("number data type")
}



class Product21{
}
var p1=new Product21()

class Order21{
}
var o1=new Order21()

function checkDetails(data:Product21|Order21){
    if(data instanceof Product21){
        console.log("Product21 class object")
    }else{
        console.log("Order21 class object")
    }
}

checkDetails(o1)


interface userData{
    name:number,
    city:string
}
interface userInfo{
    id:number,
    email:string
}

var userData:userData|userInfo={name:123,city:"Delhi"}

function checkUser(data:userData|userInfo){
    if((data as userData).name!==undefined){
        console.log("userData interface object")
    }else{
        console.log("userInfo interface object")
    }
}
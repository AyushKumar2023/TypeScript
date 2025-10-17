// var userdata:{
//     name:string,
//     age:number,
//     company:string
// }={
//     name:"Ayush",
//     age:20,
//     company:"Microsoft"
// }

var userdata:{
    [key:string]:string | number | undefined
}={
    name:"Ayush",
    age:20,
    company:"Microsoft"
}

userdata.name="Nidhi"
userdata.age=21
// userdata.age="Twenty"  // Error 
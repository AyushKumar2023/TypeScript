type personT={
    name:string,
    age:number,
    isEmployed:boolean
}

let personData:personT={
    name:"Nidhi",
    age:25,
    isEmployed:true
}

type personX=keyof personT

let personDataX:personX

personDataX="name"
personDataX="age"
personDataX="isEmployed"

let userX:keyof typeof personData="name"
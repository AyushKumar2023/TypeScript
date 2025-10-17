type datatype={name:string,email:string}

type a={name:string}
type b={email:string}
type c=a | b

var empdata:datatype={
    name:"nidhi",
    email:"nidhi@gmail.com"
}

var empdata1:c={
    name:"ayush",
    email:"ayush@gmail.com"
}
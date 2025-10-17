type personTA={name:string}
type personTB={age:number}
type personTC=personTA & personTB


var PersondataA:personTA={
    name:"nidhi",
}

var PersondataB:personTB={
    age:25
}

var PersondataC:personTC={
    name:"ayush",
    age:21
}
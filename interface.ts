interface Info{
    name:string,
    age:number,
    college:string
}

interface teacherType extends Info{
    subject:string
}

var studentObj:Info={
    name:"ayush",
    age:21,
    college:"ikgptu"
}

var teacherObj:teacherType={
    name:"nidhi",
    age:25,
    college:"ikgptu",
    subject:"maths"
}
class Auth{
    login(name:string, password:string):string{
        if(name && password){
            return "student logged in"
        }else{
            return "invalid credentials"
        }
        
    }
}

class Student extends Auth{
    

    result(marks:number):string{
        if(marks>=33){
            return "student passed"
        }else{
            return "student failed"
        }
    }
}

var stu=new Student()
console.log(stu.login("ayush","1234"))
console.log(stu.result(45))

class Teacher extends Auth{
    

    subject(subject:string):string{
        return `teacher teaches ${subject}`
    }
}

var teach=new Teacher()
console.log(teach.login("nidhi","1234"))
console.log(teach.subject("maths"))
class Auth {
    login(name, password) {
        if (name && password) {
            return "student logged in";
        }
        else {
            return "invalid credentials";
        }
    }
}
class Student extends Auth {
    result(marks) {
        if (marks >= 33) {
            return "student passed";
        }
        else {
            return "student failed";
        }
    }
}
var stu = new Student();
console.log(stu.login("ayush", "1234"));
console.log(stu.result(45));
class Teacher extends Auth {
    subject(subject) {
        return `teacher teaches ${subject}`;
    }
}
var teach = new Teacher();
console.log(teach.login("nidhi", "1234"));
console.log(teach.subject("maths"));
export {};

class collegeData {
    name;
    constructor(cname) {
        this.name = cname;
    }
    displayTeacherName() {
        console.log("Teacher Name: Nidhi");
    }
    getStudentList() {
        return ["amber", "ayush", "kumar"];
    }
}
var college1 = new collegeData("ABC College");
console.log(college1.name);
college1.displayTeacherName();
console.log(college1.getStudentList());
export {};

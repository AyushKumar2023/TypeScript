interface collegeDataType {
    name: string;

    displayTeacherName():void
    getStudentList():string[]
}

class collegeData implements collegeDataType {
    name: string;

    constructor(cname: string) {
        this.name = cname;
    }

    displayTeacherName(): void {
        console.log("Teacher Name: Nidhi");
    }

    getStudentList(): string[] {
        return ["amber", "ayush", "kumar"];
    }
}

var college1 = new collegeData("ABC College");
console.log(college1.name);
college1.displayTeacherName();
console.log(college1.getStudentList());
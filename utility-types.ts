interface CollegeType{
    name: string;
    locaction: string;
    students: number;
    branches?: number;
}

let collegeDetails: Partial<CollegeType> = {
    name: "ABC College",
    locaction: "New York",
    students: 2000,

}

function getCollegeData(data:Partial<CollegeType>){
    return data;
}

getCollegeData({name: "cyz college"})

function getCollegeData2(data:Required<CollegeType>){
    return data;
}

getCollegeData2({name: "cyz college", locaction: "LA", students: 1500, branches: 10})


var collegeData4:Readonly<CollegeType>={
    name: "XYZ College",
    locaction: "California",
    students: 3000,
    branches: 15
}

var collegeData5:Pick<CollegeType, "name" | "locaction">={
    name: "XYZ College",
    locaction: "California",
}

var collegeData6:Omit<CollegeType, "branches">={
    name: "XYZ College",
    locaction: "California",
    students: 3000,
} 

type APIStatus= "success" | "failure" | "pending"| "error"

var APICall:Exclude<APIStatus, "pending">="success";

var APICall2:Extract<APIStatus, "success" | "failure">="failure";

type RandomType=string | number | boolean | null | undefined;
var randomData:NonNullable<RandomType>= "Hello";

type SiteRole="admin" | "user" | "guest"

var semesterRole:Record<SiteRole, string>={
    admin: "All Access",
    user: "Limited Access",
    guest: "View Only"
}
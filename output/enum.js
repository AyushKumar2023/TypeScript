var whoType;
(function (whoType) {
    whoType["student"] = "student";
    whoType["teacher"] = "teacher";
    whoType["manager"] = "manager";
    whoType["labstaff"] = "labstaff";
})(whoType || (whoType = {}));
var who = whoType.teacher;
export {};

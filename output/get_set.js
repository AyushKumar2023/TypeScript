class EMPinfo {
    _name = "nidhi";
    _email = "nidhi@gmail.com";
    get name() {
        return "Mrs. " + this._name;
    }
    set email(val) {
        this._email = "emp_" + val;
    }
}
var emp1 = new EMPinfo();
console.log(emp1._name);
emp1._email = "nidhi123@gmail.com";
export {};

class EMPinfo{
    _name:string="nidhi"
    _email:string="nidhi@gmail.com"

    get name():string{
        return "Mrs. " + this._name
    }

    set email(val:string){
        this._email="emp_"+val
    }
}

var emp1=new EMPinfo()
console.log(emp1._name)
emp1._email="nidhi123@gmail.com"
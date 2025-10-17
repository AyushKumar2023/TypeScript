function fruits():string{
    return "apple"
}

function simple():boolean{ 
    return true
}

function complex():string|number{
    let data=10
    let name="nidhi"
    let type="age"

    if(type=="age"){
        return data
    }else{
        return name
    }
}
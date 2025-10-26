function classlogger(constructor: Function) {
    console.log(constructor.name);
}

function getKeyDetails(target: any, key: any){
    console.log("Key Details:", key);
} 

@classlogger
class customMaths{

    @getKeyDetails
    value1: number;
    value2: number;

    constructor(x: number, y: number) {
        this.value1 = x;
        this.value2 = y;
    }
}

var cm1=new customMaths(10, 20);
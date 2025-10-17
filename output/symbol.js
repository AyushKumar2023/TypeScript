var sym = Symbol();
var sym2 = Symbol();
const did = Symbol("id");
const obj = {
    [did]: 100,
    name: 'Anil Sindhu'
};
console.log(obj[did]);
export {};

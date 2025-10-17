let userData20 = "Nidhi";
userData20 = true;
if (typeof userData20 == "boolean") {
    console.log("boolean data type");
}
else if (typeof userData20 == "string") {
    console.log("string data type");
}
else {
    console.log("number data type");
}
class Product21 {
}
var p1 = new Product21();
class Order21 {
}
var o1 = new Order21();
function checkDetails(data) {
    if (data instanceof Product21) {
        console.log("Product21 class object");
    }
    else {
        console.log("Order21 class object");
    }
}
checkDetails(o1);
var userData = { name: 123, city: "Delhi" };
function checkUser(data) {
    if (data.name !== undefined) {
        console.log("userData interface object");
    }
    else {
        console.log("userInfo interface object");
    }
}
export {};

// function test1(){
//     setTimeout(()=>{
//         console.log("This is test 1");
//     },2000)
// }
function complexLogic() {
    return new Promise((resolved) => {
        setTimeout(() => {
            resolved({
                name: "Nidhi",
                id: 123,
                email: "nidhi@email.com"
            });
        }, 2000);
    });
}
complexLogic().then((data) => {
    console.log(data);
});
export {};

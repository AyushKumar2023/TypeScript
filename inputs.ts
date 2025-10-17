function getInfo(){
    
    const nameInput=document.getElementById("username") as HTMLInputElement;
    // console.log(nameInput.value);
    const username:string=nameInput.value;
    const emailInput=document.getElementById("email") as HTMLInputElement;
    // console.log(emailInput.value);
    const email:string=emailInput.value;
    const ageInput=document.getElementById("age") as HTMLInputElement;
    // console.log(ageInput.value);
    const age:string=ageInput.value;
}
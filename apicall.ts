type apiType={
    userId:number,
    id:number,
    title:string,
    completed:boolean
}

async function apiCall(): Promise<apiType>{
    const result=await fetch('https://api.example.com/data');
    const data=await result.json();
    console.log(data);
    return data
}

apiCall().then((data:apiType)=>{
    console.log(data);
});
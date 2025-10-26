async function apiCall() {
    const result = await fetch('https://api.example.com/data');
    const data = await result.json();
    console.log(data);
    return data;
}
apiCall().then((data) => {
    console.log(data);
});
export {};

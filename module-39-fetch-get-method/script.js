async function getData(){
    try {
        console.log("Fetching data...");
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');

        if (!res.ok){
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data" , error);
    }
}

getData();
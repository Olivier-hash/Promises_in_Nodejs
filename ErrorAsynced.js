// use of Async to fetch users data by APi


async function fetchUSer() {
    try {
        const res = await fetch("https://api.example.com/user");
        const data = await res.json
        console.log(data);
        
    } catch (error) {
        console.error("Failed to fetch users:",error.message);
        
    }
}
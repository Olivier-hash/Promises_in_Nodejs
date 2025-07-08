import('node-fetch');


async function getUSers() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users"); 
        const users = await res.json();
        console.log("Fetched users:");

        // loops
        users.forEach(user => {
            console.log(`${user.id}: ${user.name} ${user.email}`);
            
        });
        
    } catch (error) {
        console.error("Error fetching data", error.message);
        
    }
}

getUSers();
// File handling cas
const fs = require('fs').promises

fs.readFile('sapmple.txt', utf8).then((data) =>{
    console.log("File content:", data);
    
}).catch((err) =>{
    console.log("Error reading file", err);
    
})
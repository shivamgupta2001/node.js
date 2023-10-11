// Please don't change the pre-written code
// Import the necessary modules 
const http=require('http');
const fs=require('fs');

// Write your code here

const server=http.createServer((req,res)=>{
    const data=fs.readFileSync('index.html').toString();
    res.end(data);
})

server.listen(8080,()=>{
    console.log("listen at port 8080");
})

module.exports = server;

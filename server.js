const http = require("http");

 const port = 8081; //local port num

http.createServer((req, res)=>{ //callback function
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h2>Hey server started and you can proceed :-) 123456 </h2>");
    res.end();
})
.listen(port, ()=>{ //callback function
     console.log(`NodeJS Server started running on Port ${port}`);
})

//http://localhost:8081
const http = require("http");

 const port = 8081; //local port num

//  HTTP Methods

/*

>>GET: In order to get data from the server.
>>POST: In order to send/transfer data to the server.
>>DELETE: In order to delete data from the database.
>>PATCH: In order to update certain fields. (Minimal Updates)
>>PUT: In order to update certain fields. (Full Update)

*/

const toDoList = ["learn", "apply things", "succeed"];


http.createServer((req, res)=>{ //callback function
    const {method, url} = req;
    // console.log(method, url);
    if(url === "/todos"){
    if(method === "GET"){
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(toDoList.toString());
    }
    else if(method === "POST"){
        let body = "";
        req.on('error',()=>{
            console.log(err);
        }).on('data',(chunk)=>{
            body +=chunk;
            // console.log(chunk);
        }).on('end', ()=>{
            body = JSON.parse(body);

            let newToDo = toDoList;
            newToDo.push(body.Item)
            console.log(newToDo);
            // console.log("data: ", body);
        })
    }
    else if(method === "DELETE"){
        let body = '';
        req.on('error', (err) => {
            console.log(err);
        }).on("data", (chunk) => {
            body += chunk;
        })
        .on("end", () => {
            body = JSON.parse(body);

            let deleteThisItem = body.Item;
            for(let i = 0; i < toDoList.length; i++){
                if(toDoList[i] === deleteThisItem){
                    toDoList.splice(i,1);
                    break;
                }
                else{
                    console.log("Error : Match not found!");
                    break;
                }
            }

            // toDoList.find((elem, index)=>{
            //     if(elem === deleteThisItem){
            //          toDoList.splice(index,1);
            //     }
            //     else{
            //         console.log("Error : Match not found!");
            //     }
            // });
        });
    }
     }
    else{
        res.writeHead(404);
    }
   
   res.end();
    // res.writeHead(200, { "Content-Type": "text/html" });
    // res.write("<h2>Hey server started and you can proceed :-) 123456 </h2>");
    // res.end();
})
.listen(port, ()=>{ //callback function
     console.log(`NodeJS Server started running on Port ${port}`);
})

//http://localhost:8081 , http://localhost:8081/ (These both are same)
//http://localhost:8081/SignIn
//http://localhost:8081/SignUp
//http://localhost:8081/Home
//http://localhost:8081/ContactUs
//http://localhost:8081/AboutUs

// All these SignIn, SignUp, Home, ContactUs, AboutUs, etc. are "Routes/Routers".
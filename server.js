const express = require("express");

const app = express();
app.use(express.json());

const port = 8081; 

const toDoList = ["learn", "apply things", "succeed"];

// http://localhost:8081/todos

app.get("/todos", (req,res)=>{

    // res.writeHead(200);
    // res.write(toDoList);
    res.status(200).send(toDoList)
});

app.post("/todos", (req,res)=>{

    let newToDoItem = req.body.name;
    toDoList.push(newToDoItem);
    res.status(201).send({message : "Task Added Successfully"})
});

app.delete("/todos", (req,res)=>{

    let deleteThisItem = req.body.name;
    toDoList.find((elem,index)=>{
        if(elem === deleteThisItem){
            toDoList.splice(index, 1);
        }
        res.status(202).send({message : `Deleted Item ${req.body.name}`});
    });
    });

    // Any other route will be handled here
    app.all("*", (req, res) => {
        res.status(501).send();
    });

    app.listen(port, ()=>{
    console.log(`NodeJs server started running on port ${port}`)
});
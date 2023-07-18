const { connection } = require("./database/connection")
const express  = require("express")
const cors = require("cors")

console.log("Hi, Is Running");

//database connection
connection();
const port=3900;
//creating node server
const app =express();

//Cors Configuration with midleware
app.use(cors());

//Converting body to js object auto
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Creating routes

const article_router = require("./routes/article");

app.use("/api",article_router);

app.get("/", (req,res)=>{
    return res.status(200).send("<h1>It's Working</h1>");
})

app.get("/testing", (req,res)=>{
    return res.status(200).send({
        name : "Albert Arias",
        birthdayAge : 1995,
    });
})

//Creating server en listening 
app.listen(port, ()=>{
    console.log(`App Running on port ${port}`)
});
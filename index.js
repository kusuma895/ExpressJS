var express= require("express");
const app=express();
const port=1200;
app.get("/",(req,res)=>{
    res.send("Hello All");
});
app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
});
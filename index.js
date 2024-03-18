const express = require("express");

const app = express()

app.get("/",(req,res)=>{
	console.log(req.headers)	
	res.send("waiting ");
})

app.listen(4000,console.log("port 4000:"))

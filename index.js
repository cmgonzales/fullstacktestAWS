const express = require('express');
const port = process.env.PORT || "5500";
const path = require('path')

const app = express()
//d

app.use(express.static(path.join(__dirname, '/build/test/')));

app.get('/test', (req, res) => {
    let list = ["monkey", "cow", "fufuhead"]
 res.send(list)
})

 app.get('*', (req,res) =>{
	res.sendFile(path.join(__dirname+'/test/build/index.html'));
 });

app.listen(port, () => console.log("listening"));
const express = require('express');
const port = process.env.PORT || "5500";
const path = require('path')

const app = express()
//ds

app.use(express.static(path.join(__dirname, 'test/build')));

app.get('/test', (req, res) => {
    let list = ["monkey", "cow", "fufuhead"]
 res.send(list)
})

 
app.listen(port, () => console.log("listening"));
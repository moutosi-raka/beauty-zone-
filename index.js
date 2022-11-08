const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;



//middle wars
app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{
    res.send('beauty car server is running');
})


app.listen(port, ()=>{
    console.log(`beauty parlous server running on , ${port}`);
})
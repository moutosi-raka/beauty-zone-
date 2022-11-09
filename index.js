const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;



//middle wars
app.use(cors());
app.use(express.json());



console.log(process.env.DB_USER, process.env.DB_PASSWORD);
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.dtu3pyw.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run(){
const  servicesCollection = client.db('beautyParlour').collection('parlourServices');

app.get('/services', async(req, res)=>{
    const query = {};
    const cursor = servicesCollection.find(query).limit(3);
    const services =  await cursor.toArray();
    res.send(services);
})

app.get('/all-services', async(req,res)=>{
    const query = {};
    const cursor = servicesCollection.find(query);
    const services = await cursor.toArray();
    res.send(services);
})

app.get('/service/:id', async(req, res)=>{
    const id = req.params.id;
    const query = {_id: ObjectId(id)};
    const service = await servicesCollection.findOne(query);
    res.send(service);
})

}
run().catch(error => console.log(error));


app.get('/', (req, res)=>{
    res.send('beauty car server is running');
})


app.listen(port, ()=>{
    console.log(`beauty parlous server running on , ${port}`);
})
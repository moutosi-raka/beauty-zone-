const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
var jwt = require('jsonwebtoken');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;



//middle wars
app.use(cors());
app.use(express.json());



console.log(process.env.DB_USER, process.env.DB_PASSWORD);
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.dtu3pyw.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

 function verifyJWt(req, res, next){
    const authHeader =req.headers.authorization;
    if(!authHeader)
    {
      res.status(401).send({message : 'unauthorized access'})
    }
    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, function(err, decoded){
        if(err){
            res.status(401).send({message : 'unauthorized access'})
        }
        req.decoded= decoded;
        next();
    })

}

async function run(){
const  servicesCollection = client.db('beautyParlour').collection('parlourServices');
const reviewsCollection = client.db('beautyParlour').collection('reviews'); 

app.post('/jwt', (req, res)=>{
    const user = req.body;
    console.log("User",user);
    const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1h'})
    res.send({token});
})

app.get('/services', async(req, res)=>{
    const query = {};
    const cursor = servicesCollection.find(query).limit(3).sort({"_id" :-1})
    const services =  await cursor.toArray();
    res.send(services);
})

app.get('/all-services', async(req,res)=>{
    const query = {};
    const cursor = servicesCollection.find(query).sort({"_id" :-1});
    const services = await cursor.toArray();
    res.send(services);
})

app.get('/service/:id', async(req, res)=>{
    const id = req.params.id;
    const query = {_id: ObjectId(id)};
    const service = await servicesCollection.findOne(query);
    res.send(service);
})

app.post('/services', async(req, res)=>{
    const service = req.body;
    const result = await servicesCollection.insertOne(service);
    res.send(result);
 })




// review api
app.post('/reviews', async(req, res)=>{
   const review = req.body;
   const result = await reviewsCollection.insertOne(review);
   res.send(result);
})

app.get('/reviews', verifyJWt, async(req,res)=>{
    if(req.decoded)
    {
        const decoded = req.decoded;
    console.log('inside api',decoded)
    if(decoded.email !==req.query.email){
        res.status(403).send({message : 'unauthorized access'})
    }
    }
    let query = {};
    if(req.query.email){
        query = {
            email: req.query.email
        }
    }
    const cursor = reviewsCollection.find(query).sort({"date" : -1});
    const reviews = await cursor.toArray();
    res.send(reviews); 
})

app.get('/reviews/:serviceId', async(req, res)=>{
    const id = req.params.serviceId;
    const query = {serviceId: id};
    const cursor =  reviewsCollection.find(query);
    const reviews = await cursor.toArray();
    res.send(reviews);
})

app.delete('/reviews/:id', async(req,res)=>{
    const id = req.params.id;
    const query = {_id: ObjectId(id)};
    const result = await reviewsCollection.deleteOne(query);
    res.send(result)
})


}
run().catch(error => console.log(error));


app.get('/', (req, res)=>{
    res.send('beauty car server is running');
})


app.listen(port, ()=>{
    console.log(`beauty parlous server running on , ${port}`);
})
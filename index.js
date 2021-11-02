const { MongoClient } = require('mongodb');
const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;
require('dotenv').config()
const ObjectId = require('mongodb').ObjectId
const app = express()
app.use(cors())
app.use(express.json())

const uri = `mongodb+srv://myFirstMogo:${process.env.DB_PASS}@cluster0.2xl13.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
        await client.connect();
        const database = client.db("TripTravel");
        const travelsCollection = database.collection("orders");
        const myOrderCollection = database.collection('myOrder');
        // post api
        app.post('/addNewPlace', async (req, res) => {
            const place = req.body;
            const result = await travelsCollection.insertOne(place);
            console.log(`A document was inserted with the _id: ${result.insertedId}`);
            res.json(result)
        })
        // get specific api
        app.get('/places/:placeId', async (req, res) => {
            const id = req.params.placeId;
            const query = { _id: ObjectId(id) };
            const place = await travelsCollection.findOne(query)
            res.send(place)
        })
        // // upate api
        // app.put('/places/:placeId', async (req, res) => {
        //     const id = req.params.serviceId;
        //     const updatedService = req.body;
        //     const filter = { _id: ObjectId(id) };
        //     const options = { upsert: true };
        //     const updateDoc = {
        //         $set: {
        //             name: updatedService.name,
        //             price: updatedService.price,
        //             img: updatedService.img,
        //             description: updatedService.description
        //         },
        //     };
        //     const result = await travelsCollection.updateOne(filter, updateDoc, options);
        //     res.json(result)
        // })
        // delete api
        app.delete('/places/:placeceId', async (req, res) => {
            const id = req.params.serviceId;
            const query = { _id: ObjectId(id) }
            const result = await travelsCollection.deleteOne(query);
            res.json(result)
        })
        // Get api
        app.get('/places', async (req, res) => {
            const cursor = travelsCollection.find({})
            const service = await cursor.toArray()
            res.send(service)
        })
    } finally {
        //   await client.close();
    }
}
run().catch(console.dir);
app.get('/', (req, res) => {
    res.send('server hiting')
})
app.listen(port, () => {
    console.log(`listening from http://localhost:${port}`)
})
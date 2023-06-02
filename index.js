const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require('mongodb');

// midleware 
app.use(cors());
app.use(express.json());

// user: e-store
// pass: ozTyXgS5cEyvw2c9


const uri = "mongodb+srv://e-store:ozTyXgS5cEyvw2c9@cluster0.kx7ki8f.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const db = client.db('e-store');
    const collection = db.collection('dataCollections');
    const document = { name: 'John', age: 30 };
    const result = await collection.insertOne(document);
    console.log('Document inserted successfully:', result.insertedId);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);



app.get('/', (req, res) => {
    res.send('This is server of e-store site');
})


app.listen(port, () => {
    console.log('listening on port', port);
});
const express = require("express");

const { MongoClient, ServerApiVersion } = require("mongodb");
const cors = require("cors");
const app = express();
var bodyParser = require("body-parser");
const port = 5000;
require("dotenv").config();
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ga4zxwv.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
});

async function run() {
  try {
    const userCollection = client.db("genius_car").collection("users");
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    app.post("/usersdata", (req, res) => {
      const userName = req.body.name;
      const userEmail = req.body.email;

      const userData = {
        userName,
        userEmail
      };
      const insertData = userCollection.insertOne(userData);
      res.send(insertData);
    });
  } finally {
    // Ensures that the client will close when you finish/error
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const express = require("express");
var jwt = require("jsonwebtoken");

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
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
console.log(uri);
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
    const serviceCollection = client.db("genius_car").collection("services");

    const orderCollection = client.db("genius_car").collection("orders");

    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to conconst firm a successful connection
    app.get("/usersdata", async (req, res) => {
      const query = {};
      const userData = await userCollection.find(query).toArray();
      res.send(userData);
    });
    app.post("/jwt", (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "1hr"
      });
      console.log(token);
      res.send({ token });
    });
    app.get("/services", async (req, res) => {
      const query = {};
      const servicesData = await serviceCollection.find(query).toArray();

      res.send(servicesData);
    });

    app.get("/services/:id", async (req, res) => {
      const specificId = req.params.id;
      const query = { _id: new ObjectId(specificId) };
      const servicesDataSpecific = await serviceCollection.findOne(query);

      res.send(servicesDataSpecific);
    });

    app.get("/orders", async (req, res) => {
      let ordersQuery = {
        email: req.query.email
      };
      // console.log(req.query.email);
      // if (req.query.email) {
      //   ordersQuery: {
      //     email: req.query.email;
      //   }
      // }
      const orderData = await orderCollection.find(ordersQuery).toArray();
      // console.log(orderData);
      res.send(orderData);
    });
    app.get("/orders/:id", async (req, res) => {
      const specificOrder = req.params.id;
      const query = { _id: new ObjectId(specificOrder) };
      const orderDataSpecific = await orderCollection.findOne(query);

      res.send(orderDataSpecific);
    });

    app.delete("/orders/:id", async (req, res) => {
      const specificOrder = req.params.id;
      const query = { _id: new ObjectId(specificOrder) };
      const orderDataSpecificDelete = await orderCollection.deleteOne(query);

      res.send(orderDataSpecificDelete);
    });
    app.post("/checkoutData", async (req, res) => {
      console.log(req.body);

      const serviceId = req.body.service;
      const serviceName = req.body.serviceName;
      const price = req.body.price;
      const customer = req.body.customer;
      const email = req.body.email;
      const message = req.body.message;
      const phone = req.body.phone;

      const data = {
        serviceId,
        serviceName,
        price,
        customer,
        email,
        message,
        phone
      };
      const dataSent = await orderCollection.insertOne(data);
      res.send(dataSent);
    });
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

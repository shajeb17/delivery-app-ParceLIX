require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URL;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {
    await client.connect();
    const parcelix = client.db("parcelix");
    const mongoUsers = parcelix.collection("users");
    // Send a ping to confirm a successful connection

    app.post("/users", async (req, res) => {
      let parcelPost = req.body;
      parcelPost.OrderDate = new Date().toISOString();
      const userInfo = await mongoUsers.insertOne(parcelPost);
      res.send(userInfo);
    });
    app.get("/users", async (req, res) => {
      const cursor = mongoUsers.find();
      let result = await cursor.toArray();
      res.send(result);
    });
    app.get("/users/:id" , async(req,res)=>{
      let params=req.params.id
      let query={_id:new ObjectId(params)}
      let result= await mongoUsers.findOne(query)
      res.send(result)
    })
    app.delete("/users/:id", async(req,res)=>{
       let id=req.params.id
       let query={_id:new ObjectId(id)}
       let result=await mongoUsers.deleteOne(query)
       res.send(result)
    })

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!",
    );
  } finally {
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

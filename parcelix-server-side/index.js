require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URL;
const stripe = require("stripe")(process.env.STRIPE_KYE);

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
    app.get("/users/:id", async (req, res) => {
      let params = req.params.id;
      let query = { _id: new ObjectId(params) };
      let result = await mongoUsers.findOne(query);
      res.send(result);
    });
    app.post("/payment-checkout", async (req, res) => {
      const data = req.body;

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: "usd",
              unit_amount: data?.deliveryPrice * 100,
              product_data: {
                name: data?.parcelName,
              },
            },

            quantity: 1,
          },
        ],
        mode: "payment",
        customer_email: data?.email,
        metadata: { plantId: data?._id },
        success_url: `http://localhost:5173/deashbord/PaymentSuccess?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `http://localhost:5173/deashbord/Payment/${data?._id}`,
      });
      res.json({ url: session.url });
    });
    app.patch("/payment-success", async (req, res) => {
      let params = req.query.session_id;
      const session = await stripe.checkout.sessions.retrieve(params);
      console.log(session);

      if (session.payment_status === "paid") {
         const id=session.metadata.plantId
         const query={_id:new ObjectId(id)}
         const update={
           $set:{
              paymentStatus:"paid"
           }
         }
         const result=await mongoUsers.updateOne(query,update)
         res.send({ success: true, result });
      } else {
        res.send({ success: false });
      }
    });
    app.delete("/users/:id", async (req, res) => {
      let id = req.params.id;
      let query = { _id: new ObjectId(id) };
      let result = await mongoUsers.deleteOne(query);
      res.send(result);
    });

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

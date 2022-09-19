const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")('sk_test_51LidQnAHXIkEQ0eTqtxcrJShgqOw7cWOk6Qr2wClYArYhXPsFA8iFK1RW2YIqTRrJW3bWrjGdlbGGvS13EZlA4f80049OTUL3l')

//API

//App Config
const app = express();

//Middle warea
app.use(cors({ origin: true }));
app.use(express.json());

//API route
app.get('/', (request, response) => response.status(200).send("Hello World"))

app.post('/payments/create', async (request, response) => {
  const total = request.query.total;
  console.log('Payment Request Recived BOOM!!!  for this amount >>>', total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //submit of currency
    currency: "usd",
  });

  //OK -CREATED
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  })
})


//Listen command
exports.api = functions.https.onRequest(app)



// EXAMPLE END POINT
//http://localhost:5001/challenge-d5898/us-central1/api


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

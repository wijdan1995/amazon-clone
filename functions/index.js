const functions = require('firebase-functions')
const express = require('express')
const cors = require('cors')
const { request, response } = require('express')
const stripe = require('stripe')('sk_test_51HQDpHFGNA0igdzZ24RspLjGDPFkj4BSl7bTgnZ33bQlGUQN9aDxylujHkxlrnqaqH12U2WSZBVGGxmLaTOk5h7d00dksGXnPx')

//api

// app config
const app = express()

// middlewares
app.use(cors({ origin: true }))
app.use(express.json())

// api routes
app.get('/', (request, response) => response.status(200).send('Hello world'))
app.post('/payment/create', async (request, response ) => {
    const total = request.query.total

    console.log('Payment request recieved >> ', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd",
    })
    
      //  created
      response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
    
})


// listen command
exports.api = functions.https.onRequest(app)

// http://localhost:5001/clone-6ba24/us-central1/api
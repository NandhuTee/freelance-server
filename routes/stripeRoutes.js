// server/routes/stripeRoutes.js

import dotenv from "dotenv";

dotenv.config();
import express from "express";
import Stripe from "stripe";
const router = express.Router();

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY environment variable is not set.");
}
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

router.post("/create-checkout-session", async (req, res) => {
  const { gig } = req.body;

  console.log("▶️ Received gig for Stripe Checkout:", gig);

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [{
        price_data: {
          currency: "inr",
          product_data: {
            name: gig.title,
            description: gig.description,
          },
          unit_amount: gig.price * 100,
        },
        quantity: 1,
      }],
      mode: "payment",
      success_url: `${process.env.CLIENT_URL}/success`,
      cancel_url: `${process.env.CLIENT_URL}/gigs/${gig._id}`,
    });
    console.log("✅ Stripe session created successfully:", session.id);
    res.json({ id: session.id });
  } catch (err) {
    console.error("❌ Stripe session error:", err);
    res.status(500).json({ message: "Stripe error", error: err.message });
  }
});

export default router;

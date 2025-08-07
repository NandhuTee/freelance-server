import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

// POST /api/orders - Create Order
router.post("/", async (req, res) => {
  try {
    const { gigId, buyerId, freelancerId, price } = req.body;

    const newOrder = new Order({ gigId, buyerId, freelancerId, price });
    await newOrder.save();

    res.status(201).json(newOrder);
  } catch (err) {
    res.status(500).json({ message: "Failed to create order", error: err.message });
  }
});

// GET /api/orders/buyer/:buyerId - Get orders by buyer
router.get("/buyer/:buyerId", async (req, res) => {
  try {
    const orders = await Order.find({ buyerId: req.params.buyerId }).populate("gigId");
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: "Failed to get buyer orders", error: err.message });
  }
});

// GET /api/orders/freelancer/:freelancerId - Get orders by freelancer
router.get("/freelancer/:freelancerId", async (req, res) => {
  try {
    const orders = await Order.find({ freelancerId: req.params.freelancerId }).populate("gigId");
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: "Failed to get freelancer orders", error: err.message });
  }
});

export default router;

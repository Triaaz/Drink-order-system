const express = require("express");
const app = express();

app.use(express.json());

const menu = {
  boba: 4,
  coffee: 3,
  tea: 2,
  juice: 5
};

// user-based storage
let orders = {};

app.get("/menu", (req, res) => {
  res.json(menu);
});

app.post("/order", (req, res) => {
  const { name, drink, quantity } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }

  if (!menu[drink]) {
    return res.status(400).json({ error: "Drink not available" });
  }

  if (!Number.isInteger(quantity) || quantity <= 0) {
    return res.status(400).json({ error: "Invalid quantity" });
  }

  // initialize user if not exists
  if (!orders[name]) {
    orders[name] = [];
  }

  // check if drink already exists for user
  let existing = orders[name].find(item => item.drink === drink);

  if (existing) {
    existing.quantity += quantity;
  } else {
    orders[name].push({ drink, quantity });
  }

  res.json({
    message: "Order placed",
    userOrders: orders[name]
  });
});

app.get("/orders", (req, res) => {
  res.json(orders);
});
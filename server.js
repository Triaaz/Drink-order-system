const express = require('express');
const app = express();
app.use(express.json());

const menu = {
    boba: 4,
    coffee: 3,
    tea: 2,
    juice: 5
};

let orders = [];

app.get('/menu', (req, res) => {
    res.json(menu);
});

app.post('/order', (req, res) => {
    const { name, drink, quantity } = req.body;

        if (!menu[drink]) {
        return res.status(400).send("Drink not available");
    }

    if (!Number.isInteger(quantity) || quantity <= 0) {
        return res.status(400).send("Invalid quantity");
    }

        orders.push({ drink, quantity });

    res.send(`Order received: ${quantity} ${drink}(s) for ${name}`);
});

app.get('/orders', (req, res) => {
    res.json(orders);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
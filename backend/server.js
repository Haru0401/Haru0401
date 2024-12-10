const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post("/api/stock", async (req, res) => {
    const { symbol, buyThreshold, sellThreshold } = req.body;
    const apiKey = process.env.API_KEY;

    if (!symbol || !buyThreshold || !sellThreshold) {
        return res.status(400).send("Invalid input.");
    }

    try {
        const response = await axios.get(
            `https://api.twelvedata.com/price?symbol=${symbol}&apikey=${apiKey}`
        );
        const currentPrice = parseFloat(response.data.price);

        let suggestion = "Hold";
        if (currentPrice > sellThreshold) suggestion = "Sell";
        else if (currentPrice < buyThreshold) suggestion = "Buy";

        res.status(200).json({
            symbol,
            currentPrice,
            suggestion,
            lastUpdated: new Date().toISOString(),
        });
    } catch (error) {
        res.status(500).send("Error fetching stock data.");
    }
});

app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});

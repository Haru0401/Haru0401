import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
    const [symbol, setSymbol] = useState("");
    const [buyThreshold, setBuyThreshold] = useState("");
    const [sellThreshold, setSellThreshold] = useState("");
    const [response, setResponse] = useState(null);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setResponse(null);

        try {
            const result = await axios.post("http://localhost:5000/api/stock", {
                symbol,
                buyThreshold: parseFloat(buyThreshold),
                sellThreshold: parseFloat(sellThreshold),
            });
            setResponse(result.data);
        } catch (err) {
            setError("Error fetching stock data. Please check your input.");
        }
    };

    return (
        <div className="app-container">
            <h1>Stock Price Alert System</h1>
            <form className="form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Stock Symbol (e.g., AAPL)"
                    value={symbol}
                    onChange={(e) => setSymbol(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Buy Threshold"
                    value={buyThreshold}
                    onChange={(e) => setBuyThreshold(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Sell Threshold"
                    value={sellThreshold}
                    onChange={(e) => setSellThreshold(e.target.value)}
                    required
                />
                <button type="submit">Check Stock</button>
            </form>
            {response && (
                <div className="result">
                    <h2>Stock Data</h2>
                    <p><strong>Symbol:</strong> {response.symbol}</p>
                    <p><strong>Current Price:</strong> ${response.currentPrice}</p>
                    <p><strong>Suggestion:</strong> {response.suggestion}</p>
                    <p><strong>Last Updated:</strong> {response.lastUpdated}</p>
                </div>
            )}
            {error && <p className="error">{error}</p>}
        </div>
    );
}

export default App;

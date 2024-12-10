
# Stock Price Alert System

## Overview  
The **Stock Price Alert System** is a web application designed to monitor stock prices and notify users about "Buy" or "Sell" actions based on predefined thresholds. The project leverages asynchronous programming, callbacks, and exception handling to provide a robust and interactive user experience.

## Objective  
Develop an asynchronous function to:  
1. Fetch the latest stock price for a specified company using an API.  
2. Notify users with a "Sell" suggestion if the stock price exceeds a user-defined threshold.  
3. Notify users with a "Buy" suggestion if the stock price falls below a user-defined threshold.  
4. Handle errors gracefully, such as invalid stock symbols or network issues.  

## Features  
- **Real-time Stock Monitoring:** Fetches live stock data from the [Twelvedata API](https://twelvedata.com/).  
- **Custom Alerts:** Users can set upper ("Sell") and lower ("Buy") thresholds for stock prices.  
- **Error Handling:** Logs appropriate messages for issues like invalid stock symbols or network errors.  
- **Interactive Frontend:** A user-friendly interface built using React.  
- **Responsive Design:** Adaptable UI for both desktop and mobile devices.  

## Tech Stack  
### Frontend:  
- React  
- CSS (for styling)  

### Backend:  
- Node.js  
- Express  

### API Integration:  
- Twelvedata API  

## Installation  

### Prerequisites:  
- Node.js installed on your system.  
- Twelvedata API key (you can get it from [here](https://twelvedata.com/)).  

### Steps to Set Up:  
1. Clone the repository:  
   ```bash
   git clone <repository-link>
   cd stock-price-alert-system
   ```  
2. Set up the backend:  
   ```bash
   cd backend
   npm install
   ```  
   - Create a `.env` file in the backend folder and add your API key:  
     ```
     API_KEY=b9d1306a8be94145b99635e18901ef6c
     ```  
   - Start the backend server:  
     ```bash
     npm start
     ```  

3. Set up the frontend:  
   ```bash
   cd ../frontend
   npm install
   npm start
   ```  

4. Open your browser and navigate to:  
   ```
   http://localhost:3000
   ```  

## Usage  
1. Enter a valid stock symbol, "Buy" threshold, and "Sell" threshold in the form.  
2. Click **"Submit"** to start monitoring the stock price.  
3. Notifications will appear for "Buy" or "Sell" suggestions based on the thresholds.  
4. Any errors (e.g., invalid stock symbol) will be displayed on the screen.  

## Future Enhancements  
- Add historical data analysis for trends.  
- Implement email/SMS notifications for alerts.  
- Add a user authentication system.  

## Screenshots  
![image](https://github.com/user-attachments/assets/8285d61b-b50c-4932-962b-c9108f806f36)
![image](https://github.com/user-attachments/assets/79183bb2-c2af-44bb-9246-9aab1fd8b23f)





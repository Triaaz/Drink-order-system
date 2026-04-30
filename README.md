Drink Order System (Express Backend)
Simple Node.js + Express API for handling drink orders. This is an upgrade from a CLI-based system into a backend server using HTTP requests.

What I built
This project was originally a CLI drink ordering system, now converted into an Express API.


Current features:
View drink menu
Place orders via API request
Store orders in server memory (no database yet)
Retrieve all orders


API Endpoints
Get menu
GET /menu
Returns available drinks and prices.

Place order
POST /order

Body (JSON):
{  "name": "John",  "drink": "boba",  "quantity": 2}

Response:
Confirms order placement
Stores order in memory


Get all orders
GET /orders
Returns all stored orders.

What changed from CLI version
1. Input system
Old: terminal prompts (prompt-sync)
New: HTTP requests (Express + JSON)


2. Execution model
Old: runs once and exits
New: runs continuously as a server handling requests


3. Data handling
Old: immediate processing inside loop
New: orders stored in memory and retrieved via endpoints



Current limitation
No database yet
Data resets when server restarts
No authentication or user persistence


How to run
npm installnode server.js
Server runs at:
http://localhost:3000

What I learned from this transition
The main shift was moving from synchronous terminal-based logic to a request/response backend model using Express. The focus is now on handling data flow through routes instead of direct user input.

Next improvements (planned)
Add database (MongoDB)
Improve order structure per user
Add receipt endpoint
Refactor into modular routes/controllers structure


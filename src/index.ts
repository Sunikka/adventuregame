import express, { request, response } from "express";

const app = express();
const port = 3000;

// Get all users
app.get("/users", (req, res) => {
	res.send("Hello world!");
})

// Get user by ID
app.get("/users/{id}", (req, res) => {
	res.send("Hello world!");
})

// Create user
app.post("/users", (req, res) => {
	res.send("Hello world!");
})

// Update user
app.put("/users/{id}", (req, res) => {
	res.send("Hello world!");
})

// Delete user
app.delete("/users/{id}", (req, res) => {
	res.send("Hello world!");
})

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
})

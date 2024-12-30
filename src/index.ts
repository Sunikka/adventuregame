import express, { request, response } from "express";
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
const frontPath: string | undefined = process.env.FRONTEND_DIR
if (!frontPath) {
	throw new Error(`Environment variable for static files not found`)
}

// Serve the frontend
app.use("/", express.static(frontPath))


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

app.listen(process.env.PORT, () => {
	console.log(`App listening on port ${process.env.PORT}`);
})

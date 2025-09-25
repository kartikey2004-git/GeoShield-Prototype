import express from "express";
import http from "http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import UserActivity from "./models/UserActivity.js";

// Load the MongoDB connection URI from environment variables

const MONGODB_URI = process.env.MONGODB_URI;

// Initialize a new Express application
const app = express();

// Create an HTTP server using the Express app
const server = http.createServer(app);

// Use CORS middleware to handle cross-origin resource sharing
app.use(cors());

// Middleware to parse incoming requests with JSON payloads
app.use(express.json());


// Establish a connection to the MongoDB database
const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

connectDB()


// Initialize a Socket.IO server using the HTTP server and allow all CORS origins

const io = new Server(server, { cors: { origin: "*" } });

io.on("connection", (socket) => {

  // Log when a user connects and display their unique socket ID
  
  console.log("User connected", socket.id);

  // Listen for location tracking events from the client

  socket.on("track-location", async (data) => {
    console.log("Location update:", data);

    // Save user activity data (socket ID, user ID, coordinates, clicks) to the database

    await UserActivity.create({
      socketId: socket.id,
      userId: data.userId || "anonymous",
      lat: data.lat,
      lng: data.lng,
    });

    // Broadcast the location update to all connected clients (e.g., admin dashboard)
    
    io.emit("location-update", data);
  });

  // Handle user disconnect event
  socket.on("disconnect", () => {
    console.log("User disconnected", socket.id);
  });
});

// Define the port and start the Socket.IO server
const PORT = 4000;
server.listen(PORT, () =>
  console.log(`Socket.IO server running on port ${PORT}`)
);

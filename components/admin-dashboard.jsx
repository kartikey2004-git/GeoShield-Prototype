"use client";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

// Initialize a Socket.IO client connection to the server
const socket = io("http://localhost:4000");

export default function AdminDashboard() {

  // State to store the list of users with their latest location and activity

  const [users, setUsers] = useState([]);

  useEffect(() => {

    // Listen for "location-update" events from the server

    socket.on("location-update", (data) => {

      // Update the users state:
      // 1. Remove any previous entry for the same userId
      // 2. Add the new location data

      setUsers((prev) => [
        ...prev.filter((u) => u.userId !== data.userId),
        data,
      ]);
    });

    // Clean up the socket listener when component unmounts
    
    return () => socket.off("location-update");
  }, []); // Empty dependency array ensures effect runs only once on mount

  return (
    <div>
      {/* Dashboard heading */}
      <h2>Live User Tracking Dashboard</h2>

      {/* Render each user's latest location and activity */}
      {users.map((u) => (
        <div key={u.userId || u.socketId}>
          <p>User: {u.userId || "anonymous"}</p>
          <p>
            Lat: {u.lat}, Lng: {u.lng}
          </p>
          <p>Clicks: {u.clicks}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

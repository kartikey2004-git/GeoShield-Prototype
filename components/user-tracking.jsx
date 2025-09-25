"use client";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

// Initialize a Socket.IO client connection to the server
const socket = io("http://localhost:4000");

export default function UserTracker({ userId }) {

  // State to store user's current latitude and longitude
  const [location, setLocation] = useState({ lat: null, lng: null });

  useEffect(() => {

    // Exit if geolocation is not supported by the browser
    if (!navigator.geolocation) return;

    // Function to get current location and send it to the server

    const sendLocation = () => {
      navigator.geolocation.getCurrentPosition(
        (pos) => {

          // Extract coordinates from geolocation API

          const coords = { lat: pos.coords.latitude, lng: pos.coords.longitude };
          
          // Update local state to display location
          setLocation(coords);

          // Emit location data to the server via Socket.IO
          
          socket.emit("track-location", { userId, lat: coords.lat, lng: coords.lng });
        },
        (err) => console.error(err), // Handle any geolocation errors
        { enableHighAccuracy: true } // Use high-accuracy mode for precise location
      );
    };

    // Send location immediately once when component mounts
    sendLocation();

    // Send location every 15 minutes (15 * 60 * 1000 ms)
    const intervalId = setInterval(sendLocation, 15 * 60 * 1000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures effect runs only once on mount

  return (
    <div>
      {/* Display user tracking info */}
      <p>Tracking user: {userId || "anonymous"}</p>
      <p>Latitude: {location.lat}</p>
      <p>Longitude: {location.lng}</p>
    </div>
  );
}

"use client";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import Map from "./Map";

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

          const coords = {
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          };

          // Update local state to display location
          setLocation(coords);

          // Emit location data to the server via Socket.IO

          socket.emit("track-location", {
            userId,
            lat: coords.lat,
            lng: coords.lng,
          });
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
    <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-lg space-y-4 p-2">
      {/* Header */}

      {/* User Info */}
      <div className="flex items-center gap-6 text-slate-600 dark:text-slate-300">
        <p>
          <span className="font-medium">Latitude:</span>{" "}
          {location.lat ? location.lat.toFixed(6) : "Fetching..."}
        </p>
        <p>
          <span className="font-medium">Longitude:</span>{" "}
          {location.lng ? location.lng.toFixed(6) : "Fetching..."}
        </p>
      </div>

      {/* Map */}
      <div className="rounded-xl overflow-hidden border border-slate-200 h-[210px] dark:border-slate-700">
        <Map lat={location.lat} lng={location.lng} className=""/>
      </div>
    </div>
  );
}

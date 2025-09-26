import React from "react";

export default function Map({ lat, lng }) {
  if (!lat || !lng) return <p>Waiting for location...</p>;

  const mapSrc = `https://www.google.com/maps?q=${lat},${lng}&hl=es;z=14&output=embed`;

  return (
    <div className="w-full h-full rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-md">
      <iframe
        src={mapSrc}
        className="w-full h-full"
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

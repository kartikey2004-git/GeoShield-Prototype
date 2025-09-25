import React from "react";

const SeeInAction = () => {
  return (
    <div className="min-h-screen py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-3xl mb-2 text-gray-900">
            See It In Action
          </h1>
          <p className="text-gray-700 font-medium text-base md:text-xs leading-tight">
            See how <span className="font-medium text-gray-900">GeoShield</span>{" "}
            keeps tourists safe in real-time,
            <br />
            leveraging AI, blockchain, and geofencing technologies.
          </p>
        </div>

        <div className="flex items-center justify-center">
          {/* Your demo/video component goes here */}
        </div>
      </div>
    </div>
  );
};

export default SeeInAction;

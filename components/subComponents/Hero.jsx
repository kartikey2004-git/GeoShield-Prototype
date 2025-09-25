import { ArrowUpRight } from "lucide-react";
import { Instrument_Serif } from "next/font/google";
import React from "react";
import WorldMap from "../ui/world-map";
import Link from "next/link";

const instrumentalSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
});

const Hero = () => {
  return (
    <>
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
          linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
        `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 pt-32 pb-16 md:flex-row md:gap-8 lg:px-8 mb-20 bg-white">
        <div className="w-full md:w-1/2">
          <h1
            className={`${instrumentalSerif.className} mb-8 text-4xl font-light leading-tight tracking-tighter md:text-5xl`}
          >
            <span className="text-gray-800">AI-Driven </span>
            <span className="font-normal text-black">Smart Safety &</span>
            <br />
            <span className="text-gray-800">Incident Response </span>
            <span className="font-normal text-black">for Tourists</span>
          </h1>

          <div className="relative mb-8">
            <p className="inline-block rounded border border-gray-300 bg-white/50 px-4 py-2 text-sm text-gray-600 backdrop-blur-sm">
              Discover GeoShield
            </p>
          </div>

          <p className="mb-12 max-w-md text-sm leading-tight text-gray-700">
            An AI-powered, blockchain-secured system that monitors tourist
            safety in real-time and provides rapid incident response using
            geofencing technology.
          </p>

          <div className="flex items-center gap-4">
            <Link
              className="group flex items-center gap-2 rounded-md bg-black text-white px-6 py-3 font-medium transition-all hover:scale-105 hover:bg-gray-800 active:scale-95"
              href="/dashboard"
            >
              Get started
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Link>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>backed by</span>
              <div className="rounded bg-orange-500 px-2 py-1 text-xs text-white">
                Peers
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <div className="h-80 w-full rounded-xl">
            <div className="w-full">
              <WorldMap
                dots={[
                  {
                    start: { lat: 64.2008, lng: -149.4937 },
                    end: { lat: 34.0522, lng: -118.2437 },
                  },
                  {
                    start: { lat: 64.2008, lng: -149.4937 },
                    end: { lat: -15.7975, lng: -47.8919 },
                  },
                  {
                    start: { lat: -15.7975, lng: -47.8919 },
                    end: { lat: 38.7223, lng: -9.1393 },
                  },
                  {
                    start: { lat: 51.5074, lng: -0.1278 },
                    end: { lat: 28.6139, lng: 77.209 },
                  },
                  {
                    start: { lat: 28.6139, lng: 77.209 },
                    end: { lat: 43.1332, lng: 131.9113 },
                  },
                  {
                    start: { lat: 28.6139, lng: 77.209 },
                    end: { lat: -1.2921, lng: 36.8219 },
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

import mongoose from "mongoose";
import BlockchainID from "@/models/BlockchainID";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);

    // Fetch only blockchainId, createdAt, updatedAt
    const ids = await BlockchainID.find({}, "blockchainId createdAt updatedAt")
      .sort({ createdAt: -1 }); // latest first

    return NextResponse.json(ids, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to fetch blockchain IDs" },
      { status: 500 }
    );
  }
}

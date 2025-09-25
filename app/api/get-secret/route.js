import { decryptText } from "@/lib/crypto.js";
import BlockchainID from "@/models/BlockchainID";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const apiKey = req.headers.get("x-api-key");

    if (!apiKey || apiKey !== process.env.ADMIN_API_KEY) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { blockchainId } = body;

    if (!blockchainId) {
      return NextResponse.json(
        { error: "Missing blockchainId" },
        { status: 400 }
      );
    }

    await mongoose.connect(process.env.MONGODB_URI);

    const rec = await BlockchainID.findOne({ blockchainId }).lean();

    if (!rec) return NextResponse.json({ error: "Not found" }, { status: 404 });

    const salt = decryptText(rec.salt_enc);

    const privateKey = decryptText(rec.privateKey_enc);
    const mnemonic = decryptText(rec.mnemonic_enc);

    return NextResponse.json(
      { blockchainId, salt, privateKey, mnemonic },
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

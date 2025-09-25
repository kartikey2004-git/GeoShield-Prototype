import { decryptText } from "@/lib/crypto.js";
import BlockchainID from "@/models/BlockchainID.js";
import { NextResponse } from "next/server";
import crypto from "crypto";
import mongoose from "mongoose";

export async function POST(req) {
  try {
    const body = await req.json();

    const { blockchainId, fullName, email } = body;

    if (!blockchainId || !fullName || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await mongoose.connect(process.env.MONGODB_URI);

    const rec = await BlockchainID.findOne({ blockchainId }).lean();

    if (!rec) return NextResponse.json({ error: "Not found" }, { status: 404 });

    const salt = decryptText(rec.salt_enc);
    const data = `${fullName}|${email}|${salt}`;
    const computed = crypto.createHash("sha256").update(data).digest("hex");

    const verified = computed === rec.piiHash;
    return NextResponse.json({ verified }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

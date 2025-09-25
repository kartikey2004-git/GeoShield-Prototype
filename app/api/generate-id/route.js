import { ethers } from "ethers";
import crypto from "crypto";
import { encryptText } from "@/lib/crypto.js";
import BlockchainID from "@/models/BlockchainID";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function POST(req) {
  try {
    const body = await req.json();

    const { fullName, email } = body;

    if (!fullName || !email) {
      return NextResponse.json(
        { error: "Missing fullName|email" },
        { status: 400 }
      );
    }

    await mongoose.connect(process.env.MONGODB_URI);

    /* 1. wallet */
    const wallet = ethers.Wallet.createRandom();

    /* 2. salt + hash PII */
    const salt = crypto.randomBytes(32).toString("hex");

    const data = `${fullName}|${email}|${salt}`;

    const piiHash = crypto.createHash("sha256").update(data).digest("hex");

    /* 3. encrypt secrets */
    const salt_enc = encryptText(salt);
    const privateKey_enc = encryptText(wallet.privateKey);
    const mnemonic_enc = encryptText(wallet.mnemonic.phrase);

    /* 4. store in DB*/

    const doc = await BlockchainID.create({
      blockchainId: wallet.address,
      piiHash,
      salt_enc,
      privateKey_enc,
      mnemonic_enc,
    });

    /* 5. return only safe fields */

    return NextResponse.json(
      {
        blockchainId: doc.blockchainId,
        piiHash: doc.piiHash,
        createdAt: doc.createdAt,
      },
      { status: 201 }
    );
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

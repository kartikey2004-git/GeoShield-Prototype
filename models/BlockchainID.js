import mongoose from "mongoose";

const Schema = new mongoose.Schema(
  {
    blockchainId: {
      type: String,
      required: true,
      unique: true,
    },
    piiHash: {
      type: String,
      required: true,
    },
    salt_enc: {
      type: String,
      required: true,
    },
    privateKey_enc: {
      type: String,
      required: true,
    },
    mnemonic_enc: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.BlockchainID ||
  mongoose.model("BlockchainID", Schema);

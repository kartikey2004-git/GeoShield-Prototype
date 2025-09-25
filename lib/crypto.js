import crypto from "crypto";

const ALGO = "aes-256-gcm";

const KEY_HEX = process.env.ENCRYPTION_KEY;

if (!KEY_HEX) throw new Error("Missing ENCRYPTION_KEY in env");

const KEY = Buffer.from(KEY_HEX, "hex"); // 32 bytes

export function encryptText(plain) {
  const iv = crypto.randomBytes(12); // 96-bit recommended for GCM
  const cipher = crypto.createCipheriv(ALGO, KEY, iv, { authTagLength: 16 });
  const ciphertext = Buffer.concat([
    cipher.update(String(plain), "utf8"),
    cipher.final(),
  ]);
  const tag = cipher.getAuthTag();
  // store iv:ciphertext:tag as hex
  return `${iv.toString("hex")}:${ciphertext.toString("hex")}:${tag.toString(
    "hex"
  )}`;
}

export function decryptText(payload) {
  if (!payload) return null;
  const parts = payload.split(":");
  if (parts.length !== 3) throw new Error("Invalid encrypted payload");
  const [ivHex, ctHex, tagHex] = parts;
  const iv = Buffer.from(ivHex, "hex");
  const ct = Buffer.from(ctHex, "hex");
  const tag = Buffer.from(tagHex, "hex");

  const decipher = crypto.createDecipheriv(ALGO, KEY, iv, {
    authTagLength: 16,
  });
  decipher.setAuthTag(tag);
  const out = Buffer.concat([decipher.update(ct), decipher.final()]);
  return out.toString("utf8");
}

import mongoose from "mongoose";
import type { Document } from "mongoose";

let nanoId;
//(nanoId = pkg.default.customAlphabet("abcefghigklmnopqrstuv0987654321", 6)

export interface ShortURL extends Document {
  shortId: string;
  destination: string;
}

const schema = new mongoose.Schema({
  shortId: {
    type: String,
    unique: true,
    required: true,
    default: () => 1,
  },
  destination: {
    type: String,
    required: true,
  },
});

const shortUrl = mongoose.model<ShortURL>("shortUrl", schema);

export default shortUrl;

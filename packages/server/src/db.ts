import mongoose from "mongoose";
import config from "config";

async function db() {
  const dbUri = config.get<string>("dbUri");
  await mongoose.connect(dbUri).catch(e => console.error(e));
}

export default db;

import { Schema, model } from "mongoose";

const CurrencySchema = new Schema(
  {
    name: String,
    symbol: String,
    rate: Number,
    description: String,
    updatedAt: Date,
  },
  {
    versionKey: false,
  }
);

export default model("Currency", CurrencySchema);

import mongoose from "mongoose";
const { Schema, model } = mongoose;

const relationSchema = new Schema({
  spouse: { type: String, required: true },
  phone: { type: String, required: true },
  nationality: [String],
  religion: String,
  tribe: String,
  children: [String],
  witness: [String],
});

const Relation = model("Relation", relationSchema);
export default Relation;

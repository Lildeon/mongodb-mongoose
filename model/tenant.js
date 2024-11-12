import mongoose from "mongoose";
const { Schema, model, SchemaTypes } = mongoose;

const tenantSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    roomType: String,
    nationality: String,
    religion: String,
    months: {
      type: Number,
      required: true,
      immutable: true,
    },
    totalPay: { type: String, immutable: true },
    countStart: {
      type: Date,
      immutable: true,
    },
    relation: {
      type: SchemaTypes.ObjectId,
      ref: "Relation",
    },
  },
  {
    timestamps: true,
  }
);

const Tenant = model("Tenant", tenantSchema);
export default Tenant;

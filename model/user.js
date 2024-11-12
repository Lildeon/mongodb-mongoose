import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    required: true,
    minLength: 10,
    lowercase: true,
  },
});

const User = mongoose.model("User", userSchema);
export default User;

import mongoose from "mongoose";
const { Schema, model } = mongoose;

const blogSchema = new Schema({
  Title: {
    type: String,
    required: true,
  },
  Content: {
    type: String,
    required: true,
  },
  Tag: String,
});

const Blog = model("Blog", blogSchema);
export default Blog;

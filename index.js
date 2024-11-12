import mongoose from "mongoose";
import Blog from "./model/mobileBlog.js";

mongoose.connect("mongodb://localhost:27017/mobileBlog");

const article = await Blog.find();

console.log(article);

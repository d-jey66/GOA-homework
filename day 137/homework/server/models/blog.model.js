import mongoose from 'mongoose'

const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  date: { type: Date, default: Date.now },
  tags: [String]
})

export const Blog = mongoose.model('Blog', blogSchema)
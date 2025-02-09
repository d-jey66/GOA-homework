import mongoose from 'mongoose'

const newsSchema = new mongoose.Schema({
    title: String,
    summary: String,
    content: String,
    imageUrl: String,
    category: String,
    author: String,
    authorImage: String,
    date: { type: Date, default: Date.now },
    tags: [String]
  })
  
  export const News = mongoose.model('News', newsSchema)
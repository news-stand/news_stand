import mongoose from 'mongoose';

const { Schema } = mongoose;

const articleSchema = new Schema({
  urlToImage: String,
  title: String,
  description: String,
  source: {
    name: String,
  },
  author: String,
  url: String,
});

const Article = mongoose.model('Article', articleSchema);

export default Article;

import mongoose from "mongoose";

const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  subTitle: {
    type: String,
    required: true,
    unique: false,
  },
  summary: {
    type: String,
    required: true,
    unique: false,
  },
  category: {
    type: String,
    required: true,
    unique: false,
  },
  stat: {
    type: String,
    required: true,
    unique: false,
  },
  pdfPath: {
    type: String,
    required: true,
    unique: false,
  },
  imgPath: {
    type: String,
    required: true,
    unique: false,
  },
  uploadTime: {
    type: Date,
    required: true,
    default: () => {
      const currentDate = new Date();
      const offset = 8;
      const beijingTime = new Date(
        currentDate.getTime() + offset * 60 * 60 * 1000,
      );
      return beijingTime;
    },
  },
});

const Article =
  mongoose.models.Article || mongoose.model("Article", articleSchema);
export default Article;

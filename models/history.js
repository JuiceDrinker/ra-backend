const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const historySchema = new Schema(
  {
    title: { type: String, required: true },
    videoId: { type: String, required: true },
    author: { type: String, required: true },
  },
  {
    timestamps: {
      createdAt: "created_at"
    }
  }
);

const History = mongoose.model("History", historySchema);

module.exports = History;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const historySchema = new Schema({
  title: { type: String, required: true },
  videoId: { type: String, required: true, unique: true },
  author: { type: String, required: true },
});

const History = mongoose.model("History", historySchema);

module.exports = History;

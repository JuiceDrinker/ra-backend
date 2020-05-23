const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const historySchema = new Schema({
  title: [{ type: String, required: true }],
  videoId: [{ type: String, required: true, unique: true }],
  author: [{ type: String, required: true, unique: true }],
});
  
const History = mongoose.model("HistoryEntry", historySchema);

module.exports = History;

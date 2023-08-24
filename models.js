const mongoose = require('mongoose');
const { Schema } = mongoose;

const date = new Date();

const ReplySchema = new Schema({
  text: { type: String },
  delete_password: { type: String },
  reported: { type: Boolean, default: false },
  created_on: { type: Date, default: date },
  bumped_on: { type: Date, default: date },
});

const ThreadSchema = new Schema({
  text: { type: String },
  delete_password: { type: String },
  reported: { type: Boolean, default: false },
  created_on: { type: Date, default: date },
  bumped_on: { type: Date, default: date },
  replies: { type: [ReplySchema] },
});

const BoardSchema = new Schema({
  name: { type: String },
  threads: { type: [ThreadSchema] },
});

const Board = mongoose.model("Board", BoardSchema);
const Thread = mongoose.model("Thread", ThreadSchema);
const Reply = mongoose.model("Reply", ReplySchema);

exports.Board = Board;
exports.Thread = Thread;
exports.Reply = Reply;
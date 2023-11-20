const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trimmed: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [],
    },
  }
);

const Reaction = model ('reaction ', reactionSchema);

module.exports = Reaction;

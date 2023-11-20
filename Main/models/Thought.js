const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      unique: true,
      trimmed: true
    },
    createdAt: {
      type: String,
      required: true,
      unique: true,
      match: [],
    },
    username: {
      type: String,
    },

    thoughts: [thoughtSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

thoughtSchema
  .virtual('reactionCount')
  .get(function () {
    return `${this.reactions.length}`;
  })

const Thought = model('thought', thoughtSchema);

module.exports = Thought;

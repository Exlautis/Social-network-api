const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/date-format');
const reactionSchema = require('./Reaction');


// thoght schema
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => dateFormat(createdAtVal)
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

// total count of friends
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

//create user model using userSchema
const Thought = model('Thought', thoughtSchema);

module.exports = { Thought };
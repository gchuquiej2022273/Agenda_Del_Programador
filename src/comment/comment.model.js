import mongoose from "mongoose";

const CommentSchema = mongoose.Schema({

    name: {
        type: String,
        required: [true, "The name is mandatory"]
    },

    description: {
        type: String,
        required: [true, "The description is mandatory"]
    }
});

export default mongoose.model('Comment', CommentSchema);
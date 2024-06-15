import * as mongoose from 'mongoose';

export const bookSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        description: { type: String },
        authorId: { type: mongoose.Types.ObjectId, required: true },
        publishedDate : { type: Date, required: true }

    },
); 
import * as mongoose from 'mongoose';

export const authorSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        biography: { type: String},
        birthdate: { type: Date,required: true }

    },
); 
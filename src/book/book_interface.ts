import { ObjectId } from "mongoose";

export interface book {
    _id?: ObjectId,
    title: String,
    description?: String,
    authorId: ObjectId,
    publishedDate: Date
}
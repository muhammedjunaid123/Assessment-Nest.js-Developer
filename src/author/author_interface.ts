import { ObjectId } from "mongoose";

export interface author{
    _id?:ObjectId,
    name:String,
    biography?:String,
    birthdate:Date
}
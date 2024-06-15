import { ObjectId } from "mongoose";

export interface author{
    id?:ObjectId,
    name:String,
    biography?:String,
    birthdate:Date
}
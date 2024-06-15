import { Inject } from "@nestjs/common";
import { Model } from "mongoose";
import { author } from "src/author/author_interface";
import * as mongoose from "mongoose";

export class authorRepository {
    constructor(
        @Inject('AUTHOR_MODEL')
        private _author_model: Model<author>
    ) { }
    //
    async create_author(author: author) {
        try {

            const { birthdate, name, biography } = author
            const data = new this._author_model({
                name: name,
                birthdate: birthdate,
                biography: biography
            })
            return await data.save()
        } catch (error) {
            throw new Error(error)
        }
    }
    //
    async get_author() {
        try {
            return await this._author_model.find()
        } catch (error) {
            throw new Error(error)
        }
    }
    //
    async update_author(author: author) {
        try {
            const { birthdate, _id, name, biography } = author
            return await this._author_model.findByIdAndUpdate({ _id: _id },
                { $set: { name: name, birthdate: birthdate, biography: biography } }
            )

        } catch (error) {
            throw new Error(error)
        }
    }
    async delete_author(id: string) {
        try {
        
            let data= await this._author_model.findByIdAndDelete({ _id:id})
           if(data==null) throw new Error()
            return data
            

        } catch (error) {
            throw new Error(error)
        }
    }

}
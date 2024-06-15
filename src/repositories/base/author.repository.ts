import { Inject } from "@nestjs/common";
import { Model } from "mongoose";
import { author } from "src/author/author_interface";

export class authorRepository {
    constructor(
        @Inject('AUTHOR_MODEL')
        private _author_model: Model<author>
    ) { }

    async create_author(author: author) {
        const { birthdate, id, name, biography } = author
        const data = new this._author_model({
            name: name,
            birthdate: birthdate,
            biography: biography
        })
          return await data.save()
    }

}
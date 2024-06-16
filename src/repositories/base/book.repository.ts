import { Inject } from "@nestjs/common";
import { Model } from "mongoose";
import { book } from "src/book/book_interface";

export class bookRepository {
    constructor(
        @Inject('BOOK_MODEL') private _bookModel: Model<book>
    ) { }
    async create_book(book: book) {
        try {
            const { title, description, authorId, publishedDate } = book;
            const data = new this._bookModel({
                title: title,
                description: description,
                authorId: authorId,
                publishedDate: publishedDate
            });
            return await data.save();
        } catch (error) {
            throw new Error(error);
        }
    }

    async get_books() {
        try {
            return await this._bookModel.find();
        } catch (error) {
            throw new Error(error);
        }
    }

    async update_book(book: book) {
        try {
            const { _id, title, description, authorId, publishedDate } = book;
            return await this._bookModel.findByIdAndUpdate(
                { _id: _id },
                { $set: { title: title, description: description, authorId: authorId, publishedDate: publishedDate } },
                { new: true }
            );
        } catch (error) {
            throw new Error(error);
        }
    }

    async delete_book(id: string) {
        try {
            const data = await this._bookModel.findByIdAndDelete({ _id: id });
            if (data == null) throw new Error('Book not found');
            return data;
        } catch (error) {
            throw new Error(error);
        }
    }
    async specific_author_books(authorId: string) {
        try {
            const data = await this._bookModel.find({ authorId: authorId });
            console.log(data);
            
            if (data == null) throw new Error('Book not found');
            return data;
        } catch (error) {
            throw new Error(error);
        }
    }
    book_date_filter(start:Date,end:Date){
        
    }
}
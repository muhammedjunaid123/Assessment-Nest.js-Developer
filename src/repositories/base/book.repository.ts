import { Inject } from "@nestjs/common";
import { Model, ObjectId } from "mongoose";
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

    async get_books(page:number) {
        try {
            const skip = (page - 1) * 10;
            return await this._bookModel.find().skip(skip).limit(10).exec();
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

    async delete_book(id:ObjectId) {
        try {
            const data = await this._bookModel.findByIdAndDelete({ _id: id });
            if (data == null) throw new Error('Book not found');
            return data;
        } catch (error) {
            throw new Error(error);
        }
    }
    async specific_author_books(authorId: ObjectId) {
        try {
            const data = await this._bookModel.find({ authorId: authorId });
            console.log(data);

            if (data == null) throw new Error('Book not found');
            return data;
        } catch (error) {
            throw new Error(error);
        }
    }
    book_date_filter(start: Date, end: Date) {
        try {
            start = new Date(start)
            end = new Date(end)

            return this._bookModel.aggregate([{
                $match: {
                    publishedDate: {
                        $gte: start,
                        $lte: end
                    }
                }
            }])
        } catch (error) {
            throw new Error(error);
        }
    }
}
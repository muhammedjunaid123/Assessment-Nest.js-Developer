import { HttpStatus, Injectable } from '@nestjs/common';
import { bookRepository } from 'src/repositories/base/book.repository';
import { book } from './book_interface';
import { Response } from 'express';

@Injectable()
export class BookService {

    constructor(private _bookRepository: bookRepository) { }

    create_book(book: book, res: Response) {
        this._bookRepository.create_book(book).then((result: book) => {
            return res.status(HttpStatus.CREATED).json({ message: "Book created" });
        })
            .catch((error) => {
                return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: error['message'], message: "Book not created" });
            });
    }

    get_book(res: Response) {
        this._bookRepository.get_books().then((result: book[]) => {
            return res.status(HttpStatus.OK).json(result);
        })
            .catch((error) => {
                return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: error['message'], message: "INTERNAL SERVER ERROR" });
            });
    }

    update_book(book: book, res: Response) {
        this._bookRepository.update_book(book).then((result: book) => {
            return res.status(HttpStatus.OK).json({ message: "Book updated" });
        })
            .catch((error) => {
                return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: error['message'], message: "Book not updated" });
            });
    }

    delete_book(id: string, res: Response) {
        this._bookRepository.delete_book(id).then(() => {
            return res.status(HttpStatus.OK).json({ message: "Book deleted" });
        })
            .catch((error) => {
                return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: error['message'], message: "INTERNAL SERVER ERROR" });
            });
    }
    specific_author_books(authorId: string, res: Response) {
     this._bookRepository.specific_author_books(authorId).then((result: book[]) => {
        return res.status(HttpStatus.OK).json(result);
    })
        .catch((error) => {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: error['message'], message: "INTERNAL SERVER ERROR" });
        });
    }
    book_date_filter(start:Date,end:Date,res){
        this._bookRepository.book_date_filter(start,end)
    }
}

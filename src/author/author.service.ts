import { HttpStatus, Injectable } from '@nestjs/common';
import { author } from './author_interface';
import { authorRepository } from 'src/repositories/base/author.repository';
import { Response } from 'express';
import { error } from 'console';

@Injectable()
export class AuthorService {
    constructor(
        private readonly _authorRepository: authorRepository
    ) {

    }
    create_author(author: author, res: Response) {
        this._authorRepository.create_author(author).then((result: author) => {
            return res.status(HttpStatus.CREATED).json({ message: "author created" })
        })
            .catch((error) => {
                return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: error['message'], message: "author not created" })
            })
    }
    get_author(res: Response) {
        this._authorRepository.get_author().then((result: author[]) => {
            return res.status(HttpStatus.OK).json(result)
        }).catch((error) => {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: error['message'], message: "INTERNAL SERVER ERROR" })
        })
    }
    update_author(author: author, res: Response) {
        this._authorRepository.update_author(author).then((result: author) => {
            return res.status(HttpStatus.OK).json({ message: "author updated" })
        })
            .catch((error) => {
                return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: error['message'], message: "author not updated" })
            })
    }
    delete_author(id: string, res: Response) {
        this._authorRepository.delete_author(id).then(() => {
            return res.status(HttpStatus.OK).json({ message: "author deleted" })
        })
            .catch((error) => {
                return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: error['message'], message: "INTERNAL SERVER ERROR" })
            })
    }
}

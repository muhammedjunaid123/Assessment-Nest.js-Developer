import { HttpStatus, Injectable } from '@nestjs/common';
import { author } from './author_interface';
import { authorRepository } from 'src/repositories/base/author.repository';
import { Response } from 'express';

@Injectable()
export class AuthorService {
    constructor(
        private readonly _authorRepository: authorRepository
    ) {

    }
    create_author(author: author, res: Response) {
        this._authorRepository.create_author(author).then((result) => {
            return res.status(HttpStatus.CREATED).json({ message: "author created" })
        })
    }
}

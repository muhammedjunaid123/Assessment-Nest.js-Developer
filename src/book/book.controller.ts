import { Body, Controller, Delete, Get, Patch, Post, Res } from '@nestjs/common';
import { BookService } from './book.service';
import { book } from './book_interface';
import { Response } from 'express';

@Controller('book')
export class BookController {
  constructor(private readonly _bookService: BookService) {}

  @Post('create_book')
  async create_book(@Body() book: book, @Res() res: Response) {
    return this._bookService.create_book(book, res);
  }

  @Get('get_book')
  async get_book(@Res() res: Response) {
    return this._bookService.get_book(res);
  }

  @Patch('update_book')
  async update_book(@Body() book: book, @Res() res: Response) {
    return this._bookService.update_book(book, res);
  }

  @Delete('delete_book')
  async delete_book(@Body('id') id: string, @Res() res: Response) {
    return this._bookService.delete_book(id, res);
  }

}

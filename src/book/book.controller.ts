import { Body, Controller, Delete, Get, Patch, Post, Res } from '@nestjs/common';
import { BookService } from './book.service';
import { book } from './book_interface';
import { Response } from 'express';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('book')
@Controller('book')
export class BookController {
  constructor(private readonly _bookService: BookService) { }

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
  @Get('specific_author_books')
  async specific_author_books(@Body('authorId') authorId: string, @Res() res: Response) {
    return this._bookService.specific_author_books(authorId, res)
  }
  @Get('book_date_filter')
  async book_date_filter(@Body('start') start: Date, @Body('end') end: Date, @Res() res: Response) {
    return this._bookService.book_date_filter(start, end, res)
  }
}

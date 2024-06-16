import { Body, Controller, Delete, Get, Patch, Post, Query, Res } from '@nestjs/common';
import { BookService } from './book.service';
import { book } from './book_interface';
import { Response, query } from 'express';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateBookDto, DeleteBookDto, GetBookDto, UpdateBookDto, dateFilterDto, searchBookDto } from './Dto/book.Dto';
import { Book } from './entity/book.entity';


@ApiTags('book')
@Controller('book')
export class BookController {
  constructor(private readonly _bookService: BookService) { }

  @Post('create_book')
  @ApiCreatedResponse({
    description: 'book created',
    type: Book
  })
  @ApiBadRequestResponse({
    description: "book not created"
  })
  async create_book(@Body() book: CreateBookDto, @Res() res: Response) {
    return this._bookService.create_book(book, res);
  }

  @Get('get_book')
  @ApiOkResponse({
    description: "getting all book data in array",
    type: [Book]
  })
  @ApiBadRequestResponse({
    description: 'INTERNAL SERVER ERROR'
  })
  async get_book(@Query('page') page: GetBookDto, @Res() res: Response) {

    return this._bookService.get_book(page, res);
  }

  @Patch('update_book')
  @ApiOkResponse({
    description: "book updated",
    type: Book
  })
  @ApiBadRequestResponse({
    description: 'INTERNAL SERVER ERROR'
  })
  async update_book(@Body() book: UpdateBookDto, @Res() res: Response) {
    return this._bookService.update_book(book, res);
  }

  @Delete('delete_book')
  @ApiOkResponse({
    description: "author deleted",
  })
  @ApiBadRequestResponse({
    description: 'INTERNAL SERVER ERROR'
  })
  async delete_book(@Body() id: DeleteBookDto, @Res() res: Response) {
    return this._bookService.delete_book(id, res);
  }
  @Get('specific_author_books')
  @ApiOkResponse({
    description: "getting specific author books",
    type: [Book]
  })
  @ApiBadRequestResponse({
    description: 'INTERNAL SERVER ERROR'
  })
  async specific_author_books(@Body() authorId: searchBookDto, @Res() res: Response) {
    return this._bookService.specific_author_books(authorId, res)
  }
  @Get('book_date_filter')
  @ApiOkResponse({
    description: "filtering book data with date",
    type: [Book]
  })
  @ApiBadRequestResponse({
    description: 'INTERNAL SERVER ERROR'
  })
  async book_date_filter(@Body() dateData: dateFilterDto, @Res() res: Response) {
    return this._bookService.book_date_filter(dateData, res)
  }
}

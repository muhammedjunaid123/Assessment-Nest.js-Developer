import { Body, Controller, Delete, Get, Patch, Post, Res } from '@nestjs/common';
import { AuthorService } from './author.service';
import { author } from './author_interface';
import { Response } from 'express';
import { get } from 'http';

@Controller('author')
export class AuthorController {
  constructor(private readonly _authorService: AuthorService) { }
  @Post('create_author')
  async create_author(@Body() author: author, @Res() res: Response) {
    return this._authorService.create_author(author, res)
  }
  @Get('get_author')
  async get_author(@Res() res: Response) {
    return this._authorService.get_author(res)
  }

  @Patch('update_author')
  async update_author(@Body() author: author, @Res() res: Response) {
    return this._authorService.update_author(author, res)
  }
  @Delete('delete_author')
  async delete_author(@Body('id') id: string, @Res() res: Response) {
    return this._authorService.delete_author(id, res)
  }
}

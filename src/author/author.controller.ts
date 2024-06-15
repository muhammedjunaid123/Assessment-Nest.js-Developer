import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthorService } from './author.service';
import { author } from './author_interface';
import { Response } from 'express';

@Controller('author')
export class AuthorController {
  constructor(private readonly _authorService: AuthorService) {}
  @Post('create_author')
    async create_author(@Body() author:author,@Res() res:Response){  
      return this._authorService.create_author(author,res)
  }
}

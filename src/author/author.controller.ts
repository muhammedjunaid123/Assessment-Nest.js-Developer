import { Body, Controller, Delete, Get, Patch, Post, Res } from '@nestjs/common';
import { AuthorService } from './author.service';
import { Response } from 'express';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateAuthorDto, DeleteAuthorDto, UpdateAuthorDto } from './Dto/author.Dto';
import { Author } from './entity/author.entity';


@ApiTags('author')
@Controller('author')
export class AuthorController {
  constructor(private readonly _authorService: AuthorService) { }
  @Post('create_author')
  @ApiCreatedResponse({
    description: 'author created',
    type:Author
  })
  @ApiBadRequestResponse({
    description:"author not created"
  })
  async create_author(@Body() author: CreateAuthorDto, @Res() res: Response) {  
    return this._authorService.create_author(author, res)
  }
  @Get('get_author')
  @ApiOkResponse({
    description:"getting all author data in array",
    type:[Author]
  })
  @ApiBadRequestResponse({
    description:'INTERNAL SERVER ERROR'
  })
  async get_author(@Res() res: Response) {
    return this._authorService.get_author(res)
  }
  
  @Patch('update_author')
  @ApiOkResponse({
    description:"author updated",
    type:Author
  })
  @ApiBadRequestResponse({
    description:'INTERNAL SERVER ERROR'
  })
  async update_author(@Body() author: UpdateAuthorDto, @Res() res: Response) {
    return this._authorService.update_author(author, res)
  }

  @Delete('delete_author')
  @ApiOkResponse({
    description:"author deleted",
  })
  @ApiBadRequestResponse({
    description:'INTERNAL SERVER ERROR'
  })
  async delete_author(@Body() id: DeleteAuthorDto, @Res() res: Response) {
    return this._authorService.delete_author(id, res)
  }
}

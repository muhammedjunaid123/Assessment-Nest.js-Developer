import { Module } from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthorController } from './author.controller';
import { authorRepository } from 'src/repositories/base/author.repository';
import { authorProviders } from './author.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports:[DatabaseModule],
  controllers: [AuthorController],
  providers: [AuthorService,authorRepository,...authorProviders],
})
export class AuthorModule {}

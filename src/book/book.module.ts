import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { bookRepository } from 'src/repositories/base/book.repository';
import { bookProviders } from './book.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports:[DatabaseModule],
  controllers: [BookController],
  providers: [BookService,bookRepository,...bookProviders],
})
export class BookModule {}

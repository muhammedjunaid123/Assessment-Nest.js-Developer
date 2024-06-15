import { Connection } from "mongoose";
import { bookSchema } from "src/schemas/book.schema";

export const bookProviders = [
    {
      provide: 'BOOK_MODEL',
      useFactory: (connection: Connection) =>
        connection.model('book', bookSchema),
      inject: ['DATABASE_CONNECTION'],
    },
  ];
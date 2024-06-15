import { Connection } from "mongoose";
import { authorSchema } from "src/schemas/author.schema";

export const authorProviders = [
    {
      provide: 'AUTHOR_MODEL',
      useFactory: (connection: Connection) =>
        connection.model('author', authorSchema),
      inject: ['DATABASE_CONNECTION'],
    },
  ];
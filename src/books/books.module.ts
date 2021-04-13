import { MongooseModule, getModelToken } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { Book, BookSchema } from './schemas/book.schema';

@Module({
  providers: [
    BooksService,
    {
      provide: getModelToken(Book.name),
      useValue: Book,
    },
  ],
  controllers: [BooksController],
  imports: [
    MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]),
  ],
})
export class BooksModule {}

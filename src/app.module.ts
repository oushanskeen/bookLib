import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksController } from './books/books.controller';
import { BooksService } from './books/books.service';
import { BooksModule } from './books/books.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    BooksModule, 
    MongooseModule.forRoot(
      `mongodb+srv://oushanskeen:${process.env.MONGO_PSWD}@library-database.1irwr.mongodb.net/test?retryWrites=true&w=majority`
    )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

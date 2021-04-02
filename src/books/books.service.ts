import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book, BookDocument } from './schemas/book.schema';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {}

  private books = [];

  async getAll(): Promise<Book[]> {
    //return this.books;
    return this.bookModel.find().exec();
  }
  async getOne(id: string): Promise<Book> {
    //return this.books.filter((e) => e === id)[0];
    return this.bookModel.findById(id);
  }
  async create(bookDto: CreateBookDto): Promise<Book> {
    const newBook = new this.bookModel(bookDto);
    return newBook.save();
    /*
    return this.books.push({
      ...bookDto,
      id: Date.now().toString(),
    });
    */
  }
  async remove(id: string): Promise<Book> {
    //return this.books.filter((e) => e !== id);
    return this.bookModel.findByIdAndRemove(id);
  }
  async update(id: string, bookDto: UpdateBookDto): Promise<Book> {
    //[...this.books.filter((el) => el[id] !== id), { [id]: bookDto }];
    return this.bookModel.findByIdAndUpdate(id, bookDto, { new: true });
  }
}

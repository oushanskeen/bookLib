import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book, BookDocument } from './schemas/book.schema';
import * as admin from 'firebase-admin';

const serviceAccount = require('../../firebooklib-firebase-adminsdk-dkwox-f07354e916.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {}

  //private books = [];
  private db = admin.database();

  async getAll(): /*Array<string>*/ Promise<Book[]> {
    //return this.books;
    //return this.bookModel.find().exec();
    const snapshot = this.db.ref('books').get();
    return snapshot.val();
  }
  async getOne(id: string): /*string*/ Promise<Book> {
    //return this.books.filter((e) => e === id)[0];
    //return this.bookModel.findById(id);
    const doc = await this.db.ref('books').child('id');
    return (!doc.val()
      ? "No such document"
      : doc.val()
    );
  }
  async create(bookDto: CreateBookDto): /*number*/ Promise<Book> {
    //const newBook = new this.bookModel(bookDto);
    //return newBook.save();
    /*
    return this.books.push({
      ...bookDto,
      id: Date.now().toString(),
    });
    */
    return /* await*/ this.db.ref('books').push({bookDto});
  }
  async remove(id: string): /*any*/ Promise<Book> {
    //return this.books.filter((e) => e !== id);
    //return this.bookModel.findByIdAndRemove(id);
    return this.db.ref('books').child('id').remove();
  }
  async update(id: string, bookDto: UpdateBookDto): /*void*/ Promise<Book> {
    //..this.books.filter((el) => el[id] !== id), { [id]: bookDto }];
    //return this.bookModel.findByIdAndUpdate(id, bookDto, { new: true });
    const res = await  this.db.ref('books').child(id).update({
      book: bookDto
    });
    return res;
  }
}

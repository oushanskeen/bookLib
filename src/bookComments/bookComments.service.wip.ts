import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBookCommentDto } from './dto/create-bookComment.dto';
import { UpdateBookCommentDto } from './dto/update-bookComment.dto';
import { BookComment, BookCommentDocument } from './schemas/bookComment.schema';

@Injectable()
export class BookCommentsService {
  constructor(
    /*@InjectModel(BookComment.id)*/
    private bookCommentModel: Model<BookCommentDocument>,
  ) {}

  //private books = [];

  async getAll(): /*Array<string>*/ Promise<BookComment[]> {
    //return this.books;
    return this.bookCommentModel.find().exec();
  }
  async getOne(id: string): /*string*/ Promise<BookComment> {
    //return this.books.filter((e) => e === id)[0];
    return this.bookCommentModel.findById(id);
  }
  async create(
    bookCommentDto: CreateBookCommentDto,
  ): /*number*/ Promise<BookComment> {
    const newBookComment = new this.bookCommentModel(bookCommentDto);
    return newBookComment.save();
  }
  async remove(id: string): /*any*/ Promise<BookComment> {
    //return this.books.filter((e) => e !== id);
    return this.bookCommentModel.findByIdAndRemove(id);
  }
  async update(
    id: string,
    bookCommentDto: UpdateBookCommentDto,
  ): /*void*/ Promise<BookComment> {
    //..this.books.filter((el) => el[id] !== id), { [id]: bookDto }];
    return this.bookCommentModel.findByIdAndUpdate(id, bookCommentDto, {
      new: true,
    });
  }
}

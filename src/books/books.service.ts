import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
  private books = [];
  getAll() {
    return this.books;
  }
  getOne(id: string) {
    return this.books.filter((e) => e === id)[0];
  }
  create(bookDto: CreateBookDto) {
    return this.books.push({
      ...bookDto,
      id: Date.now().toString(),
    });
  }
  delete(id: string) {
    return this.books.filter((e) => e !== id);
  }
  update(id: string, bookDto: UpdateBookDto) {
    [...this.books.filter((el) => el[id] !== id), { [id]: bookDto }];
  }
}

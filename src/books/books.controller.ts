import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Put,
  Body,
} from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { BooksService } from './books.service';
import { Book } from './schemas/book.schema';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}
  @Get()
  getAll(): string[] /*Promise<Book[]>*/ {
    return this.booksService.getAll();
  }
  @Get(':id')
  getOne(@Param('id') id: string): string /*Promise<Book>*/ {
    return this.booksService.getOne(id);
  }
  @Post()
  create(@Body() createBookDto: CreateBookDto): number /*Promise<Book>*/ {
    return this.booksService.create(createBookDto);
  }
  @Delete('id')
  remove(@Param('id') id: string): string /*Promise<Book>*/ {
    return this.booksService.remove(id);
  }
  @Put(':id')
  update(
    @Body() updateBookDto: UpdateBookDto,
    @Param('id') id: string,
  ): void /*Promise<Book>*/ {
    return this.booksService.update(id, updateBookDto);
  }
}

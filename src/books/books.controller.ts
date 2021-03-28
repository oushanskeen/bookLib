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

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}
  @Get()
  getAll() {
    return this.booksService.getAll();
  }
  @Get(':id')
  getOne(@Param('id') id: string): string {
    return this.booksService.getOne(id);
  }
  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }
  @Delete('id')
  delete(@Param('id') id: string): Array<string> {
    return this.booksService.delete(id);
  }
  @Put(':id')
  update(
    @Body() updateBookDto: UpdateBookDto,
    @Param('id') id: string,
  ): string {
    return this.booksService.update(id, updateBookDto);
  }
}

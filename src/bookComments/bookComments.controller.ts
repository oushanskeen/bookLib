import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Put,
  Body,
} from '@nestjs/common';
import { CreateBookCommentDto } from './dto/create-bookComment.dto';
import { UpdateBookCommentDto } from './dto/update-bookComment.dto';
import { BookComment } from './schemas/bookComment.schema';
import { BookCommentsService } from './bookComments.service';

@Controller('bookComments')
export class BookCommentsController {
  constructor(private readonly bookCommentsService: BookCommentsService) {}
  @Get()
  getAll(): /*string[]*/ Promise<BookComment[]> {
    return this.bookCommentsService.getAll();
  }
  @Get(':id')
  getOne(@Param('id') id: string): /*string*/ Promise<BookComment> {
    return this.bookCommentsService.getOne(id);
  }
  @Post()
  create(
    @Body() createBookCommentDto: CreateBookCommentDto,
  ): /*number*/ Promise<BookComment> {
    return this.bookCommentsService.create(createBookCommentDto);
  }
  @Delete('id')
  remove(@Param('id') id: string): /*string*/ Promise<BookComment> {
    return this.bookCommentsService.remove(id);
  }
  @Put(':id')
  update(
    @Body() updateBookCommentDto: UpdateBookCommentDto,
    @Param('id') id: string,
  ): /*void*/ Promise<BookComment> {
    return this.bookCommentsService.update(id, updateBookCommentDto);
  }
}

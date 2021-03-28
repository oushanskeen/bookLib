import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Put,
  Body,
  //Redirect,
  //HttpCode
  //Header,
  Req,
  Res,
} from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { BooksService } from './books.service';
import { Request, Response } from 'express';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {
    
  }
  /*
  @Get()
  //@Redirect('https://google.com', 301)
  getAll(@Req() req: Request, @Res() res: Response): string {
    res.status(201).end('Poka');
    return 'getAll';
  }
  */
  @Get()
  getAll() {
    //return 'getAll';
    return this.booksService.getAll();
  }
  @Get(':id')
  getOne(@Param('id') id: string): string {
    //return 'getOne' + id;
    return this.booksService.getOne(id);
  }
  @Post()
  //HttpCode(HttpStatus.CREATED)
  //Header('Cache-Control','none')
  create(@Body() createBookDto: CreateBookDto) {
    //return 'post book';
    //return `Title: ${createBookDto.title} Price: ${createBookDto.price}`;
    return this.booksService.create(createBookDto);
  }
  @Delete('id')
  delete(@Param('id') id: string): string {
    return 'Remove' + id;
  }
  @Put(':id')
  update(
    @Body() updateBookDto: UpdateBookDto,
    @Param('id') id: string,
  ): string {
    return 'updated book with ' + id + ' and ' + JSON.stringify(updateBookDto);
  }
}

import { MongooseModule, getModelToken } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { BookCommentsService } from './bookComments.service';
import { BookCommentsController } from './bookComments.controller';
import { BookComment, BookCommentSchema } from './schemas/bookComment.schema';
import { BookCommentsGateway } from './bookComments.gateway';

@Module({
  providers: [
    BookCommentsService,
    {
      provide: getModelToken(BookComment.id),
      useValue: BookComment,
    },
    BookCommentsGateway,
  ],
  controllers: [BookCommentsController],
  //imports: [
  //¦ MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]),
  //],
})
export class BookCommentsModule {}

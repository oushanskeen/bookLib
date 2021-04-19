import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BookCommentDocument = BookComment & Document;

@Schema()
export class BookComment {
  @Prop()
  id: number;
  @Prop()
  bookId: number;
  @Prop()
  comment: string;
}

export const BookCommentSchema = SchemaFactory.createForClass(BookComment);

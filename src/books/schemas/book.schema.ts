import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BookDocument = Book & Document;

@Schema()
export class Book {
  @Prop()
  title: string;
  @Prop()
  price: number;
}

export const BookSchema = SchemaFactory.createForClass(Book);

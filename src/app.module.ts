import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { BooksController } from './books/books.controller';
//import { BooksService } from './books/books.service';
import { BooksModule } from './books/books.module';
import { MongooseModule } from '@nestjs/mongoose';
//import { TypeOrmModule } from '@nestjs/typeorm';
//import { User } from './user/user.entity';
//import {JwtModule} from '@nestjs/jwt';

@Module({
  imports: [
    BooksModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/nesttest'),
    // MongooseModule.forRoot(
    //
    //   `mongodb+srv://oushanskeen:${process.env.MONGO_PSWD}@library-database.1irwr.mongodb.net/test?retryWrites=true&w=majority`
    //  )
    /*
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [User],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: process.env.SECRET,
      signOptions:{expiresIn:'1d'}
    })
    */
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var app_controller_1 = require("./app.controller");
var app_service_1 = require("./app.service");
//import { BooksController } from './books/books.controller';
//import { BooksService } from './books/books.service';
var books_module_1 = require("./books/books.module");
var mongoose_1 = require("@nestjs/mongoose");
//import { TypeOrmModule } from '@nestjs/typeorm';
//import { User } from './user/user.entity';
//import {JwtModule} from '@nestjs/jwt';
var app_gateway_1 = require("./app.gateway");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        common_1.Module({
            imports: [
                books_module_1.BooksModule,
                mongoose_1.MongooseModule.forRoot('mongodb://127.0.0.1:27017/nesttest'),
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
            controllers: [app_controller_1.AppController],
            providers: [app_service_1.AppService, app_gateway_1.AppGateway]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

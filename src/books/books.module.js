"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BooksModule = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var common_1 = require("@nestjs/common");
var books_service_1 = require("./books.service");
var books_controller_1 = require("./books.controller");
var book_schema_1 = require("./schemas/book.schema");
var BooksModule = /** @class */ (function () {
    function BooksModule() {
    }
    BooksModule = __decorate([
        common_1.Module({
            providers: [
                books_service_1.BooksService,
                {
                    provide: mongoose_1.getModelToken(book_schema_1.Book.name),
                    useValue: book_schema_1.Book
                },
            ],
            controllers: [books_controller_1.BooksController],
            imports: [
                mongoose_1.MongooseModule.forFeature([{ name: book_schema_1.Book.name, schema: book_schema_1.BookSchema }]),
            ]
        })
    ], BooksModule);
    return BooksModule;
}());
exports.BooksModule = BooksModule;

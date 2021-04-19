"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.BooksController = void 0;
var common_1 = require("@nestjs/common");
var BooksController = /** @class */ (function () {
    function BooksController(booksService) {
        this.booksService = booksService;
    }
    BooksController.prototype.getAll = function () {
        return this.booksService.getAll();
    };
    BooksController.prototype.getOne = function (id) {
        return this.booksService.getOne(id);
    };
    BooksController.prototype.create = function (createBookDto) {
        return this.booksService.create(createBookDto);
    };
    BooksController.prototype.remove = function (id) {
        return this.booksService.remove(id);
    };
    BooksController.prototype.update = function (updateBookDto, id) {
        return this.booksService.update(id, updateBookDto);
    };
    __decorate([
        common_1.Get()
    ], BooksController.prototype, "getAll");
    __decorate([
        common_1.Get(':id'),
        __param(0, common_1.Param('id'))
    ], BooksController.prototype, "getOne");
    __decorate([
        common_1.Post(),
        __param(0, common_1.Body())
    ], BooksController.prototype, "create");
    __decorate([
        common_1.Delete('id'),
        __param(0, common_1.Param('id'))
    ], BooksController.prototype, "remove");
    __decorate([
        common_1.Put(':id'),
        __param(0, common_1.Body()),
        __param(1, common_1.Param('id'))
    ], BooksController.prototype, "update");
    BooksController = __decorate([
        common_1.Controller('books')
    ], BooksController);
    return BooksController;
}());
exports.BooksController = BooksController;

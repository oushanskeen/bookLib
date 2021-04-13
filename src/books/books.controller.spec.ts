import { Test, TestingModule } from '@nestjs/testing';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';

// WIP
describe('BooksController', () => {
  let booksController: BooksController;
  let booksService: BooksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BooksController],
      providers: [BooksService],
    }).compile();

    booksController = module.get<BooksController>(BooksController);
    booksService = module.get<BooksService>(BooksService);
  });
  describe('general define', () => {
    it('controller should be defined', () => {
      expect(booksController).toBeDefined();
    });
    it('service should be defined', () => {
      expect(booksService).toBeDefined();
    });
  });
  describe('findAll', () => {
    it('should return array of books', async () => {
      const result = ['test'];
      jest.spyOn(booksService, 'getAll').mockImplementation(() => result);
      expect(await booksController.getAll()).toBe(result);
    });
  });
});

import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { INestApplication } from '@nestjs/common';

class BooksServiceMock {
  getAll(id: string, name: string) {
    return [
      {
        id: '0',
        name: 'Lord Of The Flies',
      },
    ];
  }
}

describe('BooksServiceController', () => {
  //let app: TestingModule;
  let booksService: BooksService;
  let booksController: BooksController;

  beforeEach(async () => {
    /*
      booksService = new BooksService();
      booksController = new BooksController();
    */
    /*
    const BooksServiceProvider = {
      provide: BooksService,
      useClass: BooksServiceMock,
    };
    */
    const moduleRef = await Test.createTestingModule({
      providers: [BooksService /*, BooksServiceProvider*/],
      controllers: [BooksController],
    }).compile();

    //booksService = moduleRef.get<BooksService>(BooksService);
    //booksController = moduleRef.get<BooksController>(BooksController);
    booksService = await moduleRef.resolve<BooksService>(BooksService);
    booksController = await moduleRef.resolve<BooksController>(BooksController);
  });

  describe('get all', () => {
    it('get all', async () => {
      const expectedOutput = [{ id: '0', name: 'Lord Of The Flies' }];
      jest
        .spyOn(booksService, 'getAll')
        .mockImplementation(() => expectedOutput);
      expect(await booksController.getAll()).toEqual(expectedOutput);
    });
  });
});

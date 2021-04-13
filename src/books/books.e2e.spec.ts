import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { BooksModule } from '../../src/books/books.module';
import { BooksService } from '../../src/books/books.service';
import { INestApplication } from '@nestjs/common';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  const booksService = { getAll: () => ['test books'] };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [BooksModule],
    })
      .overrideProvider(BooksService)
      .useValue(booksService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it('/GET all books', async () => {
    return request(app.getHttpServer())
      .get('/books')
      .expect(200)
      .expect({ data: booksService.getAll() });
  });

  afterAll(async () => await app.close());
});

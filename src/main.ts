import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import {NestExpressApplication} from '@nestjs/platform-express';
import {join} from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname,'..', 'static'));

  app.use(cookieParser());
  app.enableCors({
    origin: process.env.ORIGIN,
    credentials: true,
  });
  await app.listen(3000);
}
bootstrap();

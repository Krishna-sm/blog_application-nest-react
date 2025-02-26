import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {config} from 'dotenv'
import { ValidationPipe } from '@nestjs/common';
config({
  path:'.env'
})
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const port = process.env.PORT ?? 3000
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(port,()=>{
    console.log(`the app is listen at http://localhost:${port}`)
  });
}
bootstrap();

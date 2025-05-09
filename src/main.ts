import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('Ejemplo de API')
  .setDescription('Descripción de la API')
  .setVersion('1.0')
  .addTag('ejemplo')
  .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

 app.enableCors({
  origin: [
    'https://events-decoration-front.vercel.app', 
    'http://localhost:3000', 
  ],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, 
});
  await app.listen(process.env.PORT ?? 5000);
}
bootstrap();

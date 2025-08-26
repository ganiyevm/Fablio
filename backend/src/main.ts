import 'reflect-metadata';
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'




async function bootstrap() {
const app = await NestFactory.create(AppModule)


// CORS – Vite uchun 5173 va production domain
app.enableCors({
origin: [
'http://localhost:5173',
'http://127.0.0.1:5173',
/https?:\/\/.*\.ngrok(-free)?\.app$/
],
credentials: true,
})


app.useGlobalPipes(
new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true })
)


await app.listen(process.env.PORT || 3000)
}
bootstrap()
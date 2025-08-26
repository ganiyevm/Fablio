import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { HttpModule } from '@nestjs/axios'
import { ContactModule } from './modules/contact/contact.module'


@Module({
imports: [
ConfigModule.forRoot({ isGlobal: true }),
HttpModule,
ContactModule,
],
})
export class AppModule {}
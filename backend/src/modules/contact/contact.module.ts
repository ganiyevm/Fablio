import { Module } from '@nestjs/common'
import { HttpModule } from '@nestjs/axios'
import { ConfigModule } from '@nestjs/config'
import { ContactController } from './contact.controller'
import { ContactService } from './contact.service'


@Module({
imports: [HttpModule, ConfigModule],
controllers: [ContactController],
providers: [ContactService],
})
export class ContactModule {}
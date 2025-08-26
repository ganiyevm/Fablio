import { Body, Controller, HttpCode, Post } from '@nestjs/common'
import { ContactService } from './contact.service'
import { ContactDto } from './dto/contact.dto'


@Controller('contact')
export class ContactController {
constructor(private readonly contact: ContactService) {}


@Post()
@HttpCode(200)
async handle(@Body() dto: ContactDto) {
return this.contact.handle(dto)
}
}
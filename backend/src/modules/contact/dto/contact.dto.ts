import { IsEmail, IsIn, IsOptional, IsString } from 'class-validator'


export class ContactDto {
@IsString() name!: string
@IsEmail() email!: string
@IsString() phone!: string
@IsString() company!: string
@IsString() subject!: string
@IsString() message!: string


@IsOptional()
@IsIn(['email', 'telegram', 'both'])
channel?: 'email' | 'telegram' | 'both'


@IsOptional()
agreeToData?: boolean
}
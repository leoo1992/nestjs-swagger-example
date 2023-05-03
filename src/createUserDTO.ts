/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDTO {
    @ApiProperty({ required: true, default: 'Leonardo Santos Custódio' })
    name: string;

    @ApiProperty({ required: true, default: 'santos-contato@hotmail.com.br' })
    email: string;
    
    @ApiProperty({ required: true, default: 'exemplo123' })
    password: string;
}

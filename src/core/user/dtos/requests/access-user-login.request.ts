import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class UserLoginRequest {
    @ApiProperty()
    @IsNotEmpty({ message: 'Usuário é obrigatório.' })
    username: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'Senha é obrigatória.' })
    password: string;
}

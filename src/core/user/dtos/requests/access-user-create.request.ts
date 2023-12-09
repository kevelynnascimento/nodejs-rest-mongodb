import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class UserCreateRequest {
  @ApiProperty()
  @IsNotEmpty({ message: 'Usuário é obrigatório.' })
  username: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Senha é obrigatória.' })
  password: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Name é obrigatório.' })
  name: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Email é obrigatório.' })
  email: string;
}
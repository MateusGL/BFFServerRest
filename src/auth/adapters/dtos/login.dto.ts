import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';


export class LoginDto {
  @ApiProperty({
    description: 'The email of the user',
    required: true,
    type: String,
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'The password of the user',
    required: true,
    type: String,
  })
  @IsNotEmpty()
  @MinLength(8)
  password: string;
}

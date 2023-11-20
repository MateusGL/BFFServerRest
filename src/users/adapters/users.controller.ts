import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from '../use-cases/createUsers.use-case';
import { CreateUserDto } from './dtos/create-user.dto';
import { CreateUserResponse, User } from '../core/users.interface';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('create')
  @ApiOperation({ summary: 'Create a user' })
  @ApiResponse({
    status: 201,
    description: 'The user has been successfully created.',
  })
  create(@Body() createUserDto: CreateUserDto): Promise<CreateUserResponse> {
    return this.usersService.execute(createUserDto);
  }
}

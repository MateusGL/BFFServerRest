import { Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { CreateUserResponse, User } from '../core/users.interface';
import { HttpService } from '@nestjs/axios';
import { CreateUserDto } from '../adapters/dtos/create-user.dto';
import { UseCase } from '../../shared/core/base/use-case';
import { UsersProvider } from '../core/users.provider.interface';

@Injectable()
export class UsersService implements UseCase<any> {
  constructor(private usersProvider: UsersProvider) {}

  execute(dto: CreateUserDto) {
    return this.usersProvider.createUser(dto);
  }
}

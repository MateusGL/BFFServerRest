import { HttpService } from '@nestjs/axios';
import { CreateUserResponse } from './users.interface';

export abstract class UsersProvider {
  abstract createUser(user): Promise<CreateUserResponse>;
}

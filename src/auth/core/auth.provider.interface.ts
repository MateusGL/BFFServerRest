import { HttpService } from '@nestjs/axios';
import { LoginResponse } from './auth.interface';

export abstract class AuthProvider {
  abstract login(user): Promise<LoginResponse>;
}

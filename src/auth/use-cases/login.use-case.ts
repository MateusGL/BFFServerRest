import { Injectable } from '@nestjs/common';
import { LoginDto } from '../adapters/dtos/login.dto';
import { ServerRest } from 'src/shared/providers/serverRest.interface';
import { AuthProvider } from '../core/auth.provider.interface';
import { UseCase } from 'src/shared/core/base/use-case';

@Injectable()
export class LoginUseCase implements UseCase<LoginDto> {
  constructor(private authProvider: AuthProvider) {}

  async execute(dto: LoginDto) {
    const loginRequest: ServerRest.LoginRequest = {
      email: dto.email,
      password: dto.password,
    };

    const response = await this.authProvider.login(loginRequest);
    return response;
  }
}

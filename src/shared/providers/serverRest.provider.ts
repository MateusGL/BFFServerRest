import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { ServerRest } from './serverRest.interface';
import { UsersProvider } from '../../users/core/users.provider.interface';
import { AxiosResponse } from 'axios';
import { AuthProvider } from 'src/auth/core/auth.provider.interface';
import { CreateUserDto } from 'src/users/adapters/dtos/create-user.dto';
import { CreateUserResponse } from 'src/users/core/users.interface';
import { LoginResponse } from 'src/auth/core/auth.interface';

@Injectable()
export class ServerRestProvider implements UsersProvider, AuthProvider {
  private serverRestBaseUrl: string;
  constructor(protected httpService: HttpService) {
    this.serverRestBaseUrl = process.env.PROVIDER_SERVER_REST_BASE_URL;
  }

  getUsers() {
    return this.httpService.get(`${this.serverRestBaseUrl}/usuarios`);
  }

  async createUser(user: CreateUserDto): Promise<CreateUserResponse> {
    const paylod: ServerRest.CreateUserRequest = {
      nome: user.name,
      email: user.email,
      password: user.password,
      administrador: user.administrador ? 'true' : 'false',
    };

    const { data }: AxiosResponse<ServerRest.CreateUserResponse> =
      await firstValueFrom(
        this.httpService.post(`${this.serverRestBaseUrl}/usuarios`, paylod),
      );
    return { message: data.message };
  }

  async login(user: ServerRest.LoginRequest): Promise<LoginResponse> {
    const response: AxiosResponse<ServerRest.LoginResponse> =
      await firstValueFrom(
        this.httpService.post(`${this.serverRestBaseUrl}/login`, user),
      );
    const { authorization } = response.data;
    return { authorization };
  }
}

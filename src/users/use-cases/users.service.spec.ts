import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './createUsers.use-case';
import { User } from '../core/users.interface';
import { HttpModule, HttpService } from '@nestjs/axios';
import { firstValueFrom, of } from 'rxjs';
import { UsersProvider } from '../core/users.provider.interface';
import { ServerRestProvider } from '../../shared/providers/serverRest.provider';
import { CreateUserDto } from '../adapters/dtos/create-user.dto';
import { ServerRest } from 'src/shared/providers/serverRest.interface';
describe('UsersService', () => {
  let service: UsersService;
  let httpService: HttpService;

  beforeEach(async () => {
    process.env.PROVIDER_SERVER_REST_BASE_URL = 'https://serverest.dev';
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [
        UsersService,
        {
          provide: UsersProvider,
          useClass: ServerRestProvider,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    httpService = module.get<HttpService>(HttpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a user', async () => {
    const createUserDTO: CreateUserDto = {
      name: 'Test User',
      email: 'test@example.com',
      password: 'password',
      administrador: true,
    };

    const serverRestPaylod: ServerRest.CreateUserRequest = {
      nome: createUserDTO.name,
      email: createUserDTO.email,
      password: createUserDTO.password,
      administrador: createUserDTO.administrador ? 'true' : 'false',
    };

    const response: any = {
      data: { message: 'Created' },
      status: 200,
      statusText: 'OK',
      headers: {},
    };

    jest.spyOn(httpService, 'post').mockImplementationOnce(() => of(response));

    const result = await service.execute(createUserDTO);

    expect(result).toEqual(response.data);
    expect(httpService.post).toHaveBeenCalledWith(
      'https://serverest.dev/usuarios',
      serverRestPaylod,
    );
  });
});

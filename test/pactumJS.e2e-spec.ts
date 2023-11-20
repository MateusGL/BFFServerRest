import { LoginDto } from 'src/auth/adapters/dtos/login.dto';
import { CreateUserDto } from '../src/users/adapters/dtos/create-user.dto';
import { spec, e2e } from 'pactum';

const apiUrl = process.env.API_URL || 'http://localhost:3000';
const DIGIT = Math.floor(Math.random() * 100);

describe('Contract tests for user creation and login', () => {
  const createUserDto = new CreateUserDto();
  createUserDto.name = 'Test User';
  createUserDto.email = `test${DIGIT}@example.com`;
  createUserDto.password = 'senha123';
  createUserDto.administrador = true;

  const loginDto = new LoginDto();
  loginDto.email = createUserDto.email;
  loginDto.password = createUserDto.password;

  let testCase = e2e('Add User');

  it('create user', async () => {
    await testCase
      .step('Post User')
      .spec()
      .post(`${apiUrl}/users/create`)
      .withBody(createUserDto)
      .expectStatus(201);
    // @TODO: .clean()
  });

  it('login user', async () => {
    await testCase
      .step('post login')
      .spec()
      .post(`${apiUrl}/auth/login`)
      .withBody(loginDto)
      .expectStatus(201);
  });
});

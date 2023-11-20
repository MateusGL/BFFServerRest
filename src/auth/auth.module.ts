import { Module } from '@nestjs/common';
import { ServerRestProvider } from '../shared/providers/serverRest.provider';
import { HttpModule } from '@nestjs/axios';
import { AuthController } from './adapters/auth.controller';
import { AuthProvider } from './core/auth.provider.interface';
import { LoginUseCase } from './use-cases/login.use-case';

@Module({
  imports: [HttpModule],
  controllers: [AuthController],
  providers: [
    {
      provide: AuthProvider,
      useClass: ServerRestProvider,
    },
    LoginUseCase,
  ],
})
export class AuthModule {}

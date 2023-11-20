import { Module } from '@nestjs/common';
import { UsersController } from './adapters/users.controller';
import { UsersService } from './use-cases/createUsers.use-case';
import { UsersProvider } from './core/users.provider.interface';
import { ServerRestProvider } from '../shared/providers/serverRest.provider';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [UsersController],
  providers: [
    {
      provide: UsersProvider,
      useClass: ServerRestProvider,
    },
    UsersService,
  ],
})
export class UsersModule {}

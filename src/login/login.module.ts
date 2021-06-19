import { Module } from '@nestjs/common';
import { UsersModule } from '../user/user.module';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';

@Module({
    imports: [UsersModule],
    controllers: [LoginController],
    providers: [LoginService],
})

export class LoginModule {}
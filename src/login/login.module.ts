import { Module } from '@nestjs/common';
import { CommonModule } from '../common/common.module';
import { UsersModule } from '../user/user.module';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';

@Module({
    imports: [UsersModule, CommonModule],
    controllers: [LoginController],
    providers: [LoginService],
})

export class LoginModule {}
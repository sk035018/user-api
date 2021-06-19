import { Module } from '@nestjs/common';
import { UsersModule } from '../user/user.module';
import { SignupController } from './signup.controller';
import { SignupSevice } from './signup.service';

@Module({
    imports: [UsersModule],
    controllers: [SignupController],
    providers: [SignupSevice]
})

export class SignupModule {}
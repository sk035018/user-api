import { Module } from '@nestjs/common';
import { CommonModule } from 'src/common/common.module';
import { UsersModule } from '../user/user.module';
import { SignupController } from './signup.controller';
import { SignupSevice } from './signup.service';


@Module({
    imports: [UsersModule, CommonModule],
    controllers: [SignupController],
    providers: [SignupSevice]
})

export class SignupModule {}
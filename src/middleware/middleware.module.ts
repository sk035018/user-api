import { Module } from '@nestjs/common';
import { AuthMiddleware } from './auth.middleware';
import { UsersModule } from '../user/user.module';
import { CommonModule } from '../common/common.module';

@Module({
    imports: [UsersModule, CommonModule],
    providers: [AuthMiddleware]
})

export class MiddlewareModule {}
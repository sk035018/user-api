import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from './user.entity';
import { AuthMiddleware } from '../middleware/auth.middleware';
import { CommonModule } from 'src/common/common.module';

@Module({
    imports: [SequelizeModule.forFeature([User]), CommonModule],
    controllers: [UserController],
    providers: [UserService],
    exports: [SequelizeModule, UserService]
})

export class UsersModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
        .apply(AuthMiddleware)
        .forRoutes('users')
    }
}
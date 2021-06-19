import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from './user.entity';

@Module({
    imports: [SequelizeModule.forFeature([User])],
    controllers: [UserController],
    providers: [UserService],
    exports: [SequelizeModule, UserService]
})

export class UsersModule {}
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './user/user.module';
import { LoginModule } from './login/login.module';
import { SignupModule } from './signup/signup.module';
import { CommonModule } from './common/common.module';
import { MiddlewareModule } from './middleware/middleware.module';

const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME } = process.env;

@Module({
  imports: [
    SequelizeModule.forRoot({
            dialect: 'postgres',
            host: DB_HOST,
            port: Number(DB_PORT),
            username: DB_USERNAME,
            password: DB_PASSWORD,
            database: DB_NAME,
            autoLoadModels: true,
            synchronize: true,
        }),
      UsersModule,
      LoginModule,
      SignupModule,
      CommonModule,
      MiddlewareModule
    ]
})
export class AppModule {}

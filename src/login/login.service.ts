import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { LoginCredentials } from './login.interface';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class LoginService {
    constructor(private userService: UserService) {}

    async login(loginCredentials: LoginCredentials): Promise< string | boolean > {
        const user = await this.userService.findByEmail(loginCredentials.email);

        if(user) {
            const matchResult = await bcrypt.compare(
                loginCredentials.password,
                user.password
            );
            if(matchResult) {
                const token = jwt.sign({id: user.id, email: user.email}, process.env.SECRET_KEY);
                return token;
            }
            return false;
        }
    }
}
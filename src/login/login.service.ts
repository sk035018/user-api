import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { LoginCredentials } from './login.interface';
import * as bcrypt from 'bcrypt';

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
                return "Logged In Successfully !!!"
            }
            return false;
        }
    }
}
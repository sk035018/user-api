import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { LoginCredentials } from './login.interface';
import { Bcrypt } from '../common/bcrypt';
import { JsonwebToken } from '../common/jwt';

@Injectable()
export class LoginService {
    constructor(
        private userService: UserService,
        private bcrypt: Bcrypt,
        private jsonwebToken: JsonwebToken
    ) {}

    async login(loginCredentials: LoginCredentials): Promise< string | boolean > {
        const user = await this.userService.findByEmail(loginCredentials.email);

        if(user) {
            const matchResult = await this.bcrypt.compare(
                loginCredentials.password,
                user.password
            );
            if(matchResult) {
                const token = this.jsonwebToken.createToken(
                    {id: user.id, email: user.email});
                return token;
            }
            return false;
        }
    }
}
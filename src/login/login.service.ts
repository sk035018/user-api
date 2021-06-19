import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { LoginCredentials } from './login.interface';

@Injectable()
export class LoginService {
    constructor(private userService: UserService) {}

    async login(loginCredentials: LoginCredentials): Promise< string | boolean > {
        const user = await this.userService.findByEmail(loginCredentials.email);
        
        if(user && user.password === loginCredentials.password) {
            return "Logged In Successfully !!!"
        }

        return false;
    }
}
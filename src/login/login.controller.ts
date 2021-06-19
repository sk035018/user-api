import { Controller, Post, Body } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
    constructor(private loginService: LoginService) {}

    @Post()
    async login(@Body() body): Promise< string > {
        const serviceResponse = await this.loginService.login(body);
        if(serviceResponse) {
            return String(serviceResponse);
        }
        return `You are not what you told !!!`
    }
}
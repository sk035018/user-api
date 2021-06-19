import { Controller, Post, Body } from '@nestjs/common';
import { SignupSevice } from './signup.service';

@Controller('signup')
export class SignupController {
    constructor(private signupService: SignupSevice) {}

    @Post()
    async create(@Body() body): Promise< string > {
        return await this.signupService.signup(body);
    }
}
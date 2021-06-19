import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { LoginService } from './login.service';
import { Response } from 'express';

@Controller('login')
export class LoginController {
    constructor(private loginService: LoginService) {}

    @Post()
    async login(@Body() body, @Res() res: Response): Promise< void > {
        const serviceResponse = await this.loginService.login(body);
        if(serviceResponse) {
            res.status(HttpStatus.OK).send(serviceResponse);
        }
        res.status(HttpStatus.UNAUTHORIZED).send(`You are not what you told !!!`);
    }
}
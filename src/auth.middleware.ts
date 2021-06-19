import { Injectable, NestMiddleware } from '@nestjs/common';
import { Response, NextFunction } from 'express';
import { UserService } from './user/user.service';
import * as jwt from 'jsonwebtoken';
import { CustomRequest as Request } from './customResponse';
import { HttpStatus } from '@nestjs/common';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    constructor(private userService: UserService) {}
    async use(req: Request, res: Response, next: NextFunction) {
        try {
            const token = req.header('authorization').split(' ')[1];
            const payload = jwt.verify(token, process.env.SECRET_KEY);
            const user = await this.userService.findById(payload.id);
            req.user = user;
            next();
        } catch (error) {
            res.status(HttpStatus.FORBIDDEN).send(`Access Denied !!!`)
        }
    }
}
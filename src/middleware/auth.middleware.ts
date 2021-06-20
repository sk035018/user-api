import { Injectable, NestMiddleware, HttpStatus } from '@nestjs/common';
import { Response, NextFunction } from 'express';
import { UserService } from '../user/user.service';
import { JsonwebToken } from '../common/jwt';
import { CustomRequest as Request } from '../common/customResponse';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    constructor(
        private userService: UserService,
        private jsonwebToken: JsonwebToken    
    ) {}
    async use(req: Request, res: Response, next: NextFunction) {
        try {
            const token = req.header('authorization').split(' ')[1];
            const payload = this.jsonwebToken.parseToken(token);
            const user = await this.userService.findById(payload.id);
            req.user = user;
            next();
        } catch (error) {
            res.status(HttpStatus.FORBIDDEN).send(`Access Denied !!!`)
        }
    }
}
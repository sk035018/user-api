import { Request } from 'express';
import { UserAttributes } from './user/user.interface';

export interface CustomRequest extends Request {
    user?: UserAttributes
}
import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { UserAttributes } from '../user/user.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class SignupSevice {
    constructor(private userService: UserService) {}

    async signup(userAttributes: UserAttributes): Promise< string > {
        const hashedPassword = await bcrypt.hash(userAttributes.password, 10);
        userAttributes.password = hashedPassword;
        await this.userService.create(userAttributes);
        return `Successfully joined our community !!!`
    }
}
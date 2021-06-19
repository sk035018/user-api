import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { UserAttributes } from '../user/user.interface';

@Injectable()
export class SignupSevice {
    constructor(private userService: UserService) {}

    async signup(userAttributes: UserAttributes): Promise< string > {
        await this.userService.create(userAttributes);
        return `Successfully joined our community !!!`
    }
}
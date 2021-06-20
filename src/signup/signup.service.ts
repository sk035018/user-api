import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { UserAttributes } from '../user/user.interface';
import { Bcrypt } from '../common/bcrypt';

@Injectable()
export class SignupSevice {
    constructor(
        private userService: UserService,
        private bcrypt: Bcrypt    
    ) {}

    async signup(userAttributes: UserAttributes): Promise< string > {
        const hashedPassword = await this.bcrypt.hash(userAttributes.password);
        userAttributes.password = hashedPassword;
        await this.userService.create(userAttributes);
        return `Successfully joined our community !!!`
    }
}
import { Controller, Get, Put, Post, Delete, Param, Query, Body} from '@nestjs/common';
import { UserService } from './user.service';
import { UserAttributes } from './user.interface';

@Controller('users')
export class UserController {
    constructor(private userService: UserService) {}

    @Get()
    async findAll(@Query() query): Promise< UserAttributes []> {
        if(Object.keys(query).length) {
            return await this.userService.findByQuery(query);
        }
        return await this.userService.findAll();
    }

    @Get(':userId')
    async findById(@Param('userId') userId): Promise< UserAttributes > {
        return await this.userService.findById(userId);
    }

    @Put()
    async put(@Body() body): Promise< UserAttributes > {
        return await this.userService.put(body);
    }

    @Delete(':userId')
    async delete(@Param('userId') userId): Promise< number > {
        return await this.userService.delete(userId);
    }
}
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.entity';
import { UserAttributes } from './user.interface';
import { filterAttributes } from './user.utility';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User)
        private userModel: typeof User,
    ) {}

    async findAll(): Promise< User [] > {
        return this.userModel.findAll(filterAttributes);
    }

    async findById(id: number): Promise< User > {
        return this.userModel.findOne({ where: { id }, ...filterAttributes});
    }

    async findByEmail(email: string): Promise< User > {
        return this.userModel.findOne({ where: { email }});
    }

    async findByQuery(options: any): Promise< UserAttributes [] > {
        return this.userModel.findAll({...options, ...filterAttributes});
    }

    async create(userAttributes: UserAttributes): Promise< User > {
        return await this.userModel.create(userAttributes);
    }

    async put(userAttributes: UserAttributes): Promise< User > {
        const user = await this.findById(userAttributes.id);
        Object.keys(userAttributes).forEach(key => user[key] = userAttributes[key]);
        return await user.save();
    }

    async delete(id: number): Promise< number > {
        return await this.userModel.destroy({ where: { id }});
    }
}
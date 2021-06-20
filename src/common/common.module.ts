import { Module } from '@nestjs/common';
import { Bcrypt } from './bcrypt';
import { JsonwebToken } from './jwt';

@Module({
    providers: [Bcrypt, JsonwebToken],
    exports: [Bcrypt, JsonwebToken]
})

export class CommonModule {}
import { v4 as uuidv4 } from 'uuid';

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<UserEntity>;

@Schema({ collection: 'user' })
export class UserEntity {
    @Prop()
    public id: string;

    @Prop()
    public username: string;

    @Prop()
    public password: string;

    @Prop()
    public name: string;

    @Prop()
    public email: string;

    constructor(
        username: string,
        password: string,
        name: string,
        email: string
    ) {
        this.id = uuidv4();
        this.username = username;
        this.password = password;
        this.name = name;
        this.email = email;
    }
}

export const UserSchema = SchemaFactory.createForClass(UserEntity);
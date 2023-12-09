import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/shared/database/base.repository';
import { UserEntity } from '../entities/user.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserRepository extends BaseRepository {
    constructor(
        @InjectModel(UserEntity.name) private readonly model: Model<UserEntity>
    ) {
        super();
    }

    public async findAll(): Promise<UserEntity[]> {
        const users = await this.model.find().exec();
        return users;
    }

    public async findByUsername(username: string): Promise<UserEntity> {
        const user = await this.model.findOne({ username }).exec();
        return user;
    }

    public async insert(entity: UserEntity): Promise<void> {
        const created = new this.model(entity);
        await created.save();
    }

    public async update(entity: UserEntity): Promise<void> {
        await this.model.replaceOne(entity);
    }

    public async delete(id: string): Promise<void> {
        await this.model.deleteOne({ id });
    }
}

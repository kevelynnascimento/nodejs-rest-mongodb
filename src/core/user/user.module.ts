import { Module } from '@nestjs/common';
import { AccessUserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { UserRepository } from './repositories/user.repository';
import { SharedModule } from 'src/shared/shared.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserEntity, UserSchema } from './entities/user.entity';

@Module({
    imports: [
        SharedModule,
        MongooseModule.forFeature([{ name: UserEntity.name, schema: UserSchema }])
    ],
    controllers: [AccessUserController],
    providers: [
        UserService,
        UserRepository
    ]
})
export class UserModule { }

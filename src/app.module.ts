import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Configuration } from './configs/env.config';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [Configuration.envs],
      isGlobal: true,
      cache: true
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({
        uri: config.get('database.mongoDbUri')
      }),
      inject: [ConfigService],
    }),
    CoreModule,
    SharedModule
  ]
})
export class AppModule { }

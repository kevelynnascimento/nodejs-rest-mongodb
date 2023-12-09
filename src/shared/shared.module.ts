import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { KafkaModule } from './kafka/kafka.module';

@Module({
  imports: [AuthModule, KafkaModule],
  exports: [AuthModule]
})
export class SharedModule { }

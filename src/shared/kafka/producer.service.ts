import { EventHubProducerClient } from '@azure/event-hubs';
import { Injectable } from '@nestjs/common';
import ProducerConfigModel from './models/producer-config.model';

@Injectable()
export default class ProducerService {
    public async publish(message: string, config: ProducerConfigModel): Promise<void> {
        const { connectionString, eventHubName } = config;
        const producer = new EventHubProducerClient(connectionString, eventHubName);

        const batch = await producer.createBatch();
        batch.tryAdd({ body: message });

        await producer.sendBatch(batch);

        await producer.close();
    }
}

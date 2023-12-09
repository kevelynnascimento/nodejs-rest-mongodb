import { EventHubConsumerClient, MessagingError, earliestEventPosition } from "@azure/event-hubs";
import ConsumerConfigModel from "./models/consumer-config.model";
import ConsumerResultModel from "./models/consumer-result.model";

export abstract class ConsumerHandler<T> {

    constructor(config: ConsumerConfigModel) {
        this.start(config);
    }

    public abstract handle(message: T): Promise<void>

    public abstract handleError(error: Error | MessagingError): Promise<void>

    private async start(config: ConsumerConfigModel): Promise<ConsumerResultModel> {
        const { consumerGroup, connectionString, eventHubName } = config;

        const consumerClient = new EventHubConsumerClient(consumerGroup, connectionString, eventHubName);

        const subscription = consumerClient.subscribe({
            processInitialize: async (context) => {

                console.log(`${eventHubName} was initialized`);
            },
            processEvents: async (events, context) => {
                if (events.length === 0) {
                    return;
                }

                for (const event of events) {
                    await this.handle(event.body as T);
                    await context.updateCheckpoint(event);
                }
            },
            processError: async (err, context) => {
                this.handleError(err);
            }
        },
            // { startPosition: earliestEventPosition } // When I'm using the checkpoint(bucket) to save the offset, I need to turn it on. 
            //At the moment, we decided to read the latest offset by event hub
            { startPosition: { offset: '@latest' } }
        );

        return { subscription, consumerClient };
    }
}

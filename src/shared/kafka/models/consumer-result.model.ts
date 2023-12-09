import { EventHubConsumerClient, Subscription } from "@azure/event-hubs";

export default interface ConsumerResultModel {
    subscription: Subscription;
    consumerClient: EventHubConsumerClient;
}
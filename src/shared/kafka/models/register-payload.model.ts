export default interface RegisterPayloadModel {
    eventHubName: string;
    handler: (message: string) => Promise<void>;
}
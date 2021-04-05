export type MessageType = "json"|"text"|"binary"|"details";
export type StatusType = "offline"|"connecting"|"online"|"upgrade"|"other";

export interface MonitorHisotry{
    logs: MessageLog[],
    serviceName: string,
    serviceStatus: StatusType,
    statusInfo?: string,
}

export interface MessageLog{
    owner: boolean,
    type: MessageType,
    fromText: () => string,
    fromBlob?:() => Blob,
    onlyBlob?: boolean,
    timestamp: Date,
    details?: {[key: string]: string},
    highlights?: string[]
}
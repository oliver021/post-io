import * as signalr from "@microsoft/signalr";

export function create(url: string, recconect?:number[]){
    const connection = new signalr.HubConnectionBuilder();
    connection.withUrl(url);
    if(recconect){
        connection.withAutomaticReconnect(recconect);
    }

    return connection.build();
}

export function invoke(hub: signalr.HubConnection, method: string, args: any[]){
    hub.invoke(method, args)
}
export function track(hub: signalr.HubConnection, method: string, tracker: (args: any[]) => void){
    hub.on(method, tracker);
}

export function forget(hub: signalr.HubConnection, method: string){
    hub.off(method);
}

export function reconnecting(hub: signalr.HubConnection, _f: (err: Error|undefined) => void){
    hub.onreconnecting(_f);
}

export function reconnected(hub: signalr.HubConnection, _f: (id: string|undefined) => void){
    hub.onreconnected(_f);
}

export function whenClosed(hub: signalr.HubConnection, _f:  (err: Error|undefined) => void){
    hub.onclose(_f);
}
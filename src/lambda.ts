import { Handler } from 'aws-lambda';
import { Server } from 'http';
import { bootstrap as createApp } from './main';
import { createServer, proxy } from 'aws-serverless-express';

let cachedServer: Server;

async function bootstrapServer(): Promise<Server> {
    if (!cachedServer) {
        const expressApp = (await createApp()).getHttpAdapter().getInstance();
        cachedServer = createServer(expressApp);
    }
    return cachedServer;
}

export const handler = async (event, context) => {
    const server = await bootstrapServer();
    return proxy(server, event, context, 'PROMISE').promise;
};

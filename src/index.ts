import { Readable } from 'stream';

const errorPrefix = '[streamToString]';

export const streamToString = async (stream: Readable): Promise<string> => {
    if(!stream) {
        throw new Error(`${errorPrefix} Missing stream prop from the argument.`)
    }

    const chunks: Buffer[] = [];

    return new Promise((resolve, reject) => {
        stream.on('data', (chunk: Buffer) => {
            chunks.push(chunk);
        });
        stream.on('error', (err: Error) => {
            reject(err)
        });
        stream.on('end', () => {
            resolve(Buffer.concat(chunks).toString('utf8'));
        });
    })
}
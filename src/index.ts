import { Readable } from 'stream';



export const streamToString = async (stream: Readable): Promise<string> => {
    const errorPrefix = '[streamToString]';

    if(!stream) {
        throw new Error(`${errorPrefix} Missing stream prop from the argument.`)
    }

    const chunks: Buffer[] | Uint8Array[] = [];

    return new Promise((resolve, reject) => {
        stream.on('data', (chunk: Buffer & string) => {
            chunks.push(chunk);
        });
        stream.on('error', (err: Error) => {
            reject(`${errorPrefix} ${err.message}`)
        });
        stream.on('end', () => {
            try {
                resolve(Buffer.concat(chunks).toString('utf8'));
            } catch {
                resolve((chunks as unknown as string[]).join(''));
            }            
        });
    })
}
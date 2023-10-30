import * as cut from './index';
import { Readable } from 'stream';

describe('nodifier stream tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should return a string if stream readable is provided', async () => {
        const mockReadable = Readable.from('jest unit test');
        const mockByteReadable = Readable.from('jest unit test').setEncoding('base64');

        const result1 = await cut.streamToString(mockReadable);
        const result2 = await cut.streamToString(mockByteReadable);

        expect(result1).toBe('jest unit test');
        expect(result2).toBe('jest unit test');
    });
})
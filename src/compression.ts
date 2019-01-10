/**
 * @module Compression
 */

/**
 * Ignore
 */
import pako from 'pako';

/**
 * Compress an object as json to base64 encoded string.
 * @param json Object to compress
 * @returns Compressed string
 */
export function compress(json: object): string {
    const string = JSON.stringify(json);
    const deflated = pako.gzip(string)
    return Buffer.from(deflated).toString('base64');
}

/**
 * Decompress a base64 encoded string to an object.
 * @param str String to decompress
 * @returns Decompressed json
 */
export function decompress<T extends object>(str: string): T {
    const data = pako.ungzip(new Buffer(str, 'base64'), { to: 'string' });
    return JSON.parse(data);
}

import path from 'path';
import { fileURLToPath } from 'url';
import { pipeline } from 'stream';
import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';

const dirName = path.dirname(fileURLToPath(import.meta.url));
const pathFile = path.join(dirName, 'files', 'fileToCompress.txt');
const pathArchiveFile = path.join(dirName, 'files', 'archive.gz');

const compress = async () => {
    const zip = createGzip();
    const source = createReadStream(pathFile);
    const destination = createWriteStream(pathArchiveFile);

    pipeline(source, zip, destination, (err) => {
        if (err) {
            console.error(err.message);
        }
    });
};

await compress();
import path from 'path';
import { fileURLToPath } from 'url';
import { pipeline } from 'stream';
import { createGunzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';

const dirName = path.dirname(fileURLToPath(import.meta.url));
const pathFile = path.join(dirName, 'files', 'fileToCompress.txt');
const pathArchiveFile = path.join(dirName, 'files', 'archive.gz');

const decompress = async () => {
    const zip = createGunzip();
    const source = createReadStream(pathArchiveFile);
    const destination = createWriteStream(pathFile);

    pipeline(source, zip, destination, (err) => {
        if (err) {
            console.error(err.message);
        }
    });
};

await decompress();
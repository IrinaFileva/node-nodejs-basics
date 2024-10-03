import path from 'path';
import { stdout } from 'process';
import { createReadStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pathFile = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {

    const readText = createReadStream(pathFile);
    readText.on('data',(details) => stdout.write(details + "\n"))
};

await read();
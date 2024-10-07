import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const errorMessage = 'FS operation failed';
const pathFile = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
    try {
        await fs.promises.access(pathFile).catch(() => { throw new Error(errorMessage) });
        const contents = await fs.promises.readFile(pathFile, { encoding: 'utf8' });
        console.log(contents);
    } catch(err) {
        console.error(err.message);
    }

};

await read();
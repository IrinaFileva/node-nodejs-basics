import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const { stdin } = process;

const __dirname = dirname(fileURLToPath(import.meta.url));
const pathFile = path.join(__dirname, 'files', 'fileToWrite.txt');
const writeableStream = fs.createWriteStream(pathFile);

const write = async () => {
    stdin.pipe(writeableStream);
};

await write();
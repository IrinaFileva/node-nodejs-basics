import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const errorMessage = 'FS operation failed';
const filePath = path.join(__dirname, 'files', 'fileToRemove.txt');

const remove = async () => {
    try {
        await fs.promises.access(filePath).catch(() => { throw new Error(errorMessage) });
        await fs.promises.rm(filePath);
    } catch(err) {
        console.error(err.message);
    }
};

await remove();
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const errorMessage = 'FS operation failed';
const startFilePath = path.join(__dirname, 'files', 'wrongFilename.txt');
const modifiedFilePath = path.join(__dirname, 'files', 'properFilename.md');

const rename = async () => {
    try {
        await fs.promises.access(startFilePath).catch(() => { throw new Error(errorMessage) });
        await fs.promises.access(modifiedFilePath).then(() => { throw new Error(errorMessage) })
            .catch(async() => {
                await fs.promises.rename(startFilePath, modifiedFilePath);
            });
        } catch(err) {
        console.error(err.message);
    }
};

await rename();
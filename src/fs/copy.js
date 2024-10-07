import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const errorMessage = 'FS operation failed';
const pathFolder = path.join(__dirname, 'files');
const pathCopyFolder = path.join(__dirname, 'files_copy');

const copy = async () => {
    try {
        await fs.promises.cp(
            pathFolder,
            pathCopyFolder,
            {
                recursive: true,
                errorOnExist: true,
                force: false
            }).catch(() => { throw new Error(errorMessage)});
    } catch(err) {
        console.error(err.message);
    }
};

await copy();

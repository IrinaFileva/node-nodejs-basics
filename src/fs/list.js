import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const errorMessage = 'FS operation failed';
const pathFolder = path.join(__dirname, 'files');

const list = async () => {
    try {
        const files = await fs.promises.readdir(pathFolder, { withFileTypes: true })
            .catch(() => { throw new Error(errorMessage) });
        const filesName = files.map((file) =>  { return file.name });
        console.log(filesName)
    } catch(err) {
        console.error(err.message)
    }
};

await list();
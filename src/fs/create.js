import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const content = 'I am fresh and young';
const errorMessage = 'FS operation failed';
const pathNewFile = path.join(__dirname, 'files', 'fresh.txt');

const create = async () => {
    try {
        await fs.promises.access(pathNewFile)
        throw new Error(errorMessage)
    } catch (err) {
        if (err.code === 'ENOENT') {
            await fs.promises.writeFile(pathNewFile, content);
        } else {
            console.error(err.message);
        }
    }
};

await create();
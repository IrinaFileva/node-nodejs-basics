import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const { createHash } = await import('crypto');

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

const hash = createHash('sha256');
const input = fs.createReadStream(filePath);

const calculateHash = async () => {
   const data = input.pipe(hash).setEncoding('hex');
   data.on('data', (details) => console.log(details));
};

await calculateHash();
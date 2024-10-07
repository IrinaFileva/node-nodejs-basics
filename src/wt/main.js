import path from 'path';
import { fileURLToPath } from 'url';
import { Worker } from 'worker_threads';
import { cpus } from 'os';

const __dirName = path.dirname(fileURLToPath(import.meta.url));
const pathToWorker = path.join(__dirName, 'worker.js')

const performCalculations = async () => {
    const streams = Array(cpus().length);

    for (let index = 0; index < streams.length; index++) {
        streams[index] = new Promise((res) => {
            const worker = new Worker(pathToWorker, { workerData: 10 + index })
            worker.on('message', (data) => res({ status: 'resolved', data }))
            worker.on('error', () => res({ status: 'error', data: null }))
        })
    }

    const result = await Promise.all(streams);
    console.log(result);
};

await performCalculations();
import path from 'path';
import { fileURLToPath } from 'url';
import { fork } from 'child_process';
const { stdout, stdin } = process;


const __dirName = path.dirname(fileURLToPath(import.meta.url));
const pathFile = path.join(__dirName, 'files', 'script.js');

const spawnChildProcess = async (args) => {
    const child = fork(pathFile, args, { silent: true });

    stdin.pipe(child.stdin);
    child.stdout.pipe(stdout);
};


spawnChildProcess(['arg', 'nextArg', 'nextArg1']);

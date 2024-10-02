import { argv } from 'node:process';

const parseArgs = () => {
    const result = [];
    argv.forEach((arg, index) => {
        if (arg.startsWith('--')) {
            result.push(`${arg.replace('--', '')} is ${argv[index + 1]}`)
        }
    })
    console.log(result.join(', '));
};

parseArgs();
import { stdin, stdout } from 'process';
import { Transform } from 'stream';

const transform = async () => {
    const reverseTransform = new Transform({
        transform(data, _, callback) {
            const reverseData = data.toString().split('').reverse().join('') + '\n';
            callback(null, reverseData);
        }
    });

    stdin.pipe(reverseTransform);
    reverseTransform.on('data',(details) => stdout.write(details + "\n"));
};

await transform();
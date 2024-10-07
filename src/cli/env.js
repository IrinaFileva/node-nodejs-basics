import { env } from 'node:process';

const parseEnv = () => {
    const keysEnv = Object.keys(env).filter((key) => key.startsWith('RSS_'));
    const result = keysEnv.map((key) => `${key}=${env[key]}`).join('; ');
    console.log(result)
};

parseEnv();

import * as dotenv from 'dotenv';

dotenv.config();

export class Configuration {

    static get envs() {
        return () => ({
            environment: process.env.NODE_ENV || 'Development',
            port: process.env.NODE_PORT || 3000,
            timezone: 'America/Sao_Paulo',
            database: {
                mongoDbUri: process.env.MONGODB_URI
            },
            auth: {
                jwtKey: process.env.JWT_KEY,
                jwtExpires: process.env.JWT_EXPIRES
            }
        });
    }
}

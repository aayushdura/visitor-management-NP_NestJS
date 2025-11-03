import { registerAs } from "@nestjs/config";

export default registerAs('database', () => ({
    type: 'oracle',
    host: process.env.TYPEORM_HOST,
    port: process.env.TYPEORM_PORT
        ? parseInt(process.env.TYPEORM_PORT, 10)
        : 1521,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    serviceName: process.env.TYPEORM_DATABASE,
    synchronize: true,
    entities: [__dirname + '/**/*.{model,entity}.{ts,js}'],
    migrations: ['dist/migrations/**/*.js'],
    subscribers: ['dist/subscriber/**/*.js'],
    cli: {
        migrationsDir: process.env.TYPEORM_MIGRATIONS_DIR,
        subscribersDir: process.env.TYPEORM_SUBSCRIBERS_DIR,
    },
}))
import { DataSource } from 'typeorm';
import { config } from 'dotenv';

config();

export default new DataSource({
  type: 'oracle',
  host: process.env.TYPEORM_HOST,
  port: process.env.TYPEORM_PORT
    ? parseInt(process.env.TYPEORM_PORT, 10)
    : 1521,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  serviceName: process.env.TYPEORM_DATABASE ?? 'XEPDB1',
  entities: [],
  migrations: [],
});

import "reflect-metadata";
import { DataSource } from "typeorm";

import dotenv from "dotenv";
import { Role } from "../entities/rolesEntity";
import { User } from "../entities/userEntity";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,          // change if needed
  password: process.env.DB_PASSWORD,      // change if needed
  database: process.env.DB_NAME, // your DB name

  synchronize: false, 
  logging: false,

  entities: [Role, User], 
   migrations: ["src/migration/**/*.ts"],
});
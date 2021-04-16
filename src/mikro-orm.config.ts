import { __prod__ } from "./constants";
import { MikroORM } from "@mikro-orm/core";
import path from "path";
import { Post } from "./entities/Post";
import { User } from "./entities/User";

export default {
  user: process.env.USER,
  password: process.env.PASSWORD,
  migrations: {
    path: path.join(__dirname, "./migrations"), // path to the folder with migrations
    pattern: /^[\w-]+\d+\.ts$/, // reg
  },
  entities: [Post, User],
  dbName: "lireddit",
  type: "postgresql",
  debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];

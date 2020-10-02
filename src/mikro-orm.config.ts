import { Post } from "./entities/Post";
import { production } from "./constants";
import { MikroORM } from "@mikro-orm/core";
import path from "path";

export default {
  migrations: {
    migrations: {
      path: path.join(__dirname, "./migrations"),
      pattern: /^[\w-]+\d+\.[tj]s$/,
    },
  },
  entities: [Post],
  dbName: "reddit-test",
  type: "postgresql",
  debug: !production,
} as Parameters<typeof MikroORM.init>[0];
import {
  mysqlTable,
  serial,
  timestamp,
  varchar,
  json,
} from "drizzle-orm/mysql-core";

export const skills = mysqlTable("Skills", {
  id: serial("id").primaryKey().notNull(),
  name: varchar("name", { length: 256 }),
  type: varchar("type", { length: 256 }),
  createdAt: timestamp("createdAt", { mode: "string" }).defaultNow(),
  updatedAt: timestamp("updatedAt", { mode: "string" }),
});

export const experience = mysqlTable("Experience", {
  id: serial("id").primaryKey().notNull(),
  company: varchar("company", { length: 256 }),
  location: varchar("location", { length: 256 }),
  title: varchar("title", { length: 256 }),
  dates: varchar("dates", { length: 256 }),
  description: json("description"),
  createdAt: timestamp("createdAt", { mode: "string" }).defaultNow(),
  updatedAt: timestamp("updatedAt", { mode: "string" }),
});

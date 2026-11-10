import { Database } from "bun:sqlite";

const db = new Database("database.sqlite");

db.exec("PRAGMA foreign_keys = ON;");

db.exec(`
    CREATE TABLE IF NOT EXISTS user (
        id              INTEGER PRIMARY KEY AUTOINCREMENT,
        username        TEXT NOT NULL UNIQUE,
        password_hash   TEXT NOT NULL
    );

   CREATE TABLE IF NOT EXISTS partidas (
    id                  INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id             INTEGER NOT NULL,
    modo                TEXT NOT NULL,
    acertos             INTEGER NOT NULL,
    rodadas             INTEGER NOT NULL,
    porcentagem         REAL NOT NULL,
    data                DATETIME DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id) REFERENCES user(id)
);

`);

export { db }
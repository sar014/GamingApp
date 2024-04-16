import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("credentials.db");

export function initDatabase() {
    console.log("Initializing database...");
    db.transaction(tx => {
        tx.executeSql(
            "CREATE TABLE IF NOT EXISTS credentials (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT)",
            [],
            (_, resultSet) => {
                console.log("Table 'credentials' created successfully or already exists.");
            },
            (_, error) => {
                console.error("Error creating table 'credentials':", error);
            }
        );
    });
    console.log("Database initialized successfully.");
}

export default db;
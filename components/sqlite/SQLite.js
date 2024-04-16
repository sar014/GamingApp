import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("credentials.db");


export function initDatabase(db) {
    console.log("Initializing database...");
    db.transaction((tx) => {
        tx.executeSql(
            "CREATE TABLE IF NOT EXISTS " +
            "credentials" +
            "(name TEXT, email TEXT);",
            [],
            (_, result) => {
                console.log("Table creation query executed successfully:");
            },
            (_, error) => {
                console.error("Error executing table creation query:", error);
            }
        );
    }, (error) => {
        console.error("Error initializing database transaction:", error);
    }, () => {
        console.log("Database initialized successfully.");
    });
}


export default db;
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("login.db");


export function initDatabase(db) {
    console.log("Initializing database...");
    db.transaction((tx) => {
        tx.executeSql(
            "CREATE TABLE IF NOT EXISTS " +
            "login " +
            "(ID INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, emailid TEXT);",
            [],
            (_, result) => {
                console.log("Table creation query executed successfully:");
            },
            (_, error) => {
                console.error("Error executing table creation query:", error);
            }
        );
    });
}


export default db;
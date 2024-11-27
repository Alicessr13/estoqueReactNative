import { type SQLiteDatabase } from "expo-sqlite"; //pegando a tipagem de sqlitedatabase

export async function initializeDatabase(database: SQLiteDatabase) {
    await database.execAsync(`
            CREATE TABLE IF NOT EXISTS products(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                quantity INTEGER NOT NULL,
                barcode TEXT NULL,
                description TEXT NULL,
                custo INTEGER NOT NULL,
                venda INTEGER NOT NULL  
            );
        `)
}
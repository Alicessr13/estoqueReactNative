import { useSQLiteContext } from "expo-sqlite";

export type ProductDatabase = {
    id: number
    name: string
    quantity: number
    barcode: string
    description: string
    custo: number
    venda: number
}

export function useProductDatabase() {

    const database = useSQLiteContext()

    async function create(data: Omit<ProductDatabase, "id">) {
        const statement = await database.prepareAsync(
            "INSERT INTO products (name, quantity, barcode, description, custo, venda) VALUES ($name, $quantity, $barcode, $description, $custo, $venda)"
        )

        try {
            const result = await statement.executeAsync({
                $name: data.name,
                $quantity: data.quantity,
                $barcode: data.barcode,
                $description: data.description,
                $custo: data.custo,
                $venda: data.venda
            })

            const insertedRowId = result.lastInsertRowId.toLocaleString()

            return { insertedRowId }
        } catch (error) {
            throw error
        } finally {
            await statement.finalizeAsync()
        }
    }

    async function searchByName(name: string) {
        try {
            const query = "SELECT * FROM products WHERE name LIKE ?"

            const response = await database.getAllAsync<ProductDatabase>(query, `%${name}%`)

            return response
        } catch (error) {
            throw error
        }
    }

    return {
        create, searchByName
    }
}
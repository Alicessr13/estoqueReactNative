import { Input } from "@/components/input";
import { View, Text, Button, Alert, FlatList, Pressable } from "react-native";
import { useEffect, useState } from "react";
import { useProductDatabase, ProductDatabase } from "@/database/useProductDatabase";
import { Product } from "@/components/product";

export default function Index() {

    const [id, seId] = useState("");
    const [name, setName] = useState("");
    const [search, setSearch] = useState("");
    const [quantity, setQuantity] = useState("");
    const [barcode, setBarcode] = useState("");
    const [description, setDescription] = useState("");
    const [custo, setCusto] = useState("");
    const [venda, setVenda] = useState("");

    const [products, setProducts] = useState<ProductDatabase[]>([]);

    const productDatabase = useProductDatabase();

    async function create() {
        try {
            if (isNaN(Number(quantity))) {
                return Alert.alert("Quantidade", "A quantidade precisa ser um número");
            }
            if (isNaN(Number(quantity))) {
                return Alert.alert("Quantidade", "A quantidade precisa ser um número");
            }
            if (isNaN(Number(quantity))) {
                return Alert.alert("Quantidade", "A quantidade precisa ser um número");
            }

            const response = await productDatabase.create({ name, quantity: Number(quantity), barcode, description, custo: Number(custo), venda: Number(venda) });
            Alert.alert("Produto cadastrado com o ID: " + response.insertedRowId);
        }
        catch (error) {
            console.log(error);
        }
    }

    async function list() {
        try {
            const response = await productDatabase.searchByName(search);
            setProducts(response)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        list()
    }, [search]);

    return (<View style={{ flex: 1, justifyContent: "center", padding: 32, gap: 16 }}>
        <Input placeholder="Nome" onChangeText={setName} value={name} />
        <Input placeholder="Quantidade" onChangeText={setQuantity} value={quantity} />
        <Input placeholder="Código de barras" onChangeText={setBarcode} value={barcode} />
        <Input placeholder="Descrição" onChangeText={setDescription} value={description} />
        <Input placeholder="Valor custo" onChangeText={setCusto} value={custo} />
        <Input placeholder="Valor venda" onChangeText={setVenda} value={venda} />

        <Button title="Salvar" onPress={create} />

        <FlatList
            data={products}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => <Product data={item} />}
        />
    </View>
    )
}
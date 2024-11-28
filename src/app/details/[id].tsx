import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useState, useEffect } from "react";
import { useProductDatabase } from "@/database/useProductDatabase";

export default function details() {
    const [data, setData] = useState({
        name: "",
        quantity: 0,
        barcode: "",
        description: "",
        custo: 0,
        venda: 0
    })

    const productDatabase = useProductDatabase();
    const params = useLocalSearchParams<{ id: string }>();

    useEffect(() => {
        if (params.id) {
            productDatabase.show(Number(params.id)).then((response) => {
                if (response) {
                    setData({
                        name: response.name,
                        quantity: response.quantity,
                        barcode: response.barcode,
                        description: response.description,
                        custo: response.custo,
                        venda: response.venda
                    })
                }
            })
        }
    }, [params.id])

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 10 }}>
            <Text style={{ fontSize: 32 }}>ID: {params.id}</Text>
            <Text style={{ fontSize: 32 }}>
                Quantidade: {data.quantity}
            </Text>

            <Text style={{ fontSize: 32 }}>
                Nome: {data.name}
            </Text>

            <Text style={{ fontSize: 32 }}>
                Barcode: {data.barcode}
            </Text>

            <Text style={{ fontSize: 32 }}>
                Descrição: {data.description}
            </Text>

            <Text style={{ fontSize: 32 }}>
                Valor custo: {data.custo}
            </Text>

            <Text style={{ fontSize: 32 }}>
                Valor venda {data.venda}
            </Text>
        </View >
    )
}
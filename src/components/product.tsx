import { Pressable, PressableProps, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type Props = PressableProps & {
    data: {
        name: string
        quantity: number
        barcode: string
        description: string
        custo: number
        venda: number
    }

    onDelete: () => void

    onOpen: () => void
}

export function Product({ data, onDelete, onOpen, ...rest }: Props) {
    return <Pressable style={{ backgroundColor: "#D4BEE4", padding: 20, borderRadius: 5, gap: 12, flexDirection: "row" }} {...rest}>
        <Text style={{ flex: 1 }}>
            Quantidade: {data.quantity} - Nome: {data.name}
        </Text>

        <TouchableOpacity onPress={onDelete}>
            <MaterialIcons name="delete" size={24} color="#3B1E54"></MaterialIcons>
        </TouchableOpacity>

        <TouchableOpacity onPress={onOpen}>
            <MaterialIcons name="visibility" size={24} color="#9B7EBD"></MaterialIcons>
        </TouchableOpacity>
    </Pressable>
}
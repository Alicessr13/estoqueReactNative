import { Pressable, PressableProps, Text } from "react-native";

type Props = PressableProps & {
    data: {
        name: string
        quantity: number
        barcode: string
        description: string
        custo: number
        venda: number
    }
}

export function Product({ data, ...rest }: Props) {
    return <Pressable {...rest}>
        <Text>
            {data.quantity} - {data.name} - {data.barcode} - {data.description} - {data.custo} - {data.venda}
        </Text>
    </Pressable>
}
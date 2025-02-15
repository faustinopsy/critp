import {  Text, View} from "react-native"
import { styleSobre } from "./styles"
export default function Sobre(){
    return(
        <View style={styleSobre.container}>
            <Text style={styleSobre.texto}>Olá mundo</Text>
        </View>
    )
}

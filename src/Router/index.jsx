import Sobre from "./../screens/SobreScreen"
import HomeScreen from "./../screens/HomeScreen"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from '@react-navigation/stack';
export default function App() {
    const nav = false ? createBottomTabNavigator() : createDrawerNavigator();
    return (
        <NavigationContainer>
            <nav.Navigator>
                <nav.Screen name="Home" component={HomeScreen}></nav.Screen>
                <nav.Screen name="Sobre" component={Sobre}></nav.Screen>
            </nav.Navigator>
        </NavigationContainer>
    )
}
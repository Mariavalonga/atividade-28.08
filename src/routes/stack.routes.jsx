import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Filmes from "../screens/Filmes";
import Hobby from "../screens/Hobby";

const Stack = createNativeStackNavigator();
const StackRoutes = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name="Home" 
            component={Home} />
                <Stack.Screen name="Filmes" 
                component={Filmes} />
         <Stack.Screen name="Hobby" 
                component={Hobby} />
                   
        </Stack.Navigator>
    )
}

export default StackRoutes
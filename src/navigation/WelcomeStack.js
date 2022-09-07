import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { WelcomeScreen } from "../screens/Welcome/WelcomeScreen";
import { screen } from "../utils";

const Stack = createNativeStackNavigator();

export function WelcomeStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name={screen.welcome.welcome}
                component={WelcomeScreen}
                options={{title: "Bienvenido"}}
            />
        </Stack.Navigator>
    );
}
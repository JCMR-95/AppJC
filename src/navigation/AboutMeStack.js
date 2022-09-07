import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AboutMeScreen } from "../screens/AboutMe/AboutMeScreen";
import { screen } from "../utils";

const Stack = createNativeStackNavigator();

export function AboutMeStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name={screen.aboutMe.aboutMe}
                component={AboutMeScreen}
                options={{title: "Sobre mi"}}
            />
        </Stack.Navigator>
    );
}
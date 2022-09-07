import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { WorkScreen } from "../screens/Work/WorkScreen";
import { screen } from "../utils";

const Stack = createNativeStackNavigator();

export function WorkStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name={screen.work.work}
                component={WorkScreen}
                options={{title: "Trabajo"}}
            />
        </Stack.Navigator>
    );
}
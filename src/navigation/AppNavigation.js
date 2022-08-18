import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import { AboutMeScreen } from "../screens/AboutMeScreen";
import { WorkScreen } from "../screens/WorkScreen";
import { screen } from "../utils";

const Tab = createBottomTabNavigator();

export function AppNavigation(){
    return(
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: "#00a680",
                tabBarInactiveTintColor: "#646464",
                tabBarIcon: ({ color, size }) => screenOptions(route, color, size),
            })}
        >
            <Tab.Screen name={screen.work.tab} component={WorkScreen} />
            <Tab.Screen name={screen.aboutMe.tab} component={AboutMeScreen} />

        </Tab.Navigator>
    );
}

function screenOptions(route, color, size) {
    let iconName;
  
    if (route.name === "Trabajo") {
      iconName = "laptop";
    }
  
    if (route.name === "Sobre mi") {
      iconName = "pine-tree";
    }
  
    return (
      <Icon type="material-community" name={iconName} color={color} size={size} />
    );
  }
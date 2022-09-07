import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import { screen } from "../utils";

import { WelcomeStack } from "./WelcomeStack";
import { WorkStack } from "./WorkStack";
import { AboutMeStack } from "./AboutMeStack";


const Tab = createBottomTabNavigator();

export function AppNavigation(){
    return(
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: "#00a680",
                tabBarInactiveTintColor: "#646464",
                tabBarIcon: ({ color, size }) => screenOptions(route, color, size),
            })}
        >
            <Tab.Screen 
              name={screen.welcome.tab} 
              component={WelcomeStack} 
              options={{title: "Bienvenido"}}
            />
            <Tab.Screen 
              name={screen.work.tab} 
              component={WorkStack} 
              options={{title: "Trabajo"}}
            />
            <Tab.Screen 
              name={screen.aboutMe.tab} 
              component={AboutMeStack} 
              options={{title: "Sobre mi"}}
            />

        </Tab.Navigator>
    );
}

function screenOptions(route, color, size) {
    let iconName;
  
    if (route.name === "WorkTab") {
      iconName = "laptop";
    }
  
    if (route.name === "AboutMeTab") {
      iconName = "pine-tree";
    }
  
    return (
      <Icon type="material-community" name={iconName} color={color} size={size} />
    );
  }
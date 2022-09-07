import React from "react";
import {View, Text} from "react-native";
import { Button } from "react-native-elements";
import { screen } from "../../utils";

export function AboutMeScreen(props){

    const { navigation } = props;

    const goToWork = () => {

        navigation.navigate(screen.work.tab, {screen: screen.work.work});
    }

    return(
        <View>
            <Text>Estamos en la Screen AboutMe</Text>

            <Button title="Ir a Work" onPress={goToWork} />
        </View>
    );
}
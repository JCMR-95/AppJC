import React from "react";
import { ImageBackground, StyleSheet, Text, View, Button } from "react-native";


export function WelcomeScreen(){
    return(
        <View style={styles.container}>
            <ImageBackground source={require('../../images/WelcomeBackground.jpg')} resizeMode="cover" style={styles.image}>
              <View style={styles.container}>

                <Text style={styles.text}>¡Hola, soy JC!</Text>
                
                <View style={styles.button}>
                  <Button color = "#075C14" title ="Comenzar" onPress = {() => trasplantar()}/>
                </View>
                
              </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    top: -200,
    textAlign: 'center'
  },
  button: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    top: 200
}
});

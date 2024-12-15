import {ImageBackground, StyleSheet} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "./Screen/HomeScreen";
import DetailScreen from "./Screen/DetailScreen";
import React from "react";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: 'transparent', // Make background transparent to show image
                    },
                    headerTintColor: '#fff', // Pour la couleur du texte dans la barre de navigation
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 30
                    },
                    headerTitleAlign: 'center', // Centrer le titre de la barre de navigation
                    headerBackground: () => (
                        <ImageBackground
                            source={require('./assets/pokeballHeader.jpg')}
                            style={{flex: 1}}
                        />
                    ),
                }}
            >
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{title: 'Pokédex'}}
                />
                <Stack.Screen
                    name="Detail"
                    component={DetailScreen}
                    options={{title: 'Détails du Pokémon'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#DE2916',
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
    },

    title: {
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold',
    }
});

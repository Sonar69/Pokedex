import React, {useEffect, useState} from 'react';
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {fetchPokemonList} from "../Service/api";

//{
//     "pokedex_id": 0,
//     "generation": 1,
//     "category": "Pokémon Bug",
//     "name": {
//       "fr": "MissingNo.",
//       "en": "MissingNo.",
//       "jp": "キャタピー"
//     },
//     "sprites": {
//       "regular": "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/0/regular.png",
//       "shiny": null,
//       "gmax": null
//     },
//     "types": null,
//     "talents": null,
//     "stats": null,
//     "resistances": null,
//     "evolution": null,
//     "height": null,
//     "weight": null,
//     "egg_groups": null,
//     "sexe": null,
//     "catch_rate": null,
//     "level_100": null,
//     "formes": null
//   }

export default function HomeScreen({navigation}) {
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        const getPokemonList = async () => {
            try {
                const data = await fetchPokemonList();
                setPokemonList(data);
            } catch (error) {
                console.error(error);
            }
        };

        getPokemonList();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Liste des Pokémons</Text>
            <Text>Nombre de pokemon {pokemonList.length}</Text>
            <FlatList
                data={pokemonList.slice(1)}
                keyExtractor={(item) => item.pokedex_id.toString()}
                numColumns={3}
                renderItem={({item}) => (
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => navigation.navigate('Detail', {pokemon: item})}
                        activeOpacity={0.8}
                    >
                        <View style={styles.badgeContainer}>
                            <Text style={styles.badge}>{item.pokedex_id}</Text>
                        </View>
                        <Image source={{uri: item.sprites.regular}} style={styles.image}/>
                        <Text style={styles.name}>{item.name.fr}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    card: {
        flex: 1,
        margin: 10,
        padding: 10,
        backgroundColor: 'lightgray',
        borderRadius: 5,
        alignItems: 'center',
    },
    image: {
        width: 80,
        height: 80,
        marginBottom: 10,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    badgeContainer: {
        position: 'absolute',
        top: 5,
        left: 5,
        backgroundColor: 'rgba(162,69,59,0.52)',
        borderRadius: 50,
        width: 30,
        height: 30,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    badge: {
        color: 'white',
        fontSize: 13,
        fontWeight: 'bold',
    },
});

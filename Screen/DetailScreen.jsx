import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

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

export default function DetailScreen({route}) {
    const {pokemon} = route.params;

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={{uri: pokemon.sprites.regular}} style={styles.image}/>
            <Text style={styles.title}>{pokemon.name.fr} ({pokemon.name.en})</Text>
            <Text style={styles.subtitle}>#{pokemon.pokedex_id} - {pokemon.category}</Text>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Types</Text>
                {pokemon.types ? pokemon.types.map((type, index) => (
                    <View key={index} style={styles.typeContainer}>
                        <Image source={{uri: type.image}} style={styles.typeImage}/>
                        <Text style={styles.typeText}>{type.name}</Text>
                    </View>
                )) : <Text style={styles.infoText}>Aucun type disponible</Text>}
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Talents</Text>
                {pokemon.talents ? pokemon.talents.map((talent, index) => (
                    <Text key={index} style={styles.infoText}>{talent.name} {talent.tc ? '(Talent Caché)' : ''}</Text>
                )) : <Text style={styles.infoText}>Aucun talent disponible</Text>}
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Statistiques</Text>
                {pokemon.stats ? (
                    Object.entries(pokemon.stats).map(([stat, value], index) => (
                        <Text key={index} style={styles.infoText}>{stat.toUpperCase()}: {value}</Text>
                    ))
                ) : <Text style={styles.infoText}>Aucune statistique disponible</Text>}
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Résistances</Text>
                {pokemon.resistances ? pokemon.resistances.map((resistance, index) => (
                    <Text key={index} style={styles.infoText}>{resistance.name}: {resistance.multiplier}</Text>
                )) : <Text style={styles.infoText}>Aucune résistance disponible</Text>}
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Évolution</Text>
                {pokemon.evolution ? (
                    <>
                        {pokemon.evolution.pre && (
                            <Text style={styles.infoText}>Pré-Évolution: {pokemon.evolution.pre.name}</Text>
                        )}
                        {pokemon.evolution.next && pokemon.evolution.next.map((next, index) => (
                            <Text key={index} style={styles.infoText}>Évolution
                                suivante: {next.name} ({next.condition})</Text>
                        ))}
                    </>
                ) : <Text style={styles.infoText}>Aucune évolution disponible</Text>}
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Autres informations</Text>
                <Text style={styles.infoText}>Hauteur: {pokemon.height || 'N/A'}</Text>
                <Text style={styles.infoText}>Poids: {pokemon.weight || 'N/A'}</Text>
                <Text style={styles.infoText}>Groupes
                    d'œufs: {pokemon.egg_groups ? pokemon.egg_groups.join(', ') : 'N/A'}</Text>
                <Text
                    style={styles.infoText}>Sexe: {pokemon.sexe ? `♂ ${pokemon.sexe.male}%, ♀ ${pokemon.sexe.female}%` : 'N/A'}</Text>
                <Text style={styles.infoText}>Taux de capture: {pokemon.catch_rate || 'N/A'}</Text>
                <Text style={styles.infoText}>Expérience au niveau 100: {pokemon.level_100 || 'N/A'}</Text>
                <Text style={styles.infoText}>Formes: {pokemon.formes || 'N/A'}</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#E0F7FA',
    },
    image: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        color: '#777',
        marginBottom: 20,
    },
    section: {
        width: '100%',
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    typeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    typeImage: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    typeText: {
        fontSize: 16,
    },
    infoText: {
        fontSize: 16,
        marginBottom: 5,
    },
});

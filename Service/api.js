import axios from 'axios';

const API_BASE_URL = 'https://tyradex.vercel.app/api/v1/pokemon';

/**
 * Fetch the list of Pokémon.
 * @returns {Promise<Object[]>} A promise resolving to the list of Pokémon.
 */
export const fetchPokemonList = async () => {
    try {
        const response = await axios.get(API_BASE_URL);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des Pokémon :', error);
        throw error;
    }
};
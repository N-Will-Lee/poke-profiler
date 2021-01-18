import { useEffect, useState } from "react";
import { Pokemon } from "./types";


export const useGetPokemon = (): [Pokemon[], boolean, boolean] => {

    const [loading, setLoading] = useState<boolean>(false);
    const [pokemon, setPokemon] = useState<Pokemon[]>([]);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);

        const getData = async (url = '') => {
            const response = await fetch(url, {
                method: 'GET'
            });
            return response.json();
        }

        getData("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json")
        .then((pokemonResponse) => {
            setPokemon(pokemonResponse.pokemon);
        })
        .catch((err) => {
            console.log("get pokemon error: ", err);
            setError(true);
        })
        .finally(() => setLoading(false))
    }, []);

    return [pokemon, loading, error];
};

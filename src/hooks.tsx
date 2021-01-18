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


export const useSortPokemon = (pokemon: Pokemon[], field: string, ascending: boolean): Pokemon[] => {
    const [sortedPokemon, setSortedPokemon] = useState<Pokemon[]>([]);

    useEffect(() => {
        let pokemonArr = [...pokemon];
        pokemonArr.sort((a, b) => {
            let pokemonA: Pokemon = a[field].toUpperCase();
            let pokemonB: Pokemon = b[field].toUpperCase();
            let returnValue = 0;

            pokemonA < pokemonB && (returnValue = -1);
            pokemonA > pokemonB && (returnValue = 1);
            !ascending && (returnValue = returnValue * -1);

            return returnValue;
        });
        setSortedPokemon(pokemonArr);
    }, [pokemon, field, ascending])

    return sortedPokemon;
}

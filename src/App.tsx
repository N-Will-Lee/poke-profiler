import { Pokemon } from "./types";
import { useGetPokemon, useSortPokemon } from "./hooks";
import { PokemonCard } from "./PokemonCard/PokemonCard";
import './App.css';

function App() {
    const [pokemon, loading, error] = useGetPokemon();
    const sortedPokemon = useSortPokemon(pokemon, "name", true);

    return (
        <div className="App">
            <h1>Pokemon</h1>
            <section className="pokemon-cards">
                {sortedPokemon.map((poke: Pokemon) => {
                    return (
                        <PokemonCard poke={poke}/>
                    )
                })}
            </section>
        </div>
    );
}

export default App;

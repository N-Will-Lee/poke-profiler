import { Pokemon } from "./types";
import { useGetPokemon, useSortPokemon } from "./hooks";
import './App.css';

function App() {
    const [pokemon, loading, error] = useGetPokemon();
    const sortedPokemon = useSortPokemon(pokemon, "name", true);

    return (
        <ul>
            {sortedPokemon.map((poke) => {
                return <li>{poke.name}</li>
            })}
        </ul>
    );
}

export default App;

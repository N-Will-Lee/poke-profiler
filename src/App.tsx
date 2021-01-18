import { Pokemon } from "./types";
import { useGetPokemon } from "./hooks";
import './App.css';

function App() {
    const [pokemon, loading, error] = useGetPokemon();

    return (
        <ul>
            {pokemon.map((poke) => {
                return <li>{poke.name}</li>
            })}
        </ul>
    );
}

export default App;

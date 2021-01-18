import { Pokemon } from "./types";
import { useGetPokemon, useSortPokemon } from "./hooks";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import './App.css';

function App() {
    const [pokemon, loading, error] = useGetPokemon();
    const sortedPokemon = useSortPokemon(pokemon, "name", true);

    return (
        <div className="App">
            <h1>Pokemon</h1>
            <section>
                {sortedPokemon.map((poke: Pokemon) => {
                    return (
                        <Card className="pokemon-card">
                            <Card.Img variant="top" src={poke.img} />
                            <Card.Body>
                                <Card.Title>{poke.name}</Card.Title>
                                <Card.Text>
                                {poke.type.toString().replaceAll(",", ", ")}
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>Cras justo odio</ListGroupItem>
                                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                                <ListGroupItem>Vestibsectionum at eros</ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card>
                    )
                })}
            </section>
        </div>
    );
}

export default App;

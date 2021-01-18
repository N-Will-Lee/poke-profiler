import React, {FC} from 'react';
import { Pokemon } from '../types';
import { Card } from "react-bootstrap";
import "./PokemonCard.css";


interface IProps {
    poke: Pokemon
}

export const PokemonCard: FC<IProps> = ({poke}) => {

    return (
        <Card className="pokemon-card">
            <Card.Img variant="top" src={poke.img} />
            <Card.Body>
                <Card.Title>{poke.name} - {poke.num}</Card.Title>
                <Card.Text>
                Type{poke.type.length > 1 ? "s": ""}: {poke.type.toString().replaceAll(",", ", ")}
                </Card.Text>
                <Card.Text>
                    Weakness: {poke.weaknesses.toString().replaceAll(",", ", ")}
                </Card.Text>
            </Card.Body>
            {poke.prev_evolution && poke.prev_evolution.length >= 1 ? (
                <Card.Body>
                    <Card.Title>Previous Evolution: </Card.Title>
                    <Card.Link href="#">{poke.prev_evolution[0].name} - {poke.prev_evolution[0].num}</Card.Link>
                </Card.Body>
            ) : ("")}
            {poke.next_evolution && poke.next_evolution.length >= 1 ? (
                <Card.Body>
                    <Card.Title>Next Evolution{poke.next_evolution.length > 1 ? "s": ""}: </Card.Title>
                    {poke.next_evolution.map((evolution) => {
                        return <Card.Link href="#">{evolution.name} - {evolution.num}</Card.Link>
                    })}
                </Card.Body>
            ) : ("")}
        </Card>
    )
}

export default PokemonCard;

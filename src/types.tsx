export interface Pokemon {
    [key: string]: any,
    id: 1,
    num: string,
    name: string,
    img: string,
    type: string[],
    height: string,
    weight: string,
    candy: string,
    candy_count: number,
    egg: string,
    spawn_chance: number,
    avg_spawns: number,
    spawn_time: string,
    multipliers: number[],
    weaknesses: string[],
    next_evolution: Evolution[]
}

export interface Evolution {
    num: string,
    name: string
}

export enum PokemonType {
    "Bug",
    "Dark",
    "Dragon",
    "Electric",
    "Fairy",
    "Fighting",
    "Fire",
    "Flying",
    "Ghost",
    "Grass",
    "Ground",
    "Ice",
    "Normal",
    "Poison",
    "Psychic",
    "Rock",
    "Steel",
    "Water"
}

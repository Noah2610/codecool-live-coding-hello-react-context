import { useContext } from "react";
import { AppContext } from "./App";
import Pokemon from "./Pokemon";

export default function PokemonList() {
    const pokemons = useContext(AppContext);

    return (
        <ul>
            {pokemons.map((pokemon, i) => (
                <li key={i}>
                    <Pokemon pokemon={pokemon} />
                </li>
            ))}
        </ul>
    );
}

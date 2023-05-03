import { useContext } from "react";
import { AppContext } from "./App";

export default function Pokemon({ pokemon }) {
    const pokemons = useContext(AppContext);
    const index = pokemons.indexOf(pokemon);

    return (
        <h2>
            {index} {pokemon.name}
        </h2>
    );
}

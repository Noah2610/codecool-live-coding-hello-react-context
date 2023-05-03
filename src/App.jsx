import { createContext, useEffect, useState } from "react";
import PokemonList from "./PokemonList";

const POKEMON_URL = "https://pokeapi.co/api/v2/pokemon";

export const AppContext = createContext();

function App() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        fetch(POKEMON_URL)
            .then((response) => response.json())
            .then((json) => setPokemons(json.results));
    }, []);

    return (
        <>
            <AppContext.Provider value={pokemons}>
                <PokemonList />
            </AppContext.Provider>
        </>
    );
}

export default App;

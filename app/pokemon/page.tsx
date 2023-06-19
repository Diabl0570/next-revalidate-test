import { getRandomPokemonItem } from "@/services/pokemonService";
import ReloadButton from "./ReloadButton";

export default async function RandomPokemon() {
    const pokemon = await getRandomPokemonItem();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="relative flex place-items-center ">
                <h1>{pokemon.name}: {pokemon.id}</h1>
                <p>
                    <br />
                    <a href="/api/revalidation" target="__BLANK">Revalidate link</a>
                </p>
                <p>
                    <br />
                    <ReloadButton />
                </p>
            </div>
        </main>
    )
}

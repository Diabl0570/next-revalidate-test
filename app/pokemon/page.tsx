import { getRandomPokemonItem } from "@/services/pokemonService";

// commit message
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
            </div>
        </main>
    )
}

import { getRandomPokemonItem } from "@/services/pokemonService";

export const runtime = 'edge';
export default async function RandomPokemon() {
    const pokemon = await getRandomPokemonItem();

    return (
        <div className="relative flex place-items-center ">
            <h1>{pokemon.name}: {pokemon.id}</h1>
            <p>
                <br />
                <a href="/api/revalidation" target="__BLANK">Revalidate link</a>
            </p>
            {/* <p>
                    <br />
                    <Suspense fallback={"loading..."}>
                        <ReloadButton />
                    </Suspense>
                </p> */}
        </div>
    )
}

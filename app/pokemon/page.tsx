function randomIntFromInterval(min: number, max: number) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
export async function getPokemonItem() {
    const milli = new Date().getMilliseconds();
    const number = milli % 3 || 1;
    console.log("number", number)
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomIntFromInterval(1, 10)}`, {
        next: {
            tags: ["pokemon"]
        }
    });
    const h = pokemon.headers
    console.log(h)
    const cache = {xCacheHits: h.get("x-cache-hits"), xCache: h.get("x-cache")}
    return {cache: cache, pokemon: await pokemon.json()}
}
export const RandomPokemon = async () => {
    const result = await getPokemonItem();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="relative flex place-items-center ">
                <h1>Cache: {result.cache.xCache} {result.cache.xCache==="HIT" && result.cache.xCacheHits}: {result.pokemon.name}: {result.pokemon.id}</h1>
            </div>
        </main>
    )
}

export default RandomPokemon;
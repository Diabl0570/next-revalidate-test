function randomIntFromInterval(min: number, max: number) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
async function getPokemonItem() {
    const milli = new Date().getMilliseconds();
    const number = milli % 3 || 1;
    console.log("number", number)
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomIntFromInterval(1, 10)}`, {
        next: {
            tags: ["pokemon"]
        }
    });
    return await pokemon.json()
}
export default async function RandomPokemon () {
    const pokemon = await getPokemonItem();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="relative flex place-items-center ">
                <h1>{pokemon.name}: {pokemon.id}</h1>
            </div>
        </main>
    )
}

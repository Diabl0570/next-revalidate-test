function randomIntFromInterval(min: number, max: number) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
/**
 * 
 * @returns 
 */
export async function getRandomPokemonItem() {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomIntFromInterval(1, 1000)}`, {
        next: {
            tags: ["pokemon"]
        }
    });
    return await pokemon.json()
}

export async function getPokemonItem(id:string) {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
        next: {
            tags: ["pokemon"]
        },
        cache: "force-cache"

    });
    return await pokemon.json()
}
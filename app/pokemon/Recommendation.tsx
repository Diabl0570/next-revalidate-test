import { getRandomPokemonItem } from "@/services/pokemonService";
import Link from "next/link";

const Recommendation = async () => {
    const pokemon = await getRandomPokemonItem();
    return (
        <Link href={`/en/pokemon/${pokemon.id}`}>
            {
                pokemon.name
            }
        </Link>
    )
}

export default Recommendation;
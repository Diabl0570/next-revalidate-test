import { getPokemonItem, getRandomPokemonItem } from "@/services/pokemonService";

type Props = {
    params: {
      id: string;
      locale: string;
    };
  };
export default async function RandomPokemon ({ params:{id} }: Props) {
    const pokemon = await getPokemonItem(id);

    return (
        <main className="flex ">
            <div className="relative flex place-items-center ">
                <h1>{pokemon.name}: {pokemon.id}</h1>
            </div>
        </main>
    )
}

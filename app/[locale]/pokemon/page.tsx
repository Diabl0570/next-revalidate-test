import ReloadButton from "@/app/pokemon/ReloadButton";
import { getPokemonItem, getRandomPokemonItem } from "@/services/pokemonService";
import { Suspense } from "react";

type Props = {
    params: {
      id: string;
      locale: string;
    };
  };
export default async function RandomPokemon ({ params:{id} }: Props) {
    const pokemon = await getRandomPokemonItem();

    return (
        <main className="flex flex-col items-center justify-between p-24">
            <div className="relative flex place-items-center ">
                <h1>Random: {pokemon.name}: {pokemon.id}</h1>
            </div>
        </main>
    )
}

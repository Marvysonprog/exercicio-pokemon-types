import { NextResponse } from "next/server";
import { pokemons } from "../../../../src/db/pokemons";

export async function GET(request: Request, { params }: { params: { id: number } }) {
    const { id } = params;  
    const pokemon = pokemons.find(item => item.id === Number(id));

    console.log("Pokemon aqui " + pokemon)

    if (pokemon) {
        return NextResponse.json(pokemon); 
    } else {
        return NextResponse.json({ message: 'Pokémon not found' }, { status: 404 }); 
    }
}
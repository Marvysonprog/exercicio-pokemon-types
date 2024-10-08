import { NextResponse } from 'next/server';
import { pokemons } from '../../../../src/db/pokemons';

export async function GET(request: Request, { params }: { params: { name: string } }) {
    const { name } = params;  
    const pokemon = pokemons.find(item => item.name.toLowerCase() === name.toLowerCase());

    if (pokemon) {
        return NextResponse.json(pokemon); 
    } else {
        return NextResponse.json({ message: 'Pokémon not found' }, { status: 404 }); 
    }
}

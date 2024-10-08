// app/api/pokemons/route.ts
import { NextResponse } from 'next/server';
import { pokemons } from '../../../src/db/pokemons';


export async function GET() {
  return NextResponse.json(pokemons);
}

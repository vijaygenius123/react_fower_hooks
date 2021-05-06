import React, {useState, useEffect} from 'react';
import { Box } from '@fower/react'
import { styled } from '@fower/styled'

interface Pokemon {
    id: number,
    name: {
        english: string,
        japanese: string
    },
    type: string[],
    base: Record<string, string>
}

const Input = styled("input")

function App() {

    const [filter, setFilter] = useState('')
    const [allPokemon, setAllPokemon] = useState<Pokemon[]>([])


    useEffect(function (){
        fetch('/pokemon.json')
            .then(resp => resp.json())
            .then((pokemon: Pokemon[]) => setAllPokemon(pokemon))
    },[])

    const lowerCaseFilter = filter.toLowerCase()
    const pokemon = allPokemon
        .filter(({name: {english}}) => english.toLowerCase().includes(lowerCaseFilter))
        .slice(0, 10)

    return (
     <Box p-10 maxW-1200 m="auto">
        <Input
            p-5
            roundedXL
            border-1
            text4XL
            w="100%"
            value={filter}
            onChange={(evt) => setFilter(evt.target.value)}
        />
         {pokemon.map(pokemon => (
             <Box key={pokemon.id} text2XL >
                 {pokemon.name.english}
             </Box>
         ))}
     </Box>
  );
}

export default App;

import React, {useState, useEffect} from 'react';
import { Box } from '@fower/react'
import { styled } from '@fower/styled'
import usePokemon from "./hooks/usePokemon";

const Input = styled("input")

function App() {

    const {
        filter,
        setFilter,
        pokemon
    } = usePokemon()

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

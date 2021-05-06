import React from 'react';
import {Box, Image} from '@fower/react'
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
         <Box
             grid
             gridTemplateColumns-2
             gap-20
             mt-10
         >
         {pokemon.map(pokemon => (
             <Box key={pokemon.id}
                  text3XL
                  p-10
                  border-1
                  borderGray500
                  roundedXL
                  grid
                  gridTemplateColumns-2
                  gap-20
             >
                 <Image
                     src={`https://github.com/jherr/fower-react-pokemon/raw/master/public/pokemon/${pokemon.name.english.toLowerCase()}.jpg`}
                     w="100%"
                 />
                 <Box textLG>{pokemon.name.english}</Box>

             </Box>
         ))}
         </Box>
     </Box>
  );
}

export default App;

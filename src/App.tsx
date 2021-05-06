import React, {useState} from 'react';
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
    const [allPokemon, setAllPokemon] = useState([])



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
         {filter}
     </Box>
  );
}

export default App;

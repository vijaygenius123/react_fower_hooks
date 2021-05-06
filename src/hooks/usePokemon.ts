import {useState, useEffect} from "react";

interface Pokemon {
    id: number,
        name: {
        english: string,
            japanese: string
    },
    type: string[],
        base: Record<string, string>
}

export default function usePokemon(): {
 pokemon: Pokemon[];
 filter: string;
 setFilter: (filter: string | ((filter: string)=> string)) => void;
}{

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

    return {
        pokemon,
        filter,
        setFilter
    }
}

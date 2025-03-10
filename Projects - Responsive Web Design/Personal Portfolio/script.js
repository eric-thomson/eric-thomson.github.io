async function getPokemon() {
    for (let i = 1; i <= 16; i=i+3) {
        try{
            const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`,)
            if (resp.ok) {
                const data = await resp.json()
                console.log(data?.name, data?.sprites?.front_default);
            }
        } catch(e) {
            console.log(`Error fetching data for pokemon ${I}`)
        }        
    }
}

getPokemon();
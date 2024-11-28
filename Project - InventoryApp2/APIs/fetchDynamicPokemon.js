async function fetchPokemonData(pokemonName) {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
  
      if (!response.ok) {
        console.log(`Pokémon ${pokemonName} not found.`);
        return null;
      }
  
      const data = await response.json();
      const imgUrl = data.sprites.front_default;
  
      return imgUrl || null;
    } catch (error) {
      console.log("Error in fetchPokemonData()", error);
      return null;
    }
  }

export default fetchPokemonData;

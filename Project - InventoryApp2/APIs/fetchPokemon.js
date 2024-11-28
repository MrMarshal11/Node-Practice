async function getPokemonImg(pokemonName) {
  try {
    const url = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const data = await url.json();
    const toImg = data.sprites.front_default
    console.log(toImg)
    return toImg;
  } catch (error) {
    console.log("error at getPokemonImg()", error);
  }
}

export default getPokemonImg;
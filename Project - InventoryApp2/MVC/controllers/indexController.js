import getPokemonImg from "../../APIs/fetchPokemon.js";

const temporaryPokemonArr = ['charizard', 'eevee', 'rayquaza'];

async function initialRender(req, res) {
    try {
        const charmanderImg = await getPokemonImg(temporaryPokemonArr[0]);
        const eeveeImg = await getPokemonImg(temporaryPokemonArr[1]);
        const rayquazaImg = await getPokemonImg(temporaryPokemonArr[2]);

        console.log(charmanderImg);
        res.render("index", {charmanderImg, eeveeImg, rayquazaImg});
    } catch (error) {
        console.log('error at initialRender()', error)
    }
} 

export default initialRender;
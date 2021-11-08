// POKEDEX PROJECT

const pokeContainer = document.querySelector (`#container`);

// Number of Pokemon (AKA Objects) in the PokeAPI
const numOfPokemon = 150;

function createPokeCard(pokemon) {
    const pokeCard = document.createElement(   `selection`);
    pokeCard.classList.add(`pokemon`);
    pokeContainer.append(pokeCard);

    pokeCard.innerHTML = `
    <div class = "img-container"
    `
}
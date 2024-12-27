const formulario = document
  .getElementById("formularioPokemon");
  
formulario.addEventListener("submit", async (event) => {
    event.preventDefault();
    const nombrePokemon = document
      .getElementById("nombrePokemon")
      .value.toLowerCase();
    const contenedorPokemon = document.getElementById("contenedorPokemon");
    contenedorPokemon.innerHTML = "";

    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`
      );
      if (!response.ok) throw new Error("Pokémon no encontrado");
      const data = await response.json();

      const pokemonHTML = `
      <h2>${data.name}</h2>
      <img src="${data.sprites.front_default}" alt="${data.name}">
      <p>Altura: ${data.height}</p>
      <p>Peso: ${data.weight}</p>
      <p>Experiencia Base: ${data.base_experience}</p>
    `;
      contenedorPokemon.innerHTML = pokemonHTML;
    } catch (error) {
      contenedorPokemon.innerHTML = `<p>${error.message}</p>`;
    } finally {
      console.log("Petición finalizada");
    }
  });
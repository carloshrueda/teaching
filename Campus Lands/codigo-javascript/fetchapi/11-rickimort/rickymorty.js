  function getCharacters(done) {
    const result = fetch("https://rickandmortyapi.com/api/character");

    result
      .then((resp) => resp.json())
      .then((data) => {
        done(data); //Dones es la función callback con la cual se llama en la línea 11
      });
  }

  getCharacters(data => {
    data.results.forEach(personaje => {
      // console.log(personaje.image);
      const article = document.createRange().createContextualFragment(`
          <article>
              <div class="image-container">
                  <img src="${personaje.image}" alt="Personaje">
              </div>
              <h2>${personaje.name}</h2>
              <span>${personaje.status}</span>
          </article>
      `);

      const main = document.querySelector("main");
      main.append(article);
    });
  });

const api_url = "https://randomuser.me/api/?results=4";

async function getUsers() {
  try {
    // Realizando una llamada a la API (solicitud)
    // y obteniendo la respuesta
    const response = await fetch(api_url);
    // Analizando a formato JSON
    const data = await response.json();
    console.log(data.results);

    // Recuperando datos de los usuarios
    const users = data.results;
    const userContainer = document.querySelector('.user-container');

    users.forEach(user => {
      const userBox = createUserCard(user);
      // Agregando el contenedor del usuario al contenedor principal
      userContainer.appendChild(userBox);
    });
  } catch (error) {
    console.error('Error al obtener los usuarios:', error);
  }
}

function createUserCard(user) {
  // desestructurando objetos
  const { title, first, last } = user.name;
  const { gender, email, phone } = user;
  const image = user.picture.large;
  const age = user.dob.age;
  const { city, state, country } = user.location;
  const fullName = `${title}. ${first} ${last}`;

  // Creando el contenedor del usuario
  const userBox = document.createElement('div');
  userBox.classList.add('user-box');

  // Agregando contenido al contenedor del usuario
  const range = document.createRange();
  const fragment = range.createContextualFragment(`
    <h2>${fullName}</h2>
    <img src="${image}" alt="${fullName}">
    <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
    <p><strong>Teléfono:</strong> <a href="tel:${phone}">${phone}</a></p>
    <p><strong>Edad:</strong> ${age}</p>
    <p><strong>Género:</strong> ${gender}</p>
    <p><strong>Ubicación:</strong> ${city}, ${state}</p>
    <p><strong>País:</strong> ${country}</p>
  `);
  userBox.appendChild(fragment);

  return userBox;
}

// Llamando a la función
getUsers();

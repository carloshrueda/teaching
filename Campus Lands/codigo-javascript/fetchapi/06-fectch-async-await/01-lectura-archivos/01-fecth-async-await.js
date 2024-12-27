const peticion = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    const error = new Error(`[OCURRIO UN ERROR]: ${response.status}`);
    error.status = response.status; // Agregar el status al objeto Error
    throw error;
  }
  const data = await response.text();
  return data;
};

const main = async () => {
    const resultOk = await peticion("datos.csv");
    console.log("[OK]\n", resultOk);
    
    const resultError = await peticion("archivoNoExiste.txt");
};

main();

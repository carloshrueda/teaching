const doTask = async (iterations) => {
  const numbers = [];

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      for (let i = 0; i < iterations; i++) {
        const number = 1 + Math.floor(Math.random() * 6);
        numbers.push(number);
        if (number === 6) {
          resolve({
            error: true,
            iter: i + 1,
            message: "Se ha sacado un 6",
          });
        }
      }

      resolve({
        error: false,
        value: numbers,
      });
    }, 2000);
  });
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const doTask2 = async (iterations) => {
  const numbers = [];

    return (async () => {
    for (let i = 0; i < iterations; i++) {
         
      const number = 1 + Math.floor(Math.random() * 6);
      await sleep(1000);
      console.log(". " + number);
      numbers.push(number);
      if (number === 6) {    
        return {
          error: true,
          iter: i + 1,
          message: "Se ha sacado un 6",
        };
      }
    }

    return {
      error: false,
      value: numbers,
    };
  })();

  
};

// doTask(10)
//     .then(rta => console.log(rta));

// (async (callback, veces) => {
//     const rta = await callback(veces);
//     console.log(rta);
// })(doTask, 10);

(async () => {
  let rta = await doTask2(1000);
  console.log(rta);
})();

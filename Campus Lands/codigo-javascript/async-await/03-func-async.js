const doTask = async (iterations) => {
    const numbers = [];

    for (let i = 0; i < iterations; i++) {
        const number = 1 + Math.floor(Math.random() * 6);
        numbers.push(number);
        if (number === 6) {
            return {
                error: true,
                iter: i+1,
                message: "Se ha sacado un 6"
            };
        }
    }

    return {
        error: false,
        value: numbers
    };
}

const resultado = await doTask(10);
console.log(resultado);




// ------------------------------------------------------



// function sincrona() { return 42; }
// async function asincrona() { return 42; }

// const sincrona = () => 42;
// const asincrona = (async () => 42)();

// console.log(sincrona());   // 42
// console.log(asincrona);  // Promise <fulfilled>: 42
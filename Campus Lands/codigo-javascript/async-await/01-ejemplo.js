const fs = require('fs').promises;

async function fetchData() {
    try {
        const data = await fs.readFile('robots.txt', 'utf-8');
        return data;
    } catch (error) {
        console.error('Error al leer el archivo:', error.message);
    }
}

async function saveData(text) {
    try {
        await fs.writeFile('robots.txt', text, 'utf-8');
    } catch (error) {
        console.error('Error al leer el archivo:', error.message);
    }
}

/*
fetchData()
    .then(text => {
        let data = text;
        data += '\n\nescribiendo datos';
        console.log("Guardando datos síncrono.");
        saveData(data)
            .then(()=> {
                console.log("---------------------");
                console.log("Código síncrono.");
                fetchData()
                    .then(text => {
                        console.log(text);
                    })
                    .catch(error => console.error(error));
            })
            .catch(error => console.error(error));
    })
    .catch(error => console.error(error));
*/

(async function() {
    try {
        let text = await fetchData();
        let data = text;
        data += '\n\nescribiendo datos';
        console.log("Guardando datos síncrono.");
        await saveData(data);
        console.log("---------------------");
        console.log("Leyendo datos síncrono.");
        console.log("---------------------");
        text = await fetchData();
        console.log(text);
    } catch (error) {
        onsole.error(error)
    }
    
})()
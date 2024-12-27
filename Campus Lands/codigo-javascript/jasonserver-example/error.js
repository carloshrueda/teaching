let arr_per = [];

const info_api = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    //arr_per = await data.results.map(element => element);
    arr_per = JSON.parse(JSON.stringify(data.results));
}

// function f2() {
//     arr_per.push(1);
// }

// info_api()
// f2();
// console.log(arr_per);

info_api()
    .then(() => console.log(arr_per)  );






    // await fetch("https://rickandmortyapi.com/api/character")
    // .then(response => response.json())
    // .then(data => {
    //     const results = data.results;
    //     results.forEach(element => {
    //         arr_per.push(element);
    //         //console.log(element);     
    //     });

    //     //console.table(arr_per)
    // })
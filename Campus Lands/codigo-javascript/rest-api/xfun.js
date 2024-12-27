
const url = 'https://porn-movies.p.rapidapi.com/index.php?id=1';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '681242d15bmsh7371b234b5901b9p1747f9jsn143a074611b9',
		'X-RapidAPI-Host': 'porn-movies.p.rapidapi.com'
	}
};

(async () => {
	try {
		const response = await fetch(url, options);
		const result = await response.text();
		console.log(result);
	} catch (error) {
		console.error(error);
	}	
})();






// const url = 'https://steppschuh-json-porn-v1.p.rapidapi.com/search/?q=Anal';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '8c7286110cmsh692627614fed266p132789jsn05784a2f8e13',
// 		'X-RapidAPI-Host': 'steppschuh-json-porn-v1.p.rapidapi.com'
// 	}
// };

// async function xfun() {
//     try {
//     	const response = await fetch(url, options);
//     	const result = await response.text();
//     	console.log(result);
//     } catch (error) {
//     	console.error(error);
//     }
// }

// xfun();

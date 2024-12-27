// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token = 'BQC-Eu-CC250uTe8OHLwFW_h9Iu6UUMyIIiiTA0yVGwmB9ePqBmH40BUdFP-H1qV_yTWebH_pyg4jJrYhJWOVPfYkns7wkmWSLdfKaqctDXPq_EQd1Rsp_awqLG9_qCKk_QKJ9Ycq-yXr0NbHV61CeLMliLxqF3O8XmoWD_-louznJNIqXrt6jzqknp8kYPZdK_FFb9uCqeWY0U5Yr91PU0SkC-KoRmQk82EjzmZj9LJWG_fQfv7r0qBz3o';
async function fetchWebApi(endpoint, method, body) {
    const res = await fetch(`https://api.spotify.com/${endpoint}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        method,
        body: JSON.stringify(body)
    });
    return await res.json();
}

async function getTopTracks() {
    // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
    return (await fetchWebApi(
        'v1/me/top/tracks?time_range=long_term&limit=5', 'GET'
    )).items;
}

getTopTracks()
    .then(topTracks => console.log(
        topTracks?.map(
            ({ name, artists }) =>
                `${name} by ${artists.map(artist => artist.name).join(', ')}`
        )
    ));
/*console.log(
  topTracks?.map(
    ({name, artists}) =>
      `${name} by ${artists.map(artist => artist.name).join(', ')}`
  )
);*/
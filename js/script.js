let pelis = [];
fetch('https://japceibal.github.io/japflix_api/movies-data.json')
    .then(response => response.json())
    .then(data => {
        pelis = data;
        // console.log(pelis);
    });

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btnBuscar").addEventListener("click", () => {
        // console.log(document.getElementById("inputBuscar").value);
        // console.log(pelis.filter((peli) => peli.title.toLowerCase().match(document.getElementById("inputBuscar").value.toLowerCase())))
        document.getElementById("lista").innerHTML = ''
        let queryBusqueda = document.getElementById("inputBuscar").value.toLowerCase()
        for (peli of pelis.filter((peli) => peli.title.toLowerCase().match(queryBusqueda) || peli.tagline.toLowerCase().match(queryBusqueda) || peli.overview.toLowerCase().match(queryBusqueda) || peli.genres.map((g) => g.name.toLowerCase()).includes(queryBusqueda))) {
            let estrellitas = ``
            for (let i = 0; i < Math.round(peli.vote_average / 2); i++){
                estrellitas += `<span class="fa fa-star checked"></span>`
            }
            for (let i = 0; i < 5 - Math.round(peli.vote_average / 2); i++){
                estrellitas += `<span class="fa fa-star" style="color:white"></span>`
            }
            document.getElementById("lista").innerHTML += `<li class="list-group-item bg-dark"><b class="text-white bg-dark">${peli.title}</b>${estrellitas}<br><small class="text-muted bg-dark">${peli.tagline}</small></li>`
        }
    });
});

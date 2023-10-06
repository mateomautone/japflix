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
            document.getElementById("lista").innerHTML += `<li id="${peli.id}" onclick="clickPeli(this.id)" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop" class="list-group-item bg-dark"><b class="text-white bg-dark">${peli.title}</b>${estrellitas}<br><small class="text-muted bg-dark">${peli.tagline}</small></li>`
        }
    });
});

function clickPeli(peliID){
    // console.log(peliID)
    peli = pelis.find((p) => p.id == peliID)
    document.getElementById("offcanvasTopLabel").innerHTML = peli.title
    document.getElementById("offcanvasOverviewPeli").innerHTML = peli.overview
    for (genero of peli.genres){
        document.getElementById("offcanvasGenres").innerHTML += genero.name + " "
    } 
    document.getElementById("offcanvasDropdown").innerHTML = ''
    document.getElementById("offcanvasDropdown").innerHTML += `<li><a class="dropdown-item" href="#">Year: ${peli.release_date}</a></li>`
    document.getElementById("offcanvasDropdown").innerHTML += `<li><a class="dropdown-item" href="#">Runtime: ${peli.runtime} mins</a></li>`
    document.getElementById("offcanvasDropdown").innerHTML += `<li><a class="dropdown-item" href="#">Budget: $${peli.budget}</a></li>`
    document.getElementById("offcanvasDropdown").innerHTML += `<li><a class="dropdown-item" href="#">Revenue: ${peli.revenue}</a></li>`
}

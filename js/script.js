let pelis = [];
fetch('https://japceibal.github.io/japflix_api/movies-data.json')
.then(response => response.json())
.then(data => {
    pelis = data;
    console.log(pelis);
});

function canvas(array){
    document.getElementById("offcanvasTopLabel").innerHTML = `${array.title}`;
    document.getElementById("offcanvasBody").innerHTML = `${array.overview}`;
    document.getElementById("año").innerHTML = `Year: ${array.release_date.substring(0, 4)}`;
    document.getElementById("duracion").innerHTML = `Runtime: ${array.runtime} mins`;
    document.getElementById("presupuesto").innerHTML = `Budget: $${array.budget}`;
    document.getElementById("recaudacion").innerHTML = `Revenue: $${array.revenue}`;
}

document.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("btnBuscar").addEventListener("click", ()=>{
        let peliB = document.getElementById("inputBuscar").value;
        let lista = document.getElementById("lista");
        lista.innerHTML = ``;
        for(let i = 0; i < pelis.length; i++){
            if(pelis[i].title.toLowerCase().includes(peliB) || pelis[i].tagline.toLowerCase().includes(peliB) || pelis[i].overview.toLowerCase().includes(peliB)){
                lista.innerHTML += `<a onclick="canvas(pelis[${i}])" class="list-group-item list-group-item-action class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop"> ${pelis[i].title} </a>`;
            }
        }
    });
})
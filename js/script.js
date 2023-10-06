let pelis = [];
fetch('https://japceibal.github.io/japflix_api/movies-data.json')
.then(response => response.json())
.then(data => {
    pelis = data;
    console.log(pelis);
});

function canvas(array){
    document.getElementById("offcanvasTopLabel").innerHTML = `${array.title}`;
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
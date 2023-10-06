let pelis = [];
fetch('https://japceibal.github.io/japflix_api/movies-data.json')
.then(response => response.json())
.then(data => {
    pelis = data;
    console.log(pelis);
});

document.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("btnBuscar").addEventListener("click", ()=>{
        let peliB = document.getElementById("inputBuscar").value;
        let lista = document.getElementById("lista");
        lista.innerHTML = ``;
        for(let i = 0; i < pelis.length; i++){
            if(pelis[i].title.toLowerCase().includes(peliB) || pelis[i].tagline.toLowerCase().includes(peliB) || pelis[i].overview.toLowerCase().includes(peliB)){
                lista.innerHTML += `<a onclick="" class="list-group-item list-group-item-action"> ${pelis[i].title} </a>`;
            }
        }
    });
})
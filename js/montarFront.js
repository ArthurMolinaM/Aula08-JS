import {
    shows,
    galleryImages
} from "./objetos.js"
//passando o gridshows para a JS, será nele que os cards irão ficar
const gridShows = document.querySelector('#gridShows');

// montando os shows dentro dos cards
shows.forEach(show => {
    gridShows.innerHTML += `
     <div class="col-md-6 col-lg-4 my-3">
            <div class="card">
                <img src="${show.banner}" class="card-img-top" 
                alt="${show.artista}"loading="lazy">
                <div class="card-body">
                    <a href="" class="text-decoration-none text-dark">
                    <h4 class="my-3">${show.artista}</h4>
                <div class="d-flex justify-content-between">
                    <p>Local: ${show.local} </p>
                    <p>Data: ${show.data} </p>
                </div>
                <div class="d-flex justify-content-between">
                    <p>Horário: ${show.horario} </p>
                    <p>Ingresso: ${show.tipo_ingressos} </p>
                </div>
            </a>
            </div>
        </div>
    `
});

const galeria = document.querySelector('#gallery')

// montando a galeria, para isso iremos usar um forIt que ira percorrer o array de imagens , para cada imagem será criado uma tag img com as classes correspondentes

galleryImages.forEach(images => {
    galeria.innerHTML += `
    <a href = "${images.imagem}" data-lightbox ="roadtrip" data-title="${images.descricao}"> 
    <img src="${images.imagem}" alt="" loading="lazy" class="img-gallery">
    </a>
    
    `
})
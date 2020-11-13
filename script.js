/när jag använder let istället för var får jag syntax error:identifier already decleared

var menu = document.getElementById('menu');
var nav = document.getElementById('nav');
var exit = document.getElementById('exit');
var startUrl = 'https://api.punkapi.com/v2/beers/random';

startProgram();

async function startProgram() {
    let data = await fetchData(startUrl)
    let beer = data[0];
    if (beer.image_url != null) {
        beerCard(beer);
    }else
        startProgram();
}
menu.addEventListener('click', function(e) {
    nav.classList.toggle('hide-mobile');
    e.preventDefault();
});

exit.addEventListener('click', function(e) {
    nav.classList.add('hide-mobile');
    e.preventDefault();
});


async function fetchData(startUrl) {
    let res = await fetch(startUrl)
    return res.json();
}

function beerCard(beer) {
     let card = document.querySelector('.crd-container')
    let beerImg = document.createElement('img');
    let beerName = document.createElement('p');
    let seeMore = document.createElement('a');
    let linkText = document.createTextNode('See More');

    beerImg.setAttribute('id', 'img-id');
    beerName.setAttribute('id', 'name-id');
    seeMore.setAttribute('id', 'cmore-id');

    beerImg.src = beer.image_url;
    beerName.textContent = beer.name;
    seeMore.title = 'See More';
    seeMore.href = 'http://google.com';

    seeMore.appendChild(linkText);
    card.appendChild(beerImg);
    card.appendChild(beerName);
    card.appendChild(seeMore);
    
}

//Random Knapp funktionen
var randomButton = document.getElementById('rnd-btn')
.addEventListener('click', async e => {
    let data = await fetchData(startUrl)
    let beer = data[0];
    newCard(beer);
    
})

async function newCard(beer){
    if (beer.image_url != null) {
        document.querySelector('#img-id').src = beer.image_url;
        document.querySelector('#name-id').textContent = beer.name;
        document.querySelector('#cmore-id').href = 'http://google.com';
        
    }else{
        let data = await fetchData(startUrl);
        let beer = data[0];
        newCard(beer);

    }

}

var menu = document.getElementById('menu');
var nav = document.getElementById('nav');
var exit = document.getElementById('exit');
var startUrl = 'https://api.punkapi.com/v2/beers/random';

startProgram();

function prev() {
    const show = document.getElementById('show')
    const now = Number(show.value) - 1
    if (now > 0) {
        hideDiv()
        showDiv(now)
        show.value = now
        document.getElementById('padination_text').innerText = now
    }
}

function next() {
    const show = document.getElementById('show')
    const now = Number(show.value) + 1
    if (now < 11) {
        hideDiv()
        showDiv(now)
        show.value = now
        document.getElementById('padination_text').innerText = now
    }
}

function hideDiv() {
    const divs = [1,2,3,4,5,6,7,8,9,10]
    divs.forEach(function(div) {
        document.getElementById(div).style.display = 'none'
    })
}

function showDiv(div) {
    document.getElementById(div).style.display = 'block'
}


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
var menu = document.getElementById('menu');
var nav = document.getElementById('nav');
var exit = document.getElementById('exit');

menu.addEventListener('click', function(e) {
    nav.classList.toggle('hide-mobile');
    e.preventDefault();
});

exit.addEventListener('click', function(e) {
    nav.classList.add('hide-mobile');
    e.preventDefault();
});





class Beer {
    constructor(name, tagline, description, image_url, brewers_tips, ph) {
        this.name = name;
        this.tagline = tagline;
        this.odescription = description;
        this.image_url = image_url;
        this.brewers_tips = brewers_tips;
        this.ph = ph;
    }
}

class Data {
    constructor(next, beers = [Beer], previous, count) {
        this.next = next;
        this.beers = beers;
        this.previous = previous;
        this.count = count;
    }
}

var page = 1;
let dataa = Data;

function getBeerData() {
    fetch("https://api.punkapi.com/v2/beers?page=1&per_page=10")
        .then(response => response.json())
        .then(data => {
            let beers = [Beer];
            beers = []
            for (i = 0; i < data['results'].length; i++) {
                let people = new People(data['results'][i].name, data['results'][i].taglinne, data['results'][i].description, data['results'][i].image_url, data['results'][i].brewers_tips,
                    data['results'][i].ph);
                beers.push(Beer);
            }
            dataa = new Data(data['next'], beers, data['previous'], data['count']);
            // manageData();
        });
}


function manageData() {
    var table_data = document.getElementById('table_data');
    table_data.innerHTML = "";
    for (i = 0; i < dataa.beers.length; i++) {
        let row = '<tr id= "' + i + '" class="table_row"><td>' + dataa.beers[i].name + '</td></tr>'
        let html = table_data.innerHTML + row;
        table_data.innerHTML = html;
    }
    let count = dataa.count / 10;
    count = Math.ceil(count);
    document.getElementById('padination_text').textContent = page + " / " + count;

    loaderCharacter.style.display = "none";
    character.style.display = "block";
    loaderCharacterDetails.style.display = "none";
    loaderCharacterPlanet.style.display = "none";

    var row = table_data.rows;
    for (var i = 0; i < row.length; i++) {
        row[i].addEventListener('click', tableTrClick);
    }

}
getBeerData()
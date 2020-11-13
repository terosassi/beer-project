
class Data {
  constructor(name, description,image_url,volume,brewers_tips,food_pairing = [],ingredients = [Ingredients]) {
    this.name = name;
    this.description = description;
	this.image_url = image_url;
	this.volume = volume;
	this.brewers_tips = brewers_tips;
	this.food_pairing = food_pairing;
	this.ingredients = ingredients;
  }
}

class Ingredients{
	constructor(name, unit)
	{
		this.name = name;
		this.unit  = unit;
	}
}



let dataBeer = Data; 

var detailss; 
var ingredients; 

ingredients = document.getElementById('ingredients_div');
detailss = document.getElementById('DetailsDivv');
loadBeerAllDetails();

function loadBeerAllDetails()
{
	data = JSON.parse(localStorage.getItem("beer"));
    manageData();
	
	let logo = document.getElementById("logo");
	let name = document.getElementById("beer_name");
	logo.src = data.image_url;
	name.innerHTML = data.name;
	let Details = document.getElementById("details");
	let food_pairing = "";
	for (i = 0; i < data.food_pairing.length; i++) {
		food_pairing = food_pairing + data.food_pairing[i];
	}
	let detailsTxt = "Volume: ".bold()+ data.volume + "<br>" + 
	"Brewers Tips: ".bold()+ data.brewers_tips + "<br>" + 
	"Food Pairing: ".bold()+ food_pairing + "<br>" + 
	"Description: ".bold()+ data.description + "<br>";
	Details.innerHTML = detailsTxt;
	
	
}


function manageData()
{
	var table_data = document.getElementById('ingredients_data');
	table_data.innerHTML = "";
	for (i = 0; i < data.ingredients.length; i++) {
		let row = '<tr id= "'+i+'" class="table_row"><td>'+data.ingredients[i].name+' - '+data.ingredients[i].unit+'</td></tr>'
		let html = table_data.innerHTML + row;
		table_data.innerHTML = html;
	}
	
	
}
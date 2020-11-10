
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


var page = 1;
let data = [Data];
var loader; 

var details;
var previousIndex = 0;
var countToShow = 0;  

loader = document.getElementById('loader');
loader.style.display = "none";
details = document.getElementById('charactersDiv');

let nextBtn = document.getElementById('nextBtn');
nextBtn.addEventListener('click', nextBtnClick);

let tableTr = document.querySelector('table tr');

let previousBtn = document.getElementById('previousBtn');
previousBtn.addEventListener('click', previousBtnClick);


function nextBtnClick()
{
	if(countToShow<data.length && page<Math.ceil( data.length/10 ))
	{
		if(countToShow< data.length)
		{
			previousIndex = countToShow;
		}
		page = page + 1;
		manageNextData();
	}
}

function previousBtnClick()
{
	if(countToShow>0 && page!=1)
	{
		page = page - 1;
		managePreviousData();
	}
}


function tableTrClick()
{
	console.log("Click");
	let index = this.id;
	localStorage.setItem("beer",JSON.stringify(data[index]));
	window.location.href = "details.html"
}
	

function getDataByName()
{
	loader.style.display = "block";
	details.style.display = "none";
	var name=document.getElementById("searchbox").value;
	var url;
	if(name!=""){
		url = "https://api.punkapi.com/v2/beers?beer_name="+name
		fetch(url)
		.then(response => response.json())
		.then(dataa =>
			{
				loadAndManageData(dataa);
			});
	}
	else{
		alert("Please enter name")
	}
	
	
}

function getDataByDate()
{
	loader.style.display = "block";
	details.style.display = "none";
	var name=document.getElementById("dateSearchBox").value;
	name = name.split("-");
	var url;
	if(name!=""){
		url = "https://api.punkapi.com/v2/beers?brewed_before="+name[1]+"-"+name[0]
		console.log(""+url);
		fetch(url)
		.then(response => response.json())
		.then(dataa =>
			{
				loadAndManageData(dataa);
				console.log(""+data.length);
			});
	}
	else{
		alert("Please enter name")
	}
	
	
}

function getDataByHops()
{
	loader.style.display = "block";
	details.style.display = "none";
	var name=document.getElementById("hopsSearchBox").value;
	var url;
	if(name!=""){
		url = "https://api.punkapi.com/v2/beers?hops="+name
		console.log(""+url);
		fetch(url)
		.then(response => response.json())
		.then(dataa =>
			{
				loadAndManageData(dataa);
				console.log(""+data.length);
			});
	}
	else{
		alert("Please enter name")
	}
	
	
}

function getDataByMalt()
{
	loader.style.display = "block";
	details.style.display = "none";
	var name=document.getElementById("maltSearchBox").value;
	var url;
	if(name!=""){
		url = "https://api.punkapi.com/v2/beers?malt="+name
		console.log(""+url);
		fetch(url)
		.then(response => response.json())
		.then(dataa =>
			{
				loadAndManageData(dataa);
				console.log(""+data.length);
			});
	}
	else{
		alert("Please enter name")
	}
	
	
}



function getDataByRandom()
{
	loader.style.display = "block";
	details.style.display = "none";
	name = name.split("-");
	var url;
	url = "https://api.punkapi.com/v2/beers/random"
	console.log(""+url);
	fetch(url)
	.then(response => response.json())
	.then(dataa =>
		{
			loadAndManageData(dataa);
			console.log(""+data.length);
		});
	
	
	
}

function loadAndManageData(dataa)
{
    page = 1;
	previousIndex = 0;
	countToShow = 0;
	data = [];
	for (i = 0; i < dataa.length; i++) {
		let food_pairing = [];
		let ingredients = [Ingredients];
		ingredients = [];
		for (j = 0; j < dataa[i].food_pairing.length; j++) {
			food_pairing.push(dataa[i].food_pairing[j]);
		}
		for (j = 0; j < dataa[i].ingredients.malt.length; j++) {
			ingredients.push(new Ingredients(dataa[i].ingredients.malt[j].name,dataa[i].ingredients.malt[j].amount.value +" "+dataa[i].ingredients.malt[j].amount.unit));
		}
		for (j = 0; j < dataa[i].ingredients.hops.length; j++) {
			ingredients.push(new Ingredients(dataa[i].ingredients.hops[j].name,dataa[i].ingredients.hops[j].amount.value +" "+dataa[i].ingredients.hops[j].amount.unit));
		}
		ingredients.push(new Ingredients(dataa[i].ingredients.yeast,""));
		let dat = new Data(dataa[i].name,dataa[i].description,dataa[i].image_url,dataa[i].volume.value+" "+ dataa[i].volume.unit,
		dataa[i].brewers_tips,food_pairing,ingredients);
		data.push(dat);
	}
	manageNextData();
}

function manageNextData()
{
	var table_data = document.getElementById('table_data');
	table_data.innerHTML = "";
	
	countToShow = countToShow + 10;
	if(countToShow > data.length)
	{
		countToShow = data.length;
	}
	
	for (i = previousIndex; i < countToShow; i++) {
		let row = '<tr id= "'+i+'" class="table_row"><td>'+data[i].name+'</td></tr>'
		let html = table_data.innerHTML + row;
		table_data.innerHTML = html;
	}
	let count = data.length/10;
	count = Math.ceil( count );
	document.getElementById('padination_text').textContent = page + " / " + count;
	
	var row = table_data.rows;
	for (var i = 0; i < row.length; i++) {
        row[i].addEventListener('click', tableTrClick);
    }
	
	//tableTr = document.querySelector('.table_row');
	//tableTr.addEventListener('click', tableTrClick);
	
	loader.style.display = "none";
	details.style.display = "block";

	
	
}

function managePreviousData()
{
	var table_data = document.getElementById('table_data');
	countToShow = countToShow - table_data.rows.length;

	table_data.innerHTML = "";
	previousIndex = previousIndex - 10;
	if(previousIndex < 0){
		previousIndex = 0;
	}
	for (i = previousIndex; i < countToShow; i++) {
		let row = '<tr id= "'+i+'" class="table_row"><td>'+data[i].name+'</td></tr>'
		let html = table_data.innerHTML + row;
		table_data.innerHTML = html;
	}
	let count = data.length/10;
	count = Math.ceil( count );
	document.getElementById('padination_text').textContent = page + " / " + count;
	
	var row = table_data.rows;
	for (var i = 0; i < row.length; i++) {
        row[i].addEventListener('click', tableTrClick);
    }
	
	
	//tableTr = document.querySelector('.table_row');
	//tableTr.addEventListener('click', tableTrClick);
	
	loader.style.display = "none";
	details.style.display = "block";

}

function searchBeersByName(){
	previousIndex = 0;
	countToShow = 0; 
	getDataByName();
}

function searchBeersByDate(){
	previousIndex = 0;
	countToShow = 0; 
	getDataByDate();
}

function searchBeersByRandom(){
	previousIndex = 0;
	countToShow = 0; 
	getDataByRandom();
}

function searchBeersByHops(){
	previousIndex = 0;
	countToShow = 0; 
	getDataByHops();
}

function searchBeersByMalt(){
	previousIndex = 0;
	countToShow = 0; 
	getDataByMalt();
}



/* For Next Page */


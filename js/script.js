let arrayCardObj = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

// dichiarazione variabili 
let arrayVuotoCards = []; //array vuoto

let tipoCard = document.querySelector(".tipo-card"); //tipo di card

let tutteCard = document.querySelector(".tutte-le-card"); //contenitore di tutte le card


//card all'apertura della pagina
for (let i = 0; i <arrayCardObj.length; i++) {
	let objCard = arrayCardObj[i];
	arrayVuotoCards.push(objCard)
}
creazioneCarte();

//crezione option in base ai type degli oggetti
let tipoArray = []; //vaiabile array

for (let i = 0; i < arrayCardObj.length; i++) {

	if (tipoArray.includes (arrayCardObj[i].type) === false) {
		tipoArray.push (arrayCardObj[i].type)
	}
}

for(let i = 0; i < tipoArray.length; i++){
	tipoCard.innerHTML += `<option value="${tipoArray[i]}">${tipoArray[i]}</option>`
}



//creazione delle card
function creazioneCarte() {
    tutteCard.innerHTML = '' 
    for(let i=0; i < arrayVuotoCards.length; i++){ //ciclo per la creazione per ogni i
        tutteCard.innerHTML += (`
		<div class = card> 
		<i class="${arrayCardObj[i].prefix}solid ${arrayCardObj[i].prefix}${arrayCardObj[i].name}" style=color:${arrayCardObj[i].color}></i>
		${arrayCardObj[i].name}
		</div>
		`)    
    }
}


// funzione per cambiare carte selezionando le option
function cambioCardSelezionate() {

    arrayVuotoCards = [] //array vuoto
    let opzioneSelezionata = tipoCard.value //il valore
	
    if(tipoCard.value === "nulla"){   //selezione di tutte
		for (let i = 0; i < arrayCardObj.length; i++) {
			let objCard = arrayCardObj[i]
			arrayVuotoCards.push(objCard)
		}
		
    } else if (tipoCard.value === opzioneSelezionata) {  
		for (let i = 0; i < arrayCardObj.length; i++){
			let objCard = arrayCardObj[i]
			if (objCard.type === opzioneSelezionata){
				arrayVuotoCards.push(objCard)
            } 
        }
    }
    return creazioneCarte();
};








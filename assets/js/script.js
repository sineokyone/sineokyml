
console.log("Закрой эту консоль быстро!!!!"+"\n"+"И вапще не лезь сюда больше понел?!?!?!")

document.querySelector("button").onclick = app;

let searchSystem

function ape(){
	let inq=document.querySelector("input").value
	document.location.href = (searchSystem+inq)
	document.getElementById('valueFromForm').value = '';
	clearSelectSearchSystem()
}

function clearSelectSearchSystem(){
	let select= document.getElementById('searchChange')
	select.selectedIndex = 0
}	
	


function app(){
	const letters = /^[a-zA-Z0-9]+$/;
	
	let inp = document.querySelector("input").value
	
	let ur = (searchSystem + inp)
	
	if((inp =="")||(inp==" ")){
		alert( "Неее братух, мне тут пустышки твои не нужны\nиди-ка погуляй" );
	}else{ 
	
		ape()
	}	
}



// searchSystems


// функция выбора поисковой системы
function searchSystemOne(){
    let selectedSearch = document.getElementById("searchChange").value
    searchSystem = selectedSearch;
		if  (selectedSearch=="none"){
			localStorage.getItem("searchInfo")
			searchSystem = localStorage.getItem("searchInfo");
			document.getElementById('buttonSearchMemory').style.visibility= "hidden";
		}else{
			document.getElementById('buttonSearchMemory').style.visibility ="visible";
		}
	}
function searchMemory(){
	localStorage.setItem("searchInfo", searchSystem);
	function memoryAlert(){
		let sel = document.getElementById("searchChange");
		let nameSearch = sel.options[sel.selectedIndex].text;
		if(nameSearch=="По умолчанию"){
			alert('Для начала выберите поисковую систему!')
		}else{
		alert('Теперь '+nameSearch+' поисковик по умолчанию!')}
	}
	memoryAlert()

}

randomEI1()
function randomEI1() {
	let a
	var chars = [a,"Найди всё что когда-то искал!", "Найдется всё, главное - не переживать", "Поисковики в твоем распоряжении", "И не надейся что я что то не найду:)","Искать в Яндрексе", "Ищи, не стесняйся)"];
	let ass = chars[ Math.floor(Math.random() * chars.length)];
	if (ass!=a){
	let elem = document.getElementById("valueFromForm");
	elem.placeholder = ass
	}else{
		function aiuy(){
			let arr = ["Н","а","й","д","е","т","с","я"," ","в","с","ё","!"];
			let elem = document.getElementById("valueFromForm");
			for(let i=0; i < arr.length; i++) {
				setTimeout(function(){
				elem.placeholder += arr[i];
				if(i >= arr.length){
					i=0;
					}
				}, i*300);
			}
		}
		aiuy()
	}	
}
 

function titleArr(){
	let titleChars = ["Найди всё что когда-то искал!", "Найдется всё, главное - не переживать", "Поисковики в твоем распоряжении", "И не надейся что я что то не найду:)","Искать в Яндрексе", "Ищи, не стесняйся)"];
	let textT = titleChars[ Math.floor(Math.random() * titleChars.length)];
	let titleText = document.title;
	titleText = textT
}
titleArr();
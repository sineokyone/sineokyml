
console.log("Закрой эту консоль быстро!!!!"+"\n"+"И вапще не лезь сюда больше понел?!?!?!")

document.querySelector("button").onclick = app;

let searchSystem

function ape(){
	let inq=document.querySelector("input").value
	document.location.href = (searchSystem+inq)
	document.getElementById('valueFromForm').value = '';
	function clear(){
		let select= document.getElementById('searchChange')
		select.selectedIndex = 0
		}
	clear()
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
}
function searchMemory(){
	localStorage.setItem("searchInfo", searchSystem);
}

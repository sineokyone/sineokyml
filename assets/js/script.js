console.log("Закрой эту консоль быстро!!!!"+"\n"+"И вапще не лезь сюда больше понел?!?!?!")

document.querySelector("button").onclick = app;




function ape(){
	let inq=document.querySelector("input").value
	document.location.href = ('https://yandex.ru/search/?text='+inq)
	document.getElementById('valueFromForm').value = '';
}

	
	


function app(){
	const letters = /^[a-zA-Z0-9]+$/;
	
	let inp = document.querySelector("input").value
	
	let ur = ('https://yandex.ru/search/?text='+ inp)
	
	if((inp =="")||(inp==" ")){
		alert( "Неее братух, мне тут пустышки твои не нужны\nиди-ка погуляй" );
	}else{ 
	
		ape()
	}	
}
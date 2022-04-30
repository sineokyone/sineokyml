function altSearch(){
	alert( "Салат аливейкум!!" );

	const p= prompt('Что над найти?', '');
	const pr = ('index.html');
	const ur = (searchSystem + p);
		
		function poisk(){
		document.location.href = ur;
		clear()
		}


		if(p==null){
		alert("Отменил? -Больше не обращайся..")
		document.location.href = pr;
		}else{sp()
			}



		function sp() {
			if(p==""){ //  -- || - ИЛИ 
			alert( "Неее братух, мне тут пустышки твои не нужны\nиди-ка погуляй" );
			document.location.href = pr;
		}
		else{
			poisk()
			// 	document.location.href = ur;
	// 	alert("Для поиска по запросу: "+ p+"\nНажми ОК" );
		}
		}
}
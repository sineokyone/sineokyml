function changeBG() {
    var selectedBGColor = document.getElementById("bgchoice").value;
    if(selectedBGColor == "1"){
        urlBg()
    }else{
    document.body.style.background = selectedBGColor;
  }
}

function urlBg(){
  let p = prompt('Введите url картинки')
  if(p==null){
    alert("Отменил? -Больше не обращайся..")
    }else{ sp()
        function sp() {
        if(p==""){ //  -- || - ИЛИ 
        alert( "Неее братух, мне тут пустышки твои не нужны\nиди-ка погуляй" );
        }else{document.body.style.background = "url("+p+")";}
        
    }
}
}



function changeBG() {
    var selectedBGColor = document.getElementById("bgchoice").value;
    if(selectedBGColor == "1"){
        urlBg()
    }else{
    document.body.style.background = selectedBGColor;
    localStorage.setItem("background", selectedBGColor);
  }
}

function urlBg(){
  let p = prompt('Введите url картинки')
  let d = ("url("+p+")")
  if(p==""){ //  -- || - ИЛИ 
  alert( "Неее братух, мне тут пустышки твои не нужны\nиди-ка погуляй" );
  }else{document.body.style.background = d;}
  localStorage.setItem("background", d);
        
}



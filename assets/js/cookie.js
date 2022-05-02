window.onload = function () {
    //функции при запуске страницы
    getBackground()
    titleArr()
    // получение и разграничение поисковика(первый поисковик при запуске)
    localStorage.getItem("searchInfo")
    searchSystem = localStorage.getItem("searchInfo");
    if (localStorage.getItem("searchInfo")==null){
     searchSystem = null
    }else{searchSystem = localStorage.getItem("searchInfo");}
}
function getBackground(){
    localStorage.getItem("background")
    let charsBackground = ["https://oir.mobi/uploads/posts/2021-06/1623543771_1-oir_mobi-p-krasivie-vidi-gor-priroda-krasivo-foto-1.jpg", "https://grant-market.ru/upload/iblock/9a1/9a1768415bf958981f495e2721a90c81.jpg", "https://about-planet.ru/images/evropa/strana/norvegia/priroda_norvegii.jpg", "https://w-dog.ru/wallpapers/9/1/493070068614722/nacionalnyj-park-banf-kanada-ozero-ozero-luiza-pejzazh-priroda.jpg","https://i.pinimg.com/originals/a2/d1/61/a2d1611efbb646702f079c11452328c0.jpg", "https://krot.info/uploads/posts/2021-11/1637195288_17-krot-info-p-krasivii-vid-na-more-i-gori-gori-krasivo-f-23.jpg"];
	let imgBackground = charsBackground[ Math.floor(Math.random() * charsBackground.length)];
    if(localStorage.getItem("background")==null){
        document.body.style.background =("url("+imgBackground+") fixed")
        document.body.style.backgroundSize = "cover";
        console.log(imgBackground)
    }else{document.body.style.background = localStorage.getItem("background")
            document.body.style.backgroundSize = "cover"
        }
}
function titleArr(){
	let titleChars = ["Лучший поисковик в мире | Yandrex", "Yandrex сила!", "Поисковик поисковиков | Yandrex", "Найдется даже Атлантида | Yandrex","Яндрекс поиск", "Yandrex"];
	let textT = titleChars[ Math.floor(Math.random() * titleChars.length)];
	document.title = textT
}


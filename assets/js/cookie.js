window.onload = function () {
    localStorage.getItem("background")
document.body.style.background = localStorage.getItem("background")
    // получение и разграничение поисковика(первый поисковик при запуске)
    localStorage.getItem("searchInfo")
    searchSystem = localStorage.getItem("searchInfo");
    if (localStorage.getItem("searchInfo")==null){
        alert("Для начала выберите поисковик"
location.reload()
    }else{searchSystem = localStorage.getItem("searchInfo");}
}

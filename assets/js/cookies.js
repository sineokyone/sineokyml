window.onload = function () {
	localStorage.getItem("background")
    document.body.style.background = localStorage.getItem("background");
	localStorage.getItem("searchInfo")
    searchSystem = localStorage.getItem("searchInfo");
}




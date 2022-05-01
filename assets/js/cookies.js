window.onload = function () {
	localStorage.getItem("background")
    localStorage.getItem("searchInfo")
    document.body.style.background = localStorage.getItem("background");
    searchSystem = localStorage.getItem("searchInfo");
}
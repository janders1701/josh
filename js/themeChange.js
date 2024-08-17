$(".themeChange").on("click", function () {
    if ($(this).hasClass("light-mode")) {
        $("#stylesheet").attr("href", "/josh/css/style.css")
    }
    else if ($(this).hasClass("dark-mode")) {
        $("#stylesheet").attr("href", "/josh/css/darkmode.css") 

    } 
    console.log($("#stylesheet").attr("href"));
}); 



$(".themeChange").on("click", function () {
    if ($(this).hasClass("lightmode")) {
        $("#stylesheet").attr("href", "./css/style.css")
    }
    else if ($(this).hasClass("darkmode")) {
        $("#stylesheet").attr("href", "./css/darkmode.css") 

    } 
    console.log($("#stylesheet").attr("href"));
}); 



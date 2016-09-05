(function () {
    var $sidebarAndWrapper = $("#sidebar","#wrapper");

    $("#sidebarToggle").on("click", function () {
        $("#sidebar").toggleClass("hide-sidebar");
        $("#wrapper").toggleClass("hide-sidebar");
    });

    //var ele = $("#username");
    //ele.text("Shahed");

    //var main = $("#main");
    //$("#main").on("mouseenter", function () {
    //    $("#main").style.backgroundColor = "#888";
    //});

    //$("#main").on("mouseleave", function () {
    //    $("#main").style.backgroundColor = "";
    //});

    //var menuItems = $("ul.menu li a");
    //menuItems.on("click", function () {
    //    alert($(this).text());
    //});
})();
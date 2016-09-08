(function () {
    var sidebarAndWrapper = $("#sidebar, #wrapper");

    $("#sidebarToggle").on("click", function () {
        sidebarAndWrapper.toggleClass("hide-sidebar");
        if (sidebarAndWrapper.hasClass("hide-sidebar")) {
            $(this).text("Show Sidebar");
        } else {
            $(this).text("Hide Sidebar");
        }
    });

    //var ele = $("#username");
    //ele.text("Shahed");

    var main =  $("#main");
    main.on("mouseenter", function () {
        main[0].style.backgroundColor = "#888";
    });

    main.on("mouseleave", function () {
        main[0].style.backgroundColor = "";
    });

    var menuItems = $("ul.menu li a");
    menuItems.on("click", function () {
        alert($(this).text());
    });
})();
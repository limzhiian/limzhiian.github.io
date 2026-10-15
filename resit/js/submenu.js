document.addEventListener("DOMContentLoaded", function () {

    const openMenu = document.getElementById("openMenu");
    const closeMenu = document.getElementById("closeMenu");

    const submenu = document.getElementById("submenu");
    const overlay = document.getElementById("menuOverlay");

    // CHECK ELEMENTS
    if (!openMenu || !closeMenu || !submenu || !overlay) {
        console.error("Submenu elements not found!");
        return;
    }

    // OPEN MENU
    function showMenu() {

        submenu.classList.add("active");
        overlay.classList.add("active");

        openMenu.setAttribute("aria-expanded", "true");
        submenu.setAttribute("aria-hidden", "false");

        closeMenu.focus();

    }

    // CLOSE MENU
    function hideMenu() {

        const focusInside = submenu.contains(document.activeElement);

        submenu.classList.remove("active");
        overlay.classList.remove("active");

        openMenu.setAttribute("aria-expanded", "false");
        submenu.setAttribute("aria-hidden", "true");

        if (focusInside && window.innerWidth <= 1280) {
            openMenu.focus();
        }

    }

    // OPEN BUTTON
    openMenu.addEventListener("click", showMenu);

    // CLOSE BUTTON
    closeMenu.addEventListener("click", hideMenu);

    // CLICK OUTSIDE
    overlay.addEventListener("click", hideMenu);

    // ESCAPE KEY
    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape" &&
            submenu.classList.contains("active")) {

            hideMenu();

        }

    });

    // CLOSE WHEN SCREEN IS ABOVE 1280px
    window.addEventListener("resize", function () {

        if (window.innerWidth > 1280) {
            hideMenu();
        }

    });

});
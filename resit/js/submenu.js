<script>

    document.addEventListener("DOMContentLoaded", function() {

    const openMenu = document.getElementById("openMenu");
    const closeMenu = document.getElementById("closeMenu");

    const submenu = document.getElementById("submenu");
    const overlay = document.getElementById("menuOverlay");

    // CHECK IF ELEMENTS EXIST
    if (!openMenu || !closeMenu || !submenu || !overlay) {
        console.error("Submenu elements not found!");
    return;
    }

    // OPEN MENU
    openMenu.addEventListener("click", function() {

        submenu.classList.add("active");
    overlay.classList.add("active");

    openMenu.setAttribute("aria-expanded", "true");

    });

    // CLOSE MENU
    function hideMenu() {

        submenu.classList.remove("active");
    overlay.classList.remove("active");

    openMenu.setAttribute("aria-expanded", "false");

    }

    closeMenu.addEventListener("click", hideMenu);

    // CLOSE WHEN CLICKING OUTSIDE
    overlay.addEventListener("click", hideMenu);

    // CLOSE WHEN PRESSING ESCAPE
    document.addEventListener("keydown", function(event) {

        if (event.key === "Escape") {
        hideMenu();
        }

    });

    // CLOSE WHEN RETURNING TO DESKTOP
    window.addEventListener("resize", function() {

        if (window.innerWidth > 1280) {
        hideMenu();
        }

    });

});

</script>
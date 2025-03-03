function openNav() {
    let sidenav = document.getElementById("mySidenav");
    sidenav.style.width = "270px";

    // Add event listener only if not already added
    setTimeout(() => {
        document.addEventListener("click", closeNavOutside);
    }, 100);
}

function closeNav() {
    let sidenav = document.getElementById("mySidenav");
    sidenav.style.width = "0";
    document.removeEventListener("click", closeNavOutside);
}

function closeNavOutside(event) {
    let sidebar = document.getElementById("mySidenav");
    let button = document.querySelector(".mobile-btn");

    // Close only if clicking outside sidebar and button
    if (!sidebar.contains(event.target) && event.target !== button) {
        closeNav();
    }
}
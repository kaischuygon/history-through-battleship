/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "calc(var(--side-nav-width)";
    document.getElementById("navbutton").style.visibility = "hidden";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("navbutton").innerHTML = "&#9875; My Ships";
    document.getElementById("navbutton").style.visibility = "visible";
}

/* Set the width of the side navigation to 250px */
function openNav2() {
    document.getElementById("mySidenav2").style.width = "calc(var(--side-nav-width))";
    document.getElementById("navbutton2").style.visibility = "hidden";
}

/* Set the width of the side navigation to 0 */
function closeNav2() {
    document.getElementById("mySidenav2").style.width = "0";
    document.getElementById("navbutton2").style.visibility = "visible";
}

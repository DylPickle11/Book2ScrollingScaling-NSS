const audrey = document.getElementById("audrey")

/*
    Add an event listener to the `document` object to listen
    for the "scroll" event.
*/


function myScroll() {
    /*
        Adjust the width of audrey to be 1/3 the value of
        `window.scrollY`. No lower than 50px, though.
    */

    audrey.style.width = window.scrollY / 3 + "px";

    /*
        Adjust the height of audrey to be 1/4 the value of
        `window.scrollY`. No lower than 100px, though.
    */

    audrey.style.height = window.scrollY / 4 + "px";
}

window.addEventListener("scroll", myScroll)

/*
function myScroll() {
    audrey.style.width = window.scrollY / 3;

    /*
        Adjust the width of audrey to be 1/3 the value of
        `window.scrollY`. No lower than 50px, though.
    */
//audrey.style.width = window.scrollY / (1 /


/*
    Adjust the height of audrey to be 1/4 the value of
    `window.scrollY`. No lower than 100px, though.
*/
//audrey.style.width = window.scrollY / (1 /*/
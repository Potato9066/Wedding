// RSVP
function rsvp() {
    alert("Thank you for submitting your RSVP")
}

// NavBar
function Home() {
    document.getElementById("Main").innerHTML = 
    `<p id='thing'>if i type here does it work</p>`
    document.getElementById("background").className = "Home"
    window.scrollTo(0,0);
}

function Venue() {
    document.getElementById("Main").innerHTML =
    "<p>Felt Mansion</p>"
    document.getElementById("background").className = "Venue"
    window.scrollTo(0,0);
}

function Registry() {
    document.getElementById("Main").innerHTML = 
    "<p>Buy us a gift</p>"
    document.getElementById("background").className = "Registry"
    window.scrollTo(0,0);
}

function Library() {
    document.getElementById("Main").innerHTML =
    "Help our Library Grow"
    document.getElementById("background").className = "Library"
    window.scrollTo(0,0);
}

// Main Page Change
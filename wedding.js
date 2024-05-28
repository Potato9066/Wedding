// RSVP
function rsvp() {
    alert("Thank you for submitting your RSVP")
}

// NavBar
function Home() {
    setHome()
    document.getElementById("background").className = "Home"
    window.scrollTo(0,0);
}

function Venue() {
    setVenue()
    document.getElementById("background").className = "Venue"
    window.scrollTo(0,0);
}

function Registry() {
    setRegistry()
    document.getElementById("background").className = "Registry"
    window.scrollTo(0,0);
}

function Library() {
    setLibrary()
    document.getElementById("background").className = "Library"
    window.scrollTo(0,0);
}

// Main Page Change
function setHome() {
    document.getElementById("Main").innerHTML = 
    `<h3>Get to Know us</h3>`
}

function setVenue() {
    document.getElementById("Main").innerHTML =
    `<h3>Felt Mansion</h3>`
}

function setRegistry() {
    document.getElementById("Main").innerHTML = 
    `<h3>Buy us a Gift!`
}

function setLibrary() {
    document.getElementById("Main").innerHTML =
    `<h3>Help our Library Grow!</h3>`
}
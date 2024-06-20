// RSVP
function rsvp() {
    var name = document.getElementById("myForm").elements[0].value;
    var attending = document.getElementById("myForm").elements[1].value;
    try {
        alert(`${name} is planning on ${attending}`)
    }
    catch {
        alert("it didnt work")
    }
    // finally{
    //     alert(`${name} is planning on ${attending}`)
    // }
}

// NavBar
function Home() {
    window.location.href = "home.html"
}

function Venue() {
    window.location.href = "venue.html"
}

function Registry() {
    window.location.href = "registry.html"
}

function Library() {
    window.location.href = "library.html"
}

function Info() {
    window.location.href = "info.html"
}

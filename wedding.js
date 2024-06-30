// RSVP
const ScriptUrl = "https://script.google.com/macros/s/AKfycby4ocdfVycyBUKc-Ud3uJ5CldKRcqjHbxgeDTw51Gd0-sOfXX8iqFDBp4MQUCRHFm1x/exec"

window.addEventListener("DOMContentLoaded", (event) => {
    const form = document.forms['RSVPform']
    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(ScriptUrl, { method: 'POST', body: new FormData(form)})
            .then(response => alert("Thank you for your RSVP! \nIf you wish to change your RSVP please reach out to us directly." ))
            .then(() => { window.location.reload(); })
            .catch(error => console.error('Error!', error.message))
        })
    }
});

// NavBar
function Home() {
    if (window.location.href.indexOf("index") > -1 || window.location.href.indexOf("home") > -1) {
        return
    }
    else {
        window.location.href = "home.html"
    }
}

function Venue() {
    if (window.location.href.indexOf("venue") > -1){

    }
    else {
        window.location.href = "venue.html"
    }
}

function Registry() {
    if (window.location.href.indexOf("registry") > -1){

    }
    else {
        window.location.href = "registry.html"
    }
}

function Library() {
    if (window.location.href.indexOf("library") > -1){

    }
    else {
        window.location.href = "library.html"
    }
}

function Info() {
    if (window.location.href.indexOf("info") > -1) {

    }
    else {
        window.location.href = "info.html"
    }
}

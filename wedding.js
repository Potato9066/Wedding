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
    else {
        alert("that didnt work")
    }
});

// function rsvp() {
//     alert("Thank you for your RSVP! \nIf you wish to change your RSVP please reach out to us directly.")
// }

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

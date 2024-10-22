// RSVP
const ScriptUrl = "https://script.google.com/macros/s/AKfycby4ocdfVycyBUKc-Ud3uJ5CldKRcqjHbxgeDTw51Gd0-sOfXX8iqFDBp4MQUCRHFm1x/exec"

function onSubmit(token) {
    document.getElementById("myForm").submit();
}

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

//Countdown
var countDownDate = new Date("Jun 29, 2025" ).getTime();

function timeuntil() { 

    // Get today's date and time
    now = new Date().getTime();
      
    // Find the distance between now and the count down date
    distance = countDownDate - now;
      
    // Time calculations for days, hours, minutes and seconds
    days = Math.floor(distance / (1000 * 60 * 60 * 24));
  
      
    // Output the result in an element with id="demo"
    document.getElementById("Countdown").innerHTML = days + " Days to Go!";
      
    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "Time to get Married!";
    }
}

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

// RSVP
const ScriptUrl = "https://script.google.com/macros/s/AKfycby4ocdfVycyBUKc-Ud3uJ5CldKRcqjHbxgeDTw51Gd0-sOfXX8iqFDBp4MQUCRHFm1x/exec"

var Forms = ["FamilyForm"]
var Names = ["FamilyTest"]
 
function onSubmit(token) {
    document.getElementById("FamilyForm").submit();
    document.getElementById("CoupleForm").submit();
    document.getElementById("IndividualForm").submit();
    document.getElementById("PlusForm").submit();
}

window.addEventListener("DOMContentLoaded", (event) => {
    const form = document.forms['FamilyName']
    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(ScriptUrl, { method: 'POST', body: new FormData(form)})
            .then(response => alert("Thank you for your RSVP! \nIf you wish to change your RSVP please reach out to us directly." ))
            .then(() => { window.location.href = "home.html"; })
            .catch(error => console.error('Something went Wrong.\nPlease Try Again', error.message))
        })
    }
});

window.addEventListener("DOMContentLoaded", (event) => {
    const form = document.forms['CoupleName']
    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(ScriptUrl, { method: 'POST', body: new FormData(form)})
            .then(response => alert("Thank you for your RSVP! \nIf you wish to change your RSVP please reach out to us directly." ))
            .then(() => { window.location.href = "home.html"; })
            .catch(error => console.error('Something went Wrong.\nPlease Try Again', error.message))
        })
    }
});

window.addEventListener("DOMContentLoaded", (event) => {
    const form = document.forms['IndividualName']
    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(ScriptUrl, { method: 'POST', body: new FormData(form)})
            .then(response => alert("Thank you for your RSVP! \nIf you wish to change your RSVP please reach out to us directly." ))
            .then(() => { window.location.href = "home.html"; })
            .catch(error => console.error('Something went Wrong.\nPlease Try Again', error.message))
        })
    }
});

window.addEventListener("DOMContentLoaded", (event) => {
    const form = document.forms['PlusName']
    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(ScriptUrl, { method: 'POST', body: new FormData(form)})
            .then(response => alert("Thank you for your RSVP! \nIf you wish to change your RSVP please reach out to us directly." ))
            .then(() => { window.location.href = "home.html"; })
            .catch(error => console.error('Something went Wrong.\nPlease Try Again', error.message))
        })
    }
});

function Remove() {
    document.getElementById("TestCode").style.visibility = "collapse";
}

function Passcode() {
    var Code = document.getElementById("passcode").value;

    switch(Code) {
        case "Family":
            document.getElementById("Family").style.visibility = "visible";
            Remove();
            break;
        case "Couple":
            document.getElementById("Couple").style.visibility = "visible";
            Remove();
            break;
        case "Individual":
            document.getElementById("Individual").style.visibility = "visible";
            Remove();
            break;
        case "PlusOne":
            document.getElementById("PlusOne").style.visibility = "visible";
            Remove();
            break;
        default:
            alert("Try Again")
    }
}

//Countdown
var countDownDate = new Date("Jun 29, 2025 15:00:00" ).getTime();

function timeuntil() { 

    now = new Date().getTime();
      
    distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    days = Math.floor(distance / (1000 * 60 * 60 * 24));
    hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    if (days > 100){
        document.getElementById("Countdown").innerHTML = days + " Days to Go!";
    }
    else if (days > 1){
        document.getElementById("Countdown").innerHTML = days + " Days and " + hours + " Hours to Go!";
    }
    else {
        document.getElementById("Countdown").innerHTML = hours + " Hours and " + minutes + " Minutes to Go!";
    }

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

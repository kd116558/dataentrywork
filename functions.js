
function home() {
    window.location.assign("index.html").void

}

function about() {
    window.location.assign("about.html").void

}
function contact() {
    window.location.assign("contact.html").void

}
function registration() {
    window.location.assign("registration.html").void

}
function registrationf(){
    var a= document.getElementsByClassName("pass").value
    var b= document.getElementsByClassName("conpass").value
    if(a==b) {       
        window.location.assign("");
        alert("You are Registered Now!");
    }
    else{
        alert("Password should be Same")
    }
}


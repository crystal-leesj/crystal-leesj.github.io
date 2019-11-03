window.alert("Welcome!");
function doYouLikeCoffeePromt() {
    var txt;
    var drink = prompt("What is your favorite coffee?", "Cold brew");
    if (drink == null || drink == "") {
        txt = "User cancelled the prompt.";
    } else {
        txt = "Your favorite coffee is " + drink + ".";
    }
    document.getElementById("favorite-coffee").innerHTML = txt;
}
function likeInfoPromt() {
    var txt;
    if (confirm("Thank you for liking my page :)")) {
        txt = "Thank you for liking my page :)";
    } else {
        txt = "I will make it better... :'(";
    }
    document.getElementById("like-info-promt").innerHTML = txt;
}
let d = new Date();
document.getElementById("current-time").innerHTML = d;
// Random Number Generator for Player 1
let randomNum1 = Math.floor(Math.random() * 6) + 1;
let randomImg1 = "images/dice" + randomNum1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImg1);

// Random Number Generator for Player 2
let randomNum2 = Math.floor(Math.random() * 6) + 1;
let randomImg2 = "images/dice" + randomNum2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImg2);


// Giving Action to Play Button
document.querySelector(".btn").addEventListener("click", function () {
    location.reload();
})


// Manupulating DOM
if (randomNum1 > randomNum2) {
    document.querySelector(".result").innerHTML = "Winner: Player 🅰️";
    document.querySelector(".img1").style.cssText = "border: 5px solid green; border-radius: 50px";

} else if (randomNum1 < randomNum2) {
    document.querySelector(".result").innerHTML = "Winner: Player 🅱️";
    document.querySelector(".img2").style.cssText = "border: 5px solid green; border-radius: 50px";

} else {
    document.querySelector(".result").innerHTML = "It's a Tie! 🤝";
    document.querySelectorAll(".img1, .img2").forEach(function(img){
    img.style.cssText = "border: 5px solid green; border-radius: 50px";
    })
}

let randomNum1;
let randomImg1 = "/diceGame/images/dice" + randomNum1 + ".png";

let randomNum2;
let randomImg2 = "/diceGame/images/dice" + randomNum2 + ".png";


const rollDice = () => {
  // Random Number Generator for Player 1
  randomNum1 = Math.floor(Math.random() * 6) + 1;
  randomImg1 = "/diceGame/images/dice" + randomNum1 + ".png";
  document.querySelectorAll("img")[0].setAttribute("src", randomImg1);

  // Random Number Generator for Player 2
  randomNum2 = Math.floor(Math.random() * 6) + 1;
  randomImg2 = "/diceGame/images/dice" + randomNum2 + ".png";
  document.querySelectorAll("img")[1].setAttribute("src", randomImg2);


  if (randomNum1 > randomNum2) {
    document.querySelector(".result").innerHTML = "Winner: Player 🅰";
    document.querySelector(".img1").style.cssText = "border: 5px solid green; border-radius: 20px";
    document.querySelector(".img2").style.cssText = "none";
  } else if (randomNum1 < randomNum2) {
    document.querySelector(".result").innerHTML = "Winner: Player 🅱";
    document.querySelector(".img2").style.cssText = "border: 5px solid green; border-radius: 20px";
    document.querySelector(".img1").style.cssText = "none";

  } else {
    document.querySelector(".result").innerHTML = "It's a Tie!";
    document.querySelectorAll(".img1, .img2").forEach(function(img){
      img.style.cssText = "border: 5px solid pink; border-radius: 20px";
    });
  }
};

document.querySelector(".btn").addEventListener("click", rollDice);
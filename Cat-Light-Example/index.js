function switchON(){
    document.getElementById("bulbImg").src="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("text").textContent="Switched On";
    
    document.getElementById("catImage").src="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("Off-Switch").style.backgroundColor='#e12d39';
    document.getElementById("On-Switch").style.backgroundColor='#cbd2d9';


}

function switchOff(){
    document.getElementById("bulbImg").src="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("text").textContent="Switched Off";

    document.getElementById("catImage").src="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";

      document.getElementById("On-Switch").style.backgroundColor = "#22c55e";
  document.getElementById("Off-Switch").style.backgroundColor = "#cbd2d9";
}
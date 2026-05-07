function BulbON() {
  document.getElementById("bulb1").style.backgroundColor = "yellow";
}

function BulbOFF() {
  document.getElementById("bulb1").style.backgroundColor = "white";
}

function BulbRed() {
  document.getElementById("bulb1").style.backgroundColor = "red";
}
function BulbBlue() {
  document.getElementById("bulb1").style.backgroundColor = "blue";
}
function BulbGreen() {
  document.getElementById("bulb1").style.backgroundColor = "green";
}

//roundabout way by using EventLuistener since doing changes is not safe
document.getElementById("bulbRed").addEventListener("click", BulbRed);
document.getElementById("bulbBlue").addEventListener("click", BulbBlue);
document.getElementById("bulbGreen").addEventListener("click", BulbGreen);


function ChanegBulbColor() {
  const color = document.getElementById("Bulb1").value;
  document.getElementById("bulb1").style.backgroundColor = color;
}

document.getElementById("Bulb1").addEventListener("change", ChanegBulbColor);

function reset()
{
    window.location.reload();
}
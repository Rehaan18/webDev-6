function ChangeBackGroundColor()
{
  const color = document.getElementById("bgCol").value;
  document.getElementById("box2").style.backgroundColor = color;
}
document.getElementById("bgCol").addEventListener("change", ChangeBackGroundColor);



function ChangeHeadingColor()
{
  const color = document.getElementById("hcol").value;
  document.getElementById("HCol").style.color = color;
}
document.getElementById("hcol").addEventListener("change", ChangeHeadingColor);



function ChangeParagraphColor()
{
  const color = document.getElementById("pcol").value;
  document.getElementById("PCol").style.color = color;
}
document.getElementById("pcol").addEventListener("change", ChangeParagraphColor);


function reset()
{
    window.location.reload();
}

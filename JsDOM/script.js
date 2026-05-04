function Submit() {
  console.log("Button Clicked");

  const fn = document.getElementById("fullname").value;  //all data of input feild can be fetched by .value only but radio and checkbox value can not be fetched by .value
  console.log(fn);

  document.getElementById("myData").innerText = fn;
  document.getElementById("fullname").value = " ";

  document.getElementById("dataCard").classList.add("divShow");
  document.getElementById("dataCard").classList.remove("divHide");

  
}

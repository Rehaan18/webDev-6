document.querySelector("form").addEventListener("submit",(event)=>
{
    event.preventDefault();
    const dob = document.getElementById("DOB").value;
    const CurDate = document.getElementById("CUrrentDate").value;



     const age = Number(CurDate.split("-")[0])-Number(dob.split("-")[0]);
     console.log(age);
    
     document.getElementById("DOB").value = "";
     document.getElementById("CUrrentDate").value = "";
     document.getElementById("MyAge").innerText = age;


} );
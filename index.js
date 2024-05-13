

document.querySelector("#form").addEventListener("submit", submitFun);


function submitFun(elme) {
    elme.preventDefault();
    username = document.querySelector("#name").value;
    password =  document.querySelector("#password").value;

    if (username == "sachin" && password == "sachin@123") {
       
        window.location.href = "student.html";
        
    } 
    else if (username == "saikat" && password == "saikat@123") {
       
        window.location.href = "student.html";
        
    } 
    else if (username == "samata" && password == "samata@123") {
       
        window.location.href = "student.html";
        
    } 
    else if (username == "sampriti" && password == "sampriti@123") {
       
        window.location.href = "student.html";
        
    } 
    else if (username == "sanchari" && password == "sanchari@123") {
       
        window.location.href = "student.html";
        
    } 
    else {
        alert("Invalid username or password");
        document.querySelector("#form").reset();
    }

}




document.addEventListener("DOMContentLoaded", function() {
     var modal = document.getElementById("trigger-modal");
     var signupBtn = document.getElementById("signup");
     var closeBtn = document.getElementsByClassName("close")[0];
 
     signupBtn.addEventListener("click", function() {
         modal.style.display = "block";
     });
 
     closeBtn.addEventListener("click", function() {
         modal.style.display = "none";
     });
 
     window.addEventListener("click", function(event) {
         if (event.target == modal) {
             modal.style.display = "none";
         }
     });
 
     document.getElementById("signup-form").addEventListener("submit", function(event) {
         event.preventDefault();
         console.log("Form submitted!");
         modal.style.display = "none";
     });
 });
 
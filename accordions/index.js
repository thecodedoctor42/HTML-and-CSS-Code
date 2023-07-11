const accordion = document.getElementsByClassName("accordion");
const panel = document.getElementsByClassName("panel");
console.log(panel)

for (let i=0; i<accordion.length; i++){
    accordion[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        accordion[i].classList.toggle('active')

        /* Toggle between hiding and showing the active panel */
        if (panel[i].style.display === "block"){
            panel[i].style.display = "none"
        } 
        else {
            panel[i].style.display = "block"
        }
    })
}

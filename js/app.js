import buildCard from "./viewProjects.js";


const buttonAbout = document.getElementById("aboutButton");
const aboutDiv = document.getElementById("divAbout");
const titleMain = document.getElementById("titleId");
const infosScreen = document.getElementById("infoScreen");
const homeButton = document.getElementById("homeButton");

function allButtonsMenu(){
  const allMenuButton = document.querySelectorAll(".buttonMenu")
  const aboutContainer = document.getElementById("divAbout")
  const projectContainer = document.getElementById("divProjects")
  const abilityContainer = document.getElementById("divAbility")
  const contactContainer = document.getElementById("divContact")
  

  
    allMenuButton.forEach(btn => {
      btn.addEventListener("click", () =>{
        titleMain.classList.add("hidden")
        const buttonId = btn.id;
        if (buttonId == "aboutButton") {
            aboutContainer.classList.remove("hidden")
            infosScreen.classList.add("active")
          }else{
            aboutContainer.classList.add("hidden")
          }
           if (buttonId == "projectsButton"){
            projectContainer.classList.remove("hidden")
            infosScreen.classList.add("active")
            buildCard()
           }else{
            projectContainer.classList.add("hidden")
           }
           if (buttonId == "abilityButton"){
            abilityContainer.classList.remove("hidden")
            infosScreen.classList.add("active")
           }else{
            abilityContainer.classList.add("hidden")
           }
           if (buttonId == "contactButton") {
            contactContainer.classList.remove("hidden")
            infosScreen.classList.add("active")
           } else {
            contactContainer.classList.add("hidden")
           }
           if (buttonId == "homeButton") {
            titleMain.classList.remove("hidden")
            infosScreen.classList.remove("active")
           } 
        }
      )
    });
  }


allButtonsMenu();
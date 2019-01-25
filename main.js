var projectList = document.querySelector("#projectList");
var aboutSpiel = document.querySelector("#aboutSpiel");
var projectHeading = document.querySelector("#projects");
var aboutHeading = document.querySelector("#about");
var contactInfo = document.querySelector("#contactInfo");
var contactHeading = document.querySelector("#contact");

projectHeading.addEventListener("click",function() {
  if(projectHeading.classList.contains("selected")) {
    projectList.classList.add("hidden");
    projectHeading.classList.remove("selected");
  } else {
    aboutSpiel.classList.add("hidden");
    aboutHeading.classList.remove("selected");
    contactInfo.classList.add("hidden");
    contactHeading.classList.remove("selected");
    projectList.classList.remove("hidden");
    projectHeading.classList.add("selected");
  }
});

contactHeading.addEventListener("click", function() {
  if(contactHeading.classList.contains("selected")) {
    contactInfo.classList.add("hidden");
    contactHeading.classList.remove("selected");
  } else {
    aboutSpiel.classList.add("hidden");
    aboutHeading.classList.remove("selected");
    contactInfo.classList.remove("hidden");
    contactHeading.classList.add("selected");
    projectList.classList.add("hidden");
    projectHeading.classList.remove("selected");
  }
});

aboutHeading.addEventListener("click", function() {
  if(aboutHeading.classList.contains("selected")) {
    aboutSpiel.classList.add("hidden");
    aboutHeading.classList.remove("selected");
  } else {
    aboutHeading.classList.add("selected");
    aboutSpiel.classList.remove("hidden");
    projectList.classList.add("hidden");
    projectHeading.classList.remove("selected");
    contactInfo.classList.add("hidden");
    contactHeading.classList.remove("selected");
  }
});

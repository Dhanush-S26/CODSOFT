//Selecting project
var project=document.getElementById("project")
project.addEventListener("mouseover",function(event){
    event.target.style.animation="project 1s ease-in-out"
})
project.addEventListener("mouseout",function(event){
    event.target.style.animation="none"
})
//Selecting resume
var resume=document.getElementById("resume")
resume.addEventListener("mouseover",function(event){
    event.target.style.animation="resume 1s ease-in-out"
})
resume.addEventListener("mouseout",function(event){
    event.target.style.animation="none"
})
//Selecting cv
var cv=document.getElementById("cv")
cv.addEventListener("mouseover",function(event){
    event.target.style.fontSize="25px"
    event.target.style.color="red"
})
cv.addEventListener("mouseout",function(event){
    event.target.style.fontSize="20px"
    event.target.style.color="#0000ff"
})
//Selecting skills
var skills=document.querySelector(".skills")
skills.addEventListener("mouseover",function(event){
    event.target.style.animation="skills 2s ease-in-out"
})
skills.addEventListener("mouseout",function(event){
    event.target.style.animation="none"
})
//Selecting conhob
var conhob=document.querySelector(".conhob")
conhob.addEventListener("mouseover",function(event){
    event.target.style.animation="conhob 2s ease-in-out"
})
conhob.addEventListener("mouseout",function(event){
    event.target.style.animation="none"
})
//Selecting linkedin
var linkedin=document.getElementById("linkedin")
linkedin.addEventListener("mouseover",function(event){
    event.target.style.fontSize="35px"
    event.target.style.color="red"
})
linkedin.addEventListener("mouseout",function(event){
    event.target.style.fontSize="25px"
    event.target.style.color="blue"
})
//Selecting github
var github=document.getElementById("github")
github.addEventListener("mouseover",function(event){
    event.target.style.fontSize="35px"
    event.target.style.color="red"
})
github.addEventListener("mouseout",function(event){
    event.target.style.fontSize="25px"
    event.target.style.color="blue"
})
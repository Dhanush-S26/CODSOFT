//Selecting display
var display=document.getElementById("display")
function displaytext(event){
    display.textContent=display.textContent+event.target.textContent;
}
function clearall(){
    display.textContent=""
}
function result(){
    try{
        display.textContent=eval(display.textContent);
    }
    catch{
        display.textContent="ERROR"
    }
}

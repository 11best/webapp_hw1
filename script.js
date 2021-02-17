function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("closebtn").style.fontSize = "25px";
  }
  
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.getElementById("closebtn").style.fontSize = "0";
}

function openSub(){
  document.getElementById("sub-container").style.marginTop = "600px"
}

function closeSub(){
  document.getElementById("sub-container").style.marginTop = "-635px"
}
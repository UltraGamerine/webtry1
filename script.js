

function openNav() {
      document.getElementById("mySidebar").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";


    }
    
    function closeNav() {
      document.getElementById("mySidebar").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
    }
  
/*  
let sideState=0;
function openNav(){
  if (sideState===0){
      document.getElementById("mySidebar").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
      sideState=1;
  } 
else{
      document.getElementById("main").style.marginLeft = 0;
      document.getElementById("mySidebar").style.width = 0;
      sideState=0;

  }
}
*/
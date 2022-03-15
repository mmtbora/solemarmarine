function navkapa(){ 
  var navMain = $(".navbar-collapse");  
      navMain.collapse('hide');
  
}


function myscroll(myID){
  if (document.getElementById(myID).style.display==="none") {
    var offset = jQuery("#services").offset()
    window.scrollTo(0,offset.top);
  } else {
    var offset = jQuery("#"+myID).offset()
    window.scrollTo(0,offset.top);
  }
    
}

function serviskapa(){
  document.getElementById("electroniccontrol").style.display="none";
  document.getElementById("drydockservice").style.display="none";
  document.getElementById("predockingservice").style.display="none";
  document.getElementById("generalservice").style.display="none";
}


var i;
function myFunctionElectronic(i) {
  var x = document.getElementById(i);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  document.getElementById("drydockservice").style.display="none";
  document.getElementById("predockingservice").style.display="none";
  document.getElementById("generalservice").style.display="none";
};


function myFunctionDryDock(i) {
 // document.getElementById(predockingservice).display="none";
  var x = document.getElementById(i);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  document.getElementById("electroniccontrol").style.display="none";
  document.getElementById("predockingservice").style.display="none";
  document.getElementById("generalservice").style.display="none";
};


function myFunctionPreDock(i) {
 // document.getElementById(predockingservice).display="none";
  var x = document.getElementById(i);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  document.getElementById("drydockservice").style.display="none";
  document.getElementById("electroniccontrol").style.display="none";
  document.getElementById("generalservice").style.display="none";
};


function myFunctionGeneral(i) {
 // document.getElementById(predockingservice).display="none";
  var x = document.getElementById(i);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  document.getElementById("drydockservice").style.display="none";
  document.getElementById("predockingservice").style.display="none";
  document.getElementById("electroniccontrol").style.display="none";
};
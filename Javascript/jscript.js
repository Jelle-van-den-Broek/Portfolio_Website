window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}; 

window.onscroll = function() {scrollFunction()};
    
function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("Header").style.height = "10vh";
    document.getElementById("stars").style.visibility = "hidden";
    document.getElementById("stars2").style.visibility = "hidden";
    document.getElementById("stars3").style.visibility = "hidden";
    document.getElementById("Header-Logo").getElementsByTagName("img")[0].style.marginTop = "0vh";
    document.getElementById("Header-Logo").getElementsByTagName("img")[0].style.height = "10vh";
    document.getElementById("Header-Logo").getElementsByTagName("img")[0].style.width = "10vh";
    document.getElementById("Header").style.position = "fixed";
    document.getElementById("Header").style.zIndex = "1000px";
    document.getElementById("Header").style.top = "0";
    document.getElementById("Header-Logo").getElementsByTagName("img")[0].style.marginLeft = "20px";
    
  } else {
    document.getElementById("Header").style.height = "100vh";
    document.getElementById("stars").style.visibility = "visible";
    document.getElementById("stars2").style.visibility = "visible";
    document.getElementById("stars3").style.visibility = "visible";
    document.getElementById("Header-Logo").getElementsByTagName("img")[0].style.marginTop = "35vh";
    document.getElementById("Header-Logo").getElementsByTagName("img")[0].style.height = "300px";
    document.getElementById("Header-Logo").getElementsByTagName("img")[0].style.width = "300px";
    document.getElementById("Header").style.position = "none";
    document.getElementById("Header").style.zIndex = "0px";
    document.getElementById("Header").style.top = "0";
    document.getElementById("Header-Logo").getElementsByTagName("img")[0].style.marginLeft = "200px";
  }
}


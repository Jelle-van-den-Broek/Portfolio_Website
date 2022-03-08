


// Scroll to top when refresh page
if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
} else {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
}

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  // Make header smaller when scoll down
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.getElementById("Header").style.height = "10vh";
    document.getElementById("Header").style.position = "fixed";
    document.getElementById("Header").style.zIndex = "1000px";
    document.getElementById("Header").style.top = "0";

    document.getElementById("stars").style.visibility = "hidden";
    document.getElementById("stars2").style.visibility = "hidden";
    document.getElementById("stars3").style.visibility = "hidden";

    document.getElementById("Header-Logo").getElementsByTagName("img")[0].style.marginTop = "0vh";
    document.getElementById("Header-Logo").getElementsByTagName("img")[0].style.height = "10vh";
    document.getElementById("Header-Logo").getElementsByTagName("img")[0].style.width = "10vh";
    document.getElementById("Header-Logo").getElementsByTagName("img")[0].style.marginLeft = "20px";
    document.getElementById("Header-Logo").getElementsByTagName("img")[0].style.transform = "rotateZ(0deg)";

    document.getElementById("Header-Buttons").style.marginTop = "0vh";
    document.getElementById("Header-Buttons").getElementsByTagName("li")[0].style.marginTop = "20px";
    document.getElementById("Header-Buttons").getElementsByTagName("li")[1].style.marginTop = "20px";
    document.getElementById("Header-Buttons").getElementsByTagName("li")[2].style.marginTop = "20px";
    document.getElementById("Header-Buttons").getElementsByTagName("li")[3].style.marginTop = "20px";

    document.getElementById("Header-Text").style.marginTop = "10px";
    document.getElementById("Header-Text").style.marginLeft = "150px";

    document.getElementById("Header-Text").getElementsByTagName("span")[0].style.fontSize = "30px";
    document.getElementById("Header-Text").getElementsByTagName("span")[1].style.fontSize = "30px";
    document.getElementById("Header-Text").getElementsByTagName("span")[2].style.fontSize = "30px";
    document.getElementById("Header-Text").getElementsByTagName("span")[3].style.fontSize = "30px";
    document.getElementById("Header-Text").getElementsByTagName("span")[4].style.fontSize = "30px";
    document.getElementById("Header-Text").getElementsByTagName("span")[5].style.fontSize = "30px";
    document.getElementById("Header-Text").getElementsByTagName("span")[6].style.fontSize = "30px";
    document.getElementById("Header-Text").getElementsByTagName("span")[7].style.fontSize = "30px";
    document.getElementById("Header-Text").getElementsByTagName("span")[8].style.fontSize = "30px";
    document.getElementById("Header-Text").getElementsByTagName("span")[9].style.fontSize = "30px";
    document.getElementById("Header-Text").getElementsByTagName("span")[10].style.fontSize = "30px";
    document.getElementById("Header-Text").getElementsByTagName("span")[11].style.fontSize = "30px";
    document.getElementById("Header-Text").getElementsByTagName("span")[12].style.fontSize = "30px";
    document.getElementById("Header-Text").getElementsByTagName("span")[13].style.fontSize = "30px";
    document.getElementById("Header-Text").getElementsByTagName("span")[14].style.fontSize = "30px";
    document.getElementById("Header-Text").getElementsByTagName("span")[15].style.fontSize = "30px";
    document.getElementById("Header-Text").getElementsByTagName("span")[16].style.fontSize = "30px";
    document.getElementById("Header-Text").getElementsByTagName("span")[17].style.fontSize = "30px";
    document.getElementById("Header-Text").getElementsByTagName("span")[18].style.fontSize = "30px";
    document.getElementById("Header-Text").getElementsByTagName("span")[19].style.fontSize = "30px";
    document.getElementById("Header-Text").getElementsByTagName("span")[20].style.fontSize = "30px";
    document.getElementById("Header-Text").getElementsByTagName("span")[21].style.fontSize = "30px";
    document.getElementById("Header-Text").getElementsByTagName("span")[22].style.fontSize = "30px";
    document.getElementById("Header-Text").getElementsByTagName("span")[23].style.fontSize = "30px";
    document.getElementById("Header-Text").getElementsByTagName("span")[24].style.fontSize = "30px";
    document.getElementById("Header-Text").getElementsByTagName("span")[25].style.fontSize = "30px";
    document.getElementById("Header-Text").getElementsByTagName("span")[26].style.fontSize = "30px";
    document.getElementById("Header-Text").getElementsByTagName("span")[27].style.fontSize = "30px";
    document.getElementById("Header-Text").getElementsByTagName("span")[28].style.fontSize = "30px";
    document.getElementById("Header-Text").getElementsByTagName("span")[29].style.fontSize = "30px";
    document.getElementById("Header-Text").getElementsByTagName("span")[30].style.fontSize = "30px";
    document.getElementById("Header-Text").getElementsByTagName("span")[31].style.fontSize = "30px";
    document.getElementById("Header-Text").getElementsByTagName("span")[32].style.fontSize = "30px";
    document.getElementById("Header-Text").getElementsByTagName("span")[33].style.fontSize = "30px";
    document.getElementById("Header-Text").getElementsByTagName("span")[34].style.fontSize = "30px";
    document.getElementById("Header-Text").getElementsByTagName("span")[35].style.fontSize = "30px";
    document.getElementById("Header-Text").getElementsByTagName("span")[36].style.fontSize = "30px";


    document.getElementById("Header-Text").getElementsByTagName("span")[0].style.top = "0px";
    document.getElementById("Header-Text").getElementsByTagName("span")[1].style.top = "0px";
    document.getElementById("Header-Text").getElementsByTagName("span")[2].style.top = "0px";
    document.getElementById("Header-Text").getElementsByTagName("span")[3].style.top = "0px";
    document.getElementById("Header-Text").getElementsByTagName("span")[4].style.top = "0px";
    document.getElementById("Header-Text").getElementsByTagName("span")[5].style.top = "0px";
    document.getElementById("Header-Text").getElementsByTagName("span")[6].style.top = "0px";
    document.getElementById("Header-Text").getElementsByTagName("span")[7].style.top = "0px";
    document.getElementById("Header-Text").getElementsByTagName("span")[8].style.top = "0px";
    document.getElementById("Header-Text").getElementsByTagName("span")[9].style.top = "0px";
    document.getElementById("Header-Text").getElementsByTagName("span")[10].style.top = "0px";
    document.getElementById("Header-Text").getElementsByTagName("span")[11].style.top = "0px";
    document.getElementById("Header-Text").getElementsByTagName("span")[12].style.top = "0px";
    document.getElementById("Header-Text").getElementsByTagName("span")[13].style.top = "0px";
    document.getElementById("Header-Text").getElementsByTagName("span")[14].style.top = "0px";
    document.getElementById("Header-Text").getElementsByTagName("span")[15].style.top = "0px";
    document.getElementById("Header-Text").getElementsByTagName("span")[16].style.top = "0px";
    document.getElementById("Header-Text").getElementsByTagName("span")[17].style.top = "0px";
    document.getElementById("Header-Text").getElementsByTagName("span")[18].style.top = "0px";
    document.getElementById("Header-Text").getElementsByTagName("span")[19].style.top = "0px";
    document.getElementById("Header-Text").getElementsByTagName("span")[20].style.top = "0px";
    document.getElementById("Header-Text").getElementsByTagName("span")[21].style.top = "0px";
    document.getElementById("Header-Text").getElementsByTagName("span")[22].style.top = "0px";
    document.getElementById("Header-Text").getElementsByTagName("span")[23].style.top = "0px";
    document.getElementById("Header-Text").getElementsByTagName("span")[24].style.top = "0px";
    document.getElementById("Header-Text").getElementsByTagName("span")[25].style.top = "0px";
    document.getElementById("Header-Text").getElementsByTagName("span")[26].style.top = "0px";
    document.getElementById("Header-Text").getElementsByTagName("span")[27].style.top = "0px";
    document.getElementById("Header-Text").getElementsByTagName("span")[28].style.top = "0px";
    document.getElementById("Header-Text").getElementsByTagName("span")[29].style.top = "0px";
    document.getElementById("Header-Text").getElementsByTagName("span")[30].style.top = "0px";
    document.getElementById("Header-Text").getElementsByTagName("span")[31].style.top = "0px";
    document.getElementById("Header-Text").getElementsByTagName("span")[32].style.top = "0px";
    document.getElementById("Header-Text").getElementsByTagName("span")[33].style.top = "0px";
    document.getElementById("Header-Text").getElementsByTagName("span")[34].style.top = "0px";
    document.getElementById("Header-Text").getElementsByTagName("span")[35].style.top = "0px";
    document.getElementById("Header-Text").getElementsByTagName("span")[36].style.top = "0px";





    // Make header default when scoll up
  } else {
    document.getElementById("Header").style.height = "100vh";
    document.getElementById("Header").style.position = "none";
    document.getElementById("Header").style.zIndex = "0px";
    document.getElementById("Header").style.top = "0";

    document.getElementById("stars").style.visibility = "visible";
    document.getElementById("stars2").style.visibility = "visible";
    document.getElementById("stars3").style.visibility = "visible";

    document.getElementById("Header-Logo").getElementsByTagName("img")[0].style.marginTop = "35vh";
    document.getElementById("Header-Logo").getElementsByTagName("img")[0].style.height = "300px";
    document.getElementById("Header-Logo").getElementsByTagName("img")[0].style.width = "300px";
    document.getElementById("Header-Logo").getElementsByTagName("img")[0].style.marginLeft = "200px";
    document.getElementById("Header-Logo").getElementsByTagName("img")[0].style.transform = "rotateZ(45deg)";

    document.getElementById("Header-Buttons").style.marginTop = "50vh";
    document.getElementById("Header-Buttons").getElementsByTagName("li")[0].style.marginTop = "90px";
    document.getElementById("Header-Buttons").getElementsByTagName("li")[1].style.marginTop = "60px";
    document.getElementById("Header-Buttons").getElementsByTagName("li")[2].style.marginTop = "30px";
    document.getElementById("Header-Buttons").getElementsByTagName("li")[3].style.marginTop = "0px";

    document.getElementById("Header-Text").style.marginTop = "75px";
    document.getElementById("Header-Text").style.marginLeft = "550px";

    document.getElementById("Header-Text").getElementsByTagName("span")[0].style.fontSize = "70px";
    document.getElementById("Header-Text").getElementsByTagName("span")[1].style.fontSize = "70px";
    document.getElementById("Header-Text").getElementsByTagName("span")[2].style.fontSize = "70px";
    document.getElementById("Header-Text").getElementsByTagName("span")[3].style.fontSize = "70px";
    document.getElementById("Header-Text").getElementsByTagName("span")[4].style.fontSize = "70px";
    document.getElementById("Header-Text").getElementsByTagName("span")[5].style.fontSize = "70px";
    document.getElementById("Header-Text").getElementsByTagName("span")[6].style.fontSize = "70px";
    document.getElementById("Header-Text").getElementsByTagName("span")[7].style.fontSize = "70px";
    document.getElementById("Header-Text").getElementsByTagName("span")[8].style.fontSize = "70px";
    document.getElementById("Header-Text").getElementsByTagName("span")[9].style.fontSize = "70px";
    document.getElementById("Header-Text").getElementsByTagName("span")[10].style.fontSize = "70px";
    document.getElementById("Header-Text").getElementsByTagName("span")[11].style.fontSize = "70px";
    document.getElementById("Header-Text").getElementsByTagName("span")[12].style.fontSize = "70px";
    document.getElementById("Header-Text").getElementsByTagName("span")[13].style.fontSize = "70px";
    document.getElementById("Header-Text").getElementsByTagName("span")[14].style.fontSize = "70px";
    document.getElementById("Header-Text").getElementsByTagName("span")[15].style.fontSize = "70px";
    document.getElementById("Header-Text").getElementsByTagName("span")[16].style.fontSize = "70px";
    document.getElementById("Header-Text").getElementsByTagName("span")[17].style.fontSize = "70px";
    document.getElementById("Header-Text").getElementsByTagName("span")[18].style.fontSize = "70px";
    document.getElementById("Header-Text").getElementsByTagName("span")[19].style.fontSize = "70px";
    document.getElementById("Header-Text").getElementsByTagName("span")[20].style.fontSize = "70px";
    document.getElementById("Header-Text").getElementsByTagName("span")[21].style.fontSize = "70px";
    document.getElementById("Header-Text").getElementsByTagName("span")[22].style.fontSize = "70px";
    document.getElementById("Header-Text").getElementsByTagName("span")[23].style.fontSize = "70px";
    document.getElementById("Header-Text").getElementsByTagName("span")[24].style.fontSize = "70px";
    document.getElementById("Header-Text").getElementsByTagName("span")[25].style.fontSize = "70px";
    document.getElementById("Header-Text").getElementsByTagName("span")[26].style.fontSize = "70px";
    document.getElementById("Header-Text").getElementsByTagName("span")[27].style.fontSize = "70px";
    document.getElementById("Header-Text").getElementsByTagName("span")[28].style.fontSize = "70px";
    document.getElementById("Header-Text").getElementsByTagName("span")[29].style.fontSize = "70px";
    document.getElementById("Header-Text").getElementsByTagName("span")[30].style.fontSize = "70px";
    document.getElementById("Header-Text").getElementsByTagName("span")[31].style.fontSize = "70px";
    document.getElementById("Header-Text").getElementsByTagName("span")[32].style.fontSize = "70px";
    document.getElementById("Header-Text").getElementsByTagName("span")[33].style.fontSize = "70px";
    document.getElementById("Header-Text").getElementsByTagName("span")[34].style.fontSize = "70px";
    document.getElementById("Header-Text").getElementsByTagName("span")[35].style.fontSize = "70px";
    document.getElementById("Header-Text").getElementsByTagName("span")[36].style.fontSize = "70px";


    document.getElementById("Header-Text").getElementsByTagName("span")[0].style.top = "160px";
    document.getElementById("Header-Text").getElementsByTagName("span")[1].style.top = "150px";
    document.getElementById("Header-Text").getElementsByTagName("span")[2].style.top = "140px";
    document.getElementById("Header-Text").getElementsByTagName("span")[3].style.top = "130px";
    document.getElementById("Header-Text").getElementsByTagName("span")[4].style.top = "120px";
    document.getElementById("Header-Text").getElementsByTagName("span")[5].style.top = "0px";
    document.getElementById("Header-Text").getElementsByTagName("span")[6].style.top = "110px";
    document.getElementById("Header-Text").getElementsByTagName("span")[7].style.top = "100px";
    document.getElementById("Header-Text").getElementsByTagName("span")[8].style.top = "90px";
    document.getElementById("Header-Text").getElementsByTagName("span")[9].style.top = "0px";
    document.getElementById("Header-Text").getElementsByTagName("span")[10].style.top = "80px";
    document.getElementById("Header-Text").getElementsByTagName("span")[11].style.top = "70px";
    document.getElementById("Header-Text").getElementsByTagName("span")[12].style.top = "60px";
    document.getElementById("Header-Text").getElementsByTagName("span")[13].style.top = "0px";
    document.getElementById("Header-Text").getElementsByTagName("span")[14].style.top = "50px";
    document.getElementById("Header-Text").getElementsByTagName("span")[15].style.top = "40px";
    document.getElementById("Header-Text").getElementsByTagName("span")[16].style.top = "30px";
    document.getElementById("Header-Text").getElementsByTagName("span")[17].style.top = "20px";
    document.getElementById("Header-Text").getElementsByTagName("span")[18].style.top = "10px";
    document.getElementById("Header-Text").getElementsByTagName("span")[19].style.top = "175px";
    document.getElementById("Header-Text").getElementsByTagName("span")[20].style.top = "170px";
    document.getElementById("Header-Text").getElementsByTagName("span")[21].style.top = "165px";
    document.getElementById("Header-Text").getElementsByTagName("span")[22].style.top = "160px";
    document.getElementById("Header-Text").getElementsByTagName("span")[23].style.top = "155px";
    document.getElementById("Header-Text").getElementsByTagName("span")[24].style.top = "150px";
    document.getElementById("Header-Text").getElementsByTagName("span")[25].style.top = "145px";
    document.getElementById("Header-Text").getElementsByTagName("span")[26].style.top = "140px";
    document.getElementById("Header-Text").getElementsByTagName("span")[27].style.top = "0px";
    document.getElementById("Header-Text").getElementsByTagName("span")[28].style.top = "135px";
    document.getElementById("Header-Text").getElementsByTagName("span")[29].style.top = "130px";
    document.getElementById("Header-Text").getElementsByTagName("span")[30].style.top = "125px";
    document.getElementById("Header-Text").getElementsByTagName("span")[31].style.top = "120px";
    document.getElementById("Header-Text").getElementsByTagName("span")[32].style.top = "115px";
    document.getElementById("Header-Text").getElementsByTagName("span")[33].style.top = "110px";
    document.getElementById("Header-Text").getElementsByTagName("span")[34].style.top = "105px";
    document.getElementById("Header-Text").getElementsByTagName("span")[35].style.top = "100px";
    document.getElementById("Header-Text").getElementsByTagName("span")[36].style.top = "95px";
  }
}



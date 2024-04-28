let page=document.querySelector(".content") //Id страницы js

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
}



    let div = document.createElement("div")
    function open_photo(photo) {
        document.getElementById("big-photo").innerHTML =
          ("<img onclick='close_photo()' style='position: fixed; top: 250px; left: 700px; transform: translate(-50%, -50%);max-height:600px; max-widht:300px;' src='" + photo + "'>")
      }
      
      function close_photo() {
        document.getElementById("big-photo").innerHTML = ""
      }
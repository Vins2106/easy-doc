// thanks to W3Schools.com for this script :D

function startIncludes() {
  var z, i, elmnt, file, xhttp;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    file = elmnt.getAttribute("includes");
    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = `Error: cannot load ${file}`;}
          elmnt.removeAttribute("includes");
          startIncludes();
        }
      }      
      xhttp.open("GET", file);
      xhttp.send();
      return;
    }
  }
};
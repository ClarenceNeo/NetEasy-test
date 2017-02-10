function showPic(whichpic) {
  if (!document.getElementById("placeholder")) return false;
  var source = whichpic.getAttribute("href");
  var placeholder = document.getElementById("placeholder");
  if (placeholder.nodeName != "IMG") return false;
  placeholder.setAttribute("src",source);
  // placeholder.src = source; // 另一种写法，可移植性好
  if (document.getElementById("description")) {
    var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";
    var description = document.getElementById("description");
    description.firstChild.nodeValue = text;
  }
  return true;
}
// window.onload = prepareLinks;
// function prepareLinks() {
//   if (!document.getElementsByTagName) return false;
//   var links = document.getElementsByTagName("a");
//   for (var i=0; i<links.length; i++) {
//     if (links[i].getAttribute("class") == "popup") {
//       links[i].onclick = function() {
//         popUp(this.getAttribute("href"));
//         return false;
//       }
//     }
//   }
// }
// function popUp(winURL) {
//   window.open(winURL,"popup","width=320,height=480")
// }

function prepareGallery() {
  if (!document.getElementsByTagName || !document.getElementById) return false;
  if (!document.getElementById("imagegallery")) return false;
  var gallery = document.getElementById("imagegallery");
  var links = gallery.getElementsByTagName("a");
  for ( var i=0; i < links.length; i++) {
    links[i].onclick = function() {
      return !showPic(this);
    }
    // links[i].onkeypress = links[i].onclick;
  }
}

// window.onload = function() {
//   prepareGallery();
// }

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}

addLoadEvent(prepareGallery);

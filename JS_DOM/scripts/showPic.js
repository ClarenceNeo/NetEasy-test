function showPic(whichpic) {
  var source = whichpic.getAttribute("href");
  var placeholder = document.getElementById("placeholder");

  placeholder.setAttribute("src",source);
  // placeholder.src = source; // 另一种写法，可移植性好

  var text = whichpic.getAttribute("title");
  var description = document.getElementById("description");
  description.firstChild.nodeValue = text;
}
window.onload = prepareLinks;
function prepareLinks() {
  if (!document.getElementsByTagName) return false;
  var links = document.getElementsByTagName("a");
  for (var i=0; i<links.length; i++) {
    if (links[i].getAttribute("class") == "popup") {
      links[i].onclick = function() {
        popUp(this.getAttribute("href"));
        return false;
      }
    }
  }
}
function popUp(winURL) {
  window.open(winURL,"popup","width=320,height=480")
}
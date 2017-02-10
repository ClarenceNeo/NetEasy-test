function showPic(whichpic) {
  var source = whichpic.getAttribute("href");
  var placeholder = document.getElementById("placeholder");

  placeholder.setAttribute("src",source);
  // placeholder.src = source; // 另一种写法，可移植性好

  var text = whichpic.getAttribute("title");
  var description = document.getElementById("description");
  description.firstChild.nodeValue = text;
}
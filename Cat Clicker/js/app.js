var elem = document.getElementById('my-elem');
elem.addEventListener('click', function(){
  var num = document.getElementById('change');
  num.childNodes[0].nodeValue++;
}, false)

// $('#my-elem').click(function(e) {
//   $('#change').text(function(index,currentText) {
//     return Number(currentText) + 1;
//   })
// })

window.onload = function(){

  var row = document.getElementById('col');
  var elem2 = document.createElement('div');
  elem2.setAttribute('class', 'col-md-2')
  var img = document.createElement('img');
  img.setAttribute('class', 'img-responsive');
  img.setAttribute('id', 'my-elem2');
  img.setAttribute('src', 'img/cat2.jpg');
  var p = document.createElement('p');
  var span = document.createElement('span');
  span.setAttribute('id', 'change2');
  var text = document.createTextNode("图片被点击了");
  var text2 = document.createTextNode("次");
  var value = document.createTextNode('0');

  span.appendChild(value);
  p.appendChild(text);
  p.appendChild(span);
  p.appendChild(text2);
  elem2.appendChild(img);
  elem2.appendChild(p);
  row.appendChild(elem2);

  var elem3 = document.getElementById('my-elem2');
  elem3.addEventListener('click', function(){
    var num = document.getElementById('change2');
    num.childNodes[0].nodeValue++;
  }, false)

}
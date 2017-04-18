window.addEventListener("load", function(){

  var body = document.getElementsByTagName("body")[0];
  var docFrag = document.createDocumentFragment();
  var Box = crear("caja-1", "bigBox");
  var bigBox1 = crear("caja2", "red");
  var bigBox2 = crear("caja2", "blue");
  var mediumBox1 = crear("caja3","purple");
  var mediumBox2 = crear("caja3", "green");
  var smallBox1 = crear("caja4", "yellow");
  var smallBox2 = crear("caja4", "black");

  mediumBox1.appendChild(smallBox1);
  bigBox1.appendChild(mediumBox1);
  bigBox2.appendChild(smallBox2);
  bigBox2.appendChild(mediumBox2);
  Box.appendChild(bigBox1);
  Box.appendChild(bigBox2);

  docFrag.appendChild(Box);
  body.insertBefore(docFrag, body.childNodes[0]);
});

function crear(clase, id){
  var elemento = document.createElement("div");
      elemento.className = clase;
      elemento.id = id;
      return elemento;
}

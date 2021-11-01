function cnvrt() {
  let text = document.getElementById("cntn").value;
  let textarea = document.getElementById("cntn");
  let buttonc = document.getElementById("buttonc");
  let buttonxa = document.getElementById("buttonxa");
  let buttonxb = document.getElementById("buttonxb");
  let buttonxc = document.getElementById("buttonxc");
  let buttonxd = document.getElementById("buttonxd");
  let phantom = document.getElementById("gst");
  let body = document.getElementById("crps");

  textarea.parentNode.removeChild(textarea);
  buttonc.parentNode.removeChild(buttonc);
  phantom.parentNode.removeChild(phantom);

  let reader = document.createElement("div");

  reader.setAttribute("id", "rdr");

  reader.classList.add("container");

  reader.innerHTML = text;

  document.getElementById("crps").appendChild(reader);

  let ax = document.getElementById("rdr").innerHTML;
  let as = ax.split(".").join(". <br />");

  reader.innerHTML = as;

  body.style.backgroundImage = "url('img/luciferdante2.png')";

  buttonxa.classList.remove("inv");
  buttonxb.classList.remove("inv");
  buttonxc.classList.remove("inv");
  buttonxd.classList.remove("inv");
}
function up() {
  let reader = document.getElementById("rdr");
  style = window.getComputedStyle(reader, null).getPropertyValue("font-size");
  if (parseInt(style) <= 38) {
    reader.style.fontSize = parseInt(style) + 3 + "px";
  }
}
function down() {
  let reader = document.getElementById("rdr");
  style = window.getComputedStyle(reader, null).getPropertyValue("font-size");
  if (parseInt(style) >= 29) {
    reader.style.fontSize = parseInt(style) - 3 + "px";
  }

  console.log(style);
}
function left() {
  let reader = document.getElementById("rdr");
  style = window.getComputedStyle(reader, null).getPropertyValue("width");
  if (parseInt(style) < 585) {
    reader.style.width = parseInt(style) + 80 + "px";
  }
}
function right() {
  let reader = document.getElementById("rdr");
  style = window.getComputedStyle(reader, null).getPropertyValue("width");
  if (parseInt(style) > 345) {
    reader.style.width = parseInt(style) - 80 + "px";
  }
  console.log(style);
}
function color() {
  let reader = document.getElementById("rdr");
  reader.style.color = "#";
}
// 222

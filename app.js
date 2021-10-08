const form = document.querySelector("#container");
const div = document.createElement("div");
const h1 = document.createElement("h1");
h1.innerText = "Login";
const input1 = document.createElement("input");
input1.setAttribute('name', "Login");
input1.setAttribute('id', "username");
input1.setAttribute('placeholder', "Username");
input1.setAttribute('type', "text");
const input2 = document.createElement("input");
input2.setAttribute('name', "Password");
input2.setAttribute('id', "password");
input2.setAttribute('placeholder', "Password");
input2.setAttribute('type', "password");
const input3 = document.createElement("input");
input3.setAttribute('name', "submit");
input3.setAttribute('id', "submit");
input3.setAttribute('value', "Login");
input3.setAttribute('type', "submit");
form.append(div);
div.append(h1,input1,input2,input3);
container.style.margin = "0";
container.style.padding = "0";
container.style.fontFamily = "sans-serif";
div.style.borderRadius = "20px";
div.style.width = "300px";
div.style.padding = "40px";
div.style.position = "absolute";
div.style.top = "50%";
div.style.left = "50%";
div.style.transform = "translate(-50%,-50%)";
div.style.background = "#191919";
div.style.textAlign = "center";
h1.style.color = "white";
h1.style.textTransform = "uppercase";
h1.style.fontWeight = "500";
input1.style.border = "0";
input1.style.background = "none";
input1.style.display = "block";
input1.style.margin = "20px auto";
input1.style.textAlign = "center";
input1.style.border = "2px solid #3498db";
input1.style.padding = "14px 10px";
input1.style.width = "200px";
input1.style.outline = "none";
input1.style.color = "white";
input1.style.borderRadius = "24px";
input1.style.transition = "0 25px";
input2.style.border = "0";
input2.style.background = "none";
input2.style.display = "block";
input2.style.margin = "20px auto";
input2.style.textAlign = "center";
input2.style.border = "2px solid #3498db";
input2.style.padding = "14px 10px";
input2.style.width = "200px";
input2.style.outline = "none";
input2.style.color = "white";
input2.style.borderRadius = "24px";
input2.style.transition = "0 25px";
input3.style.border = "0";
input3.style.background = "none";
input3.style.display = "block";
input3.style.margin = "20px auto";
input3.style.textAlign = "center";
input3.style.border = "2px solid #2ecc71";
input3.style.padding = "14px 10px";
input3.style.width = "200px";
input3.style.outline = "none";
input3.style.color = "white";
input3.style.borderRadius = "24px";
input3.style.transition = "0 25px";
input3.style.cursor = "pointer";
submit.onmouseover = submit.onmouseout = handler;
function handler(event) {
  function str(el) {
    if (!el) return "null"
    return el.className || el.tagName;
  }
  if (event.type == 'mouseover') {
    event.target.style.background = '#2ecc71'
  }
  if (event.type == 'mouseout') {
    event.target.style.background = '#191919'
  }
}
password.onmouseover = password.onmouseout = registretion;
username.onmouseover = username.onmouseout = registretion;
function registretion(event) {
  function str(el) {
    if (!el) return "null"
    return el.className || el.tagName;
  }
  if (event.type == 'mouseover') {
    event.target.style.width = '280px';
	event.target.style.borderColor = '#2ecc71'
	event.target.style.transition = '0.5s linear'
  }
  if (event.type == 'mouseout') {
    event.target.style.width = '200px';
	event.target.style.borderColor = '#3498db'
	event.target.style.transition = '0.5s linear'
  }
}
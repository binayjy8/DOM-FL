// let smallImage = document.getElementsByClassName("oldImg");
// for(let i=0; i<smallImage.length; i++) {
//     smallImage[i].src = "assets/spiderman_img.png";
// }

// console.dir(document.querySelectorAll("p"));

// console.dir(document.querySelectorAll("div a"));

// let links = document.querySelectorAll(".box a");

// for(link of links) {
//     link.style.color = "gray";
// }

// let para = document.createElement("p");
// para.innerText = "hey i'm red!";
// document.querySelector("body").append(para);

// para.classList.add("red");

// let h3 = document.createElement("h3");
// h3.innerText = "i'm a blue h3";
// document.querySelector("body").append(h3);
// h3.classList.add("blue");

// let div = document.createElement("div");
// let h1 = document.createElement("h1");
// let para1 = document.createElement("p");

// h1.innerText = "i'm in a div";
// para1.innerText ="ME TOO";

// div.append(h1);
// div.append(para1);

// div.classList.add("box");
// document.querySelector("body").append(div);

let button = document.createElement("button");
let input = document.createElement("input");

button.innerText = "Click Me";

document.querySelector("body").append(input);
document.querySelector("body").append(button);

button.setAttribute("id", "btn");
input.setAttribute("placeholder", "username");

let btn = document.querySelector("#btn");
btn.classList.add("btnStyle");

let h1 = document.createElement("h1");
h1.innerHTML = "<u>DOM PRACTICE</u>";
document.querySelector("body").append(h1);

let p = document.createElement("p");
p.innerHTML = "Apna College Delta <b>Delta</b> Practice";
document.querySelector("body").append(p);
// document.getElementById("b").addEventListener("click", function () {
//   let textArea = document.getElementById("text-area");
//   if (textArea.style.fontWeight === "bold") {
//     textArea.style.fontWeight = "normal";
//   } else {
//     textArea.style.fontWeight = "bold";
//   }
// });

document.getElementById("b").addEventListener("click", function () {
  let textArea = document.getElementById("text-area");
  if (textArea.style.fontWeight === "bold") {
    textArea.style.fontWeight = "normal";
  } else {
    textArea.style.fontWeight = "bold";
  }
});

document.getElementById("i").addEventListener("click", function () {
  let textArea = document.getElementById("text-area");
  if (textArea.style.fontStyle === "italic") {
    textArea.style.fontStyle = "normal";
  } else {
    textArea.style.fontStyle = "italic";
  }
});

document.getElementById("u").addEventListener("click", function () {
  let textArea = document.getElementById("text-area");
  if (textArea.style.textDecoration === "underline") {
    textArea.style.textDecoration = "none";
  } else {
    textArea.style.textDecoration = "underline";
  }
});

//

document.getElementById("left").addEventListener("click", function () {
  let textArea = document.getElementById("text-area");
  textArea.style.textAlign = "left";
});
document.getElementById("center").addEventListener("click", function () {
  let textArea = document.getElementById("text-area");
  textArea.style.textAlign = "center";
});
document.getElementById("right").addEventListener("click", function () {
  let textArea = document.getElementById("text-area");
  textArea.style.textAlign = "right";
});

// 
document.getElementById('color').addEventListener('input' , function(){
    let textArea = document.getElementById("text-area");
    let color = this.value;
    textArea.style.color = color;

})

document.getElementById("capital-small").addEventListener('click' , function(){
    let textArea = document.getElementById("text-area");

    if (textArea.style.textTransform === "uppercase") {
      textArea.style.textTransform = "lowercase";
    } else {
      textArea.style.textTransform = "uppercase";
    }
});
// 
document.getElementById("number").addEventListener("click", function () {
  let textArea = document.getElementById("text-area");
  let fontSize = this.value + "px";
  textArea.style.fontSize = fontSize;
});
// pageX and pageY are used to get the absolute position of the mouse pointer in the document, and offsetLeft and offsetTop are used to subtract the position from those coordinates to get the relative position of the mouse pointer within the element.

const btnEl = document.querySelector(".btn");

btnEl.addEventListener("mouseover", (event) => {
  const x = event.pageX - btnEl.offsetLeft;
  const y = event.pageY - btnEl.offsetTop;

  btnEl.style.setProperty("--xPos", x + "px");
  btnEl.style.setProperty("--yPos", y + "px");
});



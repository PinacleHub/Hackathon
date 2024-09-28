function changeColor(element) {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    element.style.backgroundColor = randomColor;
  }
  
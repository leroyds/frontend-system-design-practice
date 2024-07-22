const ticTacArray = new Array(3).fill(new Array(3).fill(0));
console.log(ticTacArray)
createTicTacUI();

function createTicTacUI() {
  ticTacArray.forEach((row, index) => {
    const rowDiv = createDivAndAddClass('row');
    row.forEach((col, index) => {
      const colDiv = createDivAndAddClass('col');
      appendChild(rowDiv, colDiv);
    })
    appendChild(document.getElementById('root'), rowDiv);
  })
}

function appendChild(parentElement, childElement) {
  parentElement.appendChild(childElement);
}

function createDivAndAddClass(className) {
  const div = document.createElement('div');
  div.classList.add(className);
  return div;
}
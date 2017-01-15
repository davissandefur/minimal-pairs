const table = document.getElementById("carraroe");

function addTableRows(element){
  const  row = table.insertRow(-1);
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  cell1.innerHTML = `${element.sound1} (${element.word1}) <audio id='${element.word1.split(' ').join('')}'
  src=${element.source1}></audio><button onclick=document.getElementById('${element.word1.split(' ').join('')}').play()>&#9658;</button>`;
  cell2.innerHTML = `${element.sound2} (${element.word2}) <audio id='${element.word2.split(' ').join('')}'
  src=${element.source2}></audio><button onclick=document.getElementById('${element.word2.split(' ').join('')}').play()>&#9658;</button>`;
}

carraroeSounds.forEach(addTableRows);

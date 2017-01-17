const table = document.getElementById("table");

function addTableRows(element){
  const  row = table.insertRow(-1);
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  cell1.innerHTML = `${element.sound1} (${element.word1}) <audio id='${element.word1.split(' ').join('')}'
  src=${element.source1}></audio><button onclick=document.getElementById('${element.word1.split(' ').join('')}').play()>&#9658;</button>`;
  cell2.innerHTML = `${element.sound2} (${element.word2}) <audio id='${element.word2.split(' ').join('')}'
  src=${element.source2}></audio><button onclick=document.getElementById('${element.word2.split(' ').join('')}').play()>&#9658;</button>`;
}

function test(){
  document.getElementById('correct').innerHTML= '';
  const newEl = document.createElement('div');
  const random1 = rand(carraroeSounds.length);
  const random2 = rand(2);
  let source = "source"+random2;
  let word = "word"+random2;
  source = carraroeSounds[random1][source];
  word = carraroeSounds[random1][word];
  console.log(word);

  const div = document.getElementById('answer');
  const HTML1 = `<audio id='${word.split(' ').join('')}' src=${source}></audio>
    <button onclick=document.getElementById('${word.split(' ').join('')}').play()>&#9658;</button>`;
  const HTML2 =  `<input type="text" id="solution" name="answer" placeholder="Your answer here"/>
    <button onclick="check('${word}')">Check</button>`;
  div.innerHTML = HTML1 + HTML2;
}

function check(word){
  console.log(word);
  const div = document.getElementById('correct');
  const solution = document.getElementById('solution').value;
  if(solution===word){
    div.innerHTML = "Congratulations, you are correct! Hit test to get a different word"
    div.classList.add('correct');
  }
  else{
    div.innerHTML = `Sorry, the word was ${word}. Hit test to try a new word.`;
    div.classList.add('incorrect');
  }
}

function rand(upperBound){
  return Math.floor((Math.random()*upperBound)+1);
}


carraroeSounds.forEach(addTableRows);

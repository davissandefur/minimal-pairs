'use strict';

var table = document.getElementById("table");
var sounds = 0;

function loadJS(element) {
    document.getElementById('answer').innerHTML = '';
    toggleHide('');
    removeTableRows();
    if (element.target.value) {
        var newScript = void 0;
        try {
            document.body.removeChild(document.getElementById('lib_lang'));
        } catch (e) {}
        newScript = document.createElement('script');
        newScript.async = 1;
        newScript.id = 'lib_lang';
        newScript.type = 'text/javascript';
        newScript.src = 'Javascript/' + element.target.value + '.js';
        newScript.onload = function () {
            toggleHide(element.target.value);
            sounds.forEach(addTableRows);
            sounds = sounds;
        };
        document.body.appendChild(newScript);
    }
}

function addTableRows(element) {
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = element.sound1 + ' (' + element.word1 + ') <audio id=\'' + element.word1.split(' ').join('') + '\'\n  src=' + element.source1 + '></audio><button onclick=document.getElementById(\'' + element.word1.split(' ').join('') + '\').play()>&#9658;</button>';
    cell2.innerHTML = element.sound2 + ' (' + element.word2 + ') <audio id=\'' + element.word2.split(' ').join('') + '\'\n  src=' + element.source2 + '></audio><button onclick=document.getElementById(\'' + element.word2.split(' ').join('') + '\').play()>&#9658;</button>';
}

function removeTableRows() {
    var count = table.getElementsByTagName('tr').length;
    for (var x = count - 1; x > 0; x--) {
        table.deleteRow(x);
    }
}

function test() {
    document.getElementById('correct').innerHTML = '';
    var newEl = document.createElement('div');
    var random1 = rand(0, sounds.length);
    var random2 = rand(1, 3);
    var source = "source" + random2;
    var word = "word" + random2;
    source = sounds[random1][source];
    word = sounds[random1][word];
    if (word.charAt(0) === '(') {
        word = word.substring(1, word.length - 1);
    }
    var div = document.getElementById('answer');
    var HTML1 = '<audio id=\'' + word.split(' ').join('') + '\' src=' + source + '></audio>\n    <button onclick=document.getElementById(\'' + word.split(' ').join('') + '\').play()>&#9658;</button>';
    var HTML2 = '<input type="text" id="solution" name="answer" placeholder="Your answer here"/>\n    <button onclick="check(\'' + word + '\')">Check</button>';
    div.innerHTML = HTML1 + HTML2;
}

function check(word) {
    var div = document.getElementById('correct');
    div.classList.remove('incorrect', 'correct');
    var solution = document.getElementById('solution').value.toLowerCase();
    if (solution === word) {
        div.innerHTML = "Congratulations, you are correct! Hit test to get a different word";
        div.classList.add('correct');
    } else {
        div.innerHTML = 'Sorry, the word was ' + word + '. Hit test to try a new word.';
        div.classList.add('incorrect');
    }
}

function toggleHide(value) {
    var elements = document.getElementsByClassName('hidden');
    if (value) {
        elements[0].style.display = '';
        elements[1].style.display = '';
    } else {
        elements[0].style.display = 'none';
        elements[1].style.display = 'none';
    }
}

function rand(lowerBound, upperBound) {
    return Math.floor(Math.random() * (upperBound - lowerBound)) + lowerBound;
}

toggleHide();
document.getElementById('minimal').addEventListener('change', loadJS);

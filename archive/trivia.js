/*
*********************I put trivia.js functions into battleship.js for now, to help develop AI ship placement more easily****************************

var correct_answer_index = null;
var selected_box = null;

function selected_button(t) {
    selected_box = t;
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function populate_trivia_modal(q) {
    // console.log(q);
    document.getElementById('triviaModalLabel').innerHTML = q['question'];
    var answerArray = [q['correct_answer'] , q['incorrect_answers'][0], q['incorrect_answers'][1], q['incorrect_answers'][2]];
    shuffleArray(answerArray);
    for(i = 0; i < answerArray.length; i++) {
        var id = 'qText' + (i+1);
        document.getElementById(id).innerHTML = answerArray[i];
        if(answerArray[i] == q['correct_answer']) {
            correct_answer_index = i + 1;
        }
    }
}

function get_triviadb() {
    document.getElementById('submit-button').removeAttribute('disabled');
    document.getElementById('correct-incorrect').innerHTML = '';
    document.getElementById('qRadio1').disabled = false;
    document.getElementById('qRadio2').disabled = false;
    document.getElementById('qRadio3').disabled = false;
    document.getElementById('qRadio4').disabled = false;
    let requestURL = 'https://opentdb.com/api.php?amount=1&category=23&difficulty=easy&type=multiple';
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        const question = request.response;
        populate_trivia_modal(question.results[0]);
    }
}

function validate_answer() {
    document.getElementById('submit-button').setAttribute('disabled','')
    document.getElementById('qRadio1').disabled = true;
    document.getElementById('qRadio2').disabled = true;
    document.getElementById('qRadio3').disabled = true;
    document.getElementById('qRadio4').disabled = true;
    var radios = document.getElementsByName('trivia_radio');
    var selected = null;
    for(i = 0; i < radios.length; i++) {
        if(radios[i].checked) {
            selected = radios[i].value; 
            break;
        }
    }
    if(selected == correct_answer_index) {
        document.getElementById('correct-incorrect').innerHTML = '&check;  Correct';
        selected_box.classList.add('box-hit');
        selected_box.disabled = true;
    } else {
        document.getElementById('correct-incorrect').innerHTML = '&times;  Incorrect';
    }
    document.getElementById('qRadio1').checked = false;
    document.getElementById('qRadio2').checked = false;
    document.getElementById('qRadio3').checked = false;
    document.getElementById('qRadio4').checked = false;
}
*/
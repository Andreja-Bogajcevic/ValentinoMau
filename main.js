
var yesButton = document.getElementsByClassName('button-yes')[0];
var noButton = document.getElementsByClassName('button-no')[0];
var insideCat = document.getElementsByClassName('content')[0];
var pattern = document.getElementsByTagName('body')[0];
var questionText = document.getElementsByClassName('question-text')[0];

var chipiChipi = new Audio('./content/sound/chipi-chipi.wav');
var bananaCry = new Audio('./content/sound/cry-banana-cat.wav');

var yesBtnClicked = false;
var noBtnClicked = false;

yesButton.onmouseover = function(e){
    yesButton.style.backgroundColor = '#faadbe';

}

yesButton.onmouseout = function(e){
    yesButton.style.backgroundColor = 'transparent';

    if (yesBtnClicked == false) {
        yesButton.style.backgroundColor = 'transparent';

        pattern.style.backgroundImage = 'url("./content/images/hearts-pattern.png")'
    }
}

yesButton.onclick = function(e){
    yesButton.style.backgroundColor = 'transparent';

    insideCat.style.backgroundImage = 'url("./content/images/accepted-cat.jpg")'
    questionText.innerHTML = 'Jupi!';
    questionText.style.color = '#ffffff';

    yesButton.style.visibility = 'hidden';
    noButton.style.visibility = 'hidden';

    chipiChipi.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);

    chipiChipi.play();
}

noButton.onmouseover = function(e){
    noButton.style.backgroundColor = '#1e80ff';

    pattern.style.backgroundImage = 'url("./content/images/broken-heart-pattern.png")'
}

noButton.onmouseout = function(e){
    if (noBtnClicked == false) {
        noButton.style.backgroundColor = 'transparent';

        pattern.style.backgroundImage = 'url("./content/images/hearts-pattern.png")'
    }
}

noButton.onclick = function(e){
    insideCat.style.backgroundImage = 'url("./content/images/rejected-cat.jpg")';
    pattern.style.backgroundImage = 'url("./content/images/broken-heart-pattern.png")';
    questionText.innerHTML = 'Nema veze...';

    yesButton.style.visibility = 'hidden';
    noButton.style.visibility = 'hidden';

    noBtnClicked = true;

    bananaCry.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);

    bananaCry.play();
}
var newHead = document.querySelector('h1');
newHead.textContent = 'Hello World!';

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src', 'https://i1.hdslb.com/bfs/archive/868d430029fd697fcd0ae0b9e4b218d097dce0d7.jpg');
    } else {
      myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}
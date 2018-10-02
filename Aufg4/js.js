window.onload = function () {

    var context = new AudioContext();
    var sound1 = new Audio("sound1.wav");
    var sound2 = new Audio("sound2.wav");
    var sound3 = new Audio("sound3.wav");
    var sound4 = new Audio("sound4.wav");
   
    var gainNode = context.createGain();
    var inputEl = document.getElementById("myinput");

    
    document.getElementById("first").addEventListener("click", function() {
        var soundNode = context.createMediaElementSource(sound1);
        soundNode.connect(context);
        soundNode.start();        
        alert(inputEl.value);
    });
    document.getElementById("second").addEventListener("click", function() {
        var soundNode = context.createMediaElementSource(sound2);
        alert(inputEl.value);
    });
    document.getElementById("third").addEventListener("click", function() {
        var soundNode = context.createMediaElementSource(sound3);
        alert(inputEl.value);
    });
    document.getElementById("fourth").addEventListener("click", function() {
        var soundNode = context.createMediaElementSource(sound4);
        
        alert(inputEl.value);
    });
}
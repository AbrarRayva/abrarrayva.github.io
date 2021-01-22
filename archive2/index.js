var countDown = new Date("Jan 1, 2021 00:00:00").getTime();
var x = setInterval(function() {
    var info = "New Year 2021 Countdown : ";
    var now = new Date().getTime();
    var distance = countDown - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = info + days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "It's already 2021!";
    }
}, 1000)


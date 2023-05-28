window.onload = function(){
    setInterval('showTime()', 1000)
}

function showTime() {
    var time = new Date()
    var hour = time.getHours()
    var min = time.getMinutes()
    document.getElementById("time").innerText = hour + ":" + min
}
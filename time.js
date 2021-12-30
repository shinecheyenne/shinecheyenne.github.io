const timenow = document.getElementById('nav-time')

function changeFormat(t){
    return t<10? `0${t}` : t
}
function getTime(){
    const time = new Date()
    const hours = time.getHours()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()

    timenow.innerHTML = `${changeFormat(hours)}:${changeFormat(minutes)}:${changeFormat(seconds)}`
}

setInterval(getTime, 1000)
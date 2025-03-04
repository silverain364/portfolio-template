gsap.from('#intro .char', {
    yPercent:110,
    stagger:0.03, //순서
    duration:.3, //나오는 속도
    ease:'power1'
})
// gsap.from('#intro .char', {
//     yPercent:-110,
//     opacity:0,
//     rotationX:360,
//     stagger:0.03, //순서
//     duration:.3, //나오는 속도
//     ease:'power1'
// })

const koTime = document.querySelector('#koTime')

function updateTime(){
    const koreaTime = new Date().toLocaleTimeString("en-US", {
        timeZone:'Asia/Seoul',
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit',
        hour12:false
    })
    koTime.textContent = koreaTime
}

setInterval(updateTime, 1000)
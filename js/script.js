document.addEventListener('DOMContentLoaded', function () {//start


    const customCursor = document.querySelector('.cursor-wrap')
    const customCursor2 = document.querySelector('.cursor-wrap .cursor')

    const mouseEventEl = document.querySelectorAll('.mouse-event')

    document.addEventListener('mousemove', function (e) {

        // console.log(e.clientX, e.clientY);

        gsap.to(customCursor, {
            x: e.clientX,
            y: e.clientY,
            xPercent: -50,
            yPercent: -50,
            duration: .1,
            opacity: 1
        })

    })

    document.querySelectorAll('a,button').forEach((el) => {
        el.addEventListener('mouseenter', () => {
            gsap.to(customCursor2, {
                scale: .3,
                duration: .1
            })
        })
        el.addEventListener('mouseleave', () => {
            gsap.to(customCursor2, {
                scale: 1,
                duration: .1
            })
        })
    })


    const mouseTl = gsap.timeline({ paused: true })

    mouseTl.to('.cursor-wrap .learn-more ', {
        opacity: 1,
        duration: .1
    })
    
    mouseEventEl.forEach((el => {
        el.addEventListener('mouseenter', () => {
            mouseTl.play()
        })
        el.addEventListener('mouseleave', () => {
            mouseTl.reverse()
        })
    }))


})//end


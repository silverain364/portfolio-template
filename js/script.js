gsap.registerPlugin(ScrollTrigger)

const workList = document.querySelectorAll('.work-list>li')

workList.forEach((work)=> {
    work.addEventListener('mouseenter', ()=> {
        work.classList.add('On')
    })
    //mouseleave

    work.addEventListener('mouseleave', ()=> {
        work.classList.remove('On')
    })
})
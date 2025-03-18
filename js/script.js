gsap.registerPlugin(ScrollTrigger)

let speed = 100
let scene0 = gsap.timeline()
let scene2 = gsap.timeline()


ScrollTrigger.create({
    animation:scene0,
    trigger:'.scrollElement',
    start:'10% top',
    end:'30% 100%',
    scrub:1
})

scene0.to('#s0 .tit-wrap h1 span.t-1', {
    y:0.5 * speed,
    opacity:0,
    ease:'power1.in'
})
scene0.to('.fixedHello', {
    y:0.5 * speed,
    rotation:90,
    ease:'power1.in'
})
scene0.to('#s0 .tit-wrap h1 span.t-2', {
    y:0.5 * speed,
    opacity:1,
    ease:'power1.in'
})

ScrollTrigger.create({
    animation: scene2,
    trigger: '#s2 .rel',
    // markers: true,
    start: 'top 60%',
    end: 'top 20%',
    scrub: 3,
    toggleActions: 'restart none none none',
    /*
        (onEnter, onLeave, onEnterBack, onLeaveBack) 순서로 정의됩니다.
        restart → 요소가 뷰포트에 처음 나타날 때 애니메이션을 다시 시작
        none → 요소가 뷰포트에서 사라질 때는 아무 동작 없음
        none → 요소가 스크롤을 되돌려 다시 등장할 때도 아무 동작 없음
        none → 요소가 반대로 스크롤하여 벗어날 때도 아무 동작 없음
    */
})

// 2
scene2.from('#s2 .tit-wrap>*', {
    x: -50,
    opacity: 0,
    stagger: .3,
    duration: 1,
})
scene2.from('#s2 .img-wrap', {
    x: 50,
    opacity: 0,
    stagger: 1,
    duration: .3,
})


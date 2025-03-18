gsap.registerPlugin(ScrollTrigger)

ScrollTrigger.matchMedia({
    "(min-width:1024px)":function(){
        let item = gsap.utils.toArray('.skill-wrap li ')


        gsap.to(item,{
            xPercent:-100*(item.length-1),
            ease:'none',
            scrollTrigger:{
                trigger:'#s2 .skill-wrap',
                pin:true,
                scrub:1,
                snap:1/(item.length-1)
            }
        })
    }
})


//1

// const scene1 = gsap.timeline({
//     // duration: .5
// })

// ScrollTrigger.create({
//     animation: scene1,
//     trigger: "#s1",
//     start: "top 20%",
//     end: "top 80%",
//     scrub: 1
// })



// scene1.to('#s1 .img-wrap ', {
//     opacity: 1,
//     x: 10
// })
// scene1.to('#s1 .img-wrap .name', {
//     opacity: 1,
//     x: 10
// })
// scene1.to('.pf-con h3', {
//     opacity: 1,
//     x: -10,
//     stagger: .2
// })
// scene1.to('.pf-con dl>*', {
//     opacity: 1,
//     x: -10,
//     stagger: .2,
//     duration: .2
// })
// scene1.to('.skill-list li>*', {
//     opacity: 1,
//     x: -10,
//     stagger: .2,
//     duration: .2
// })
// scene1.to('.pg-wrap .pg.pg1', {
//     width: '70%',
//     delay: -.2,
// })
// scene1.to('.pg-wrap .pg.pg2', {
//     width: '60%',
//     delay: -.2,
// })
// scene1.to('.pg-wrap .pg.pg3', {
//     width: '80%',
//     delay: -.2,
// })
// scene1.to('.pg-wrap .pg.pg4', {
//     width: '90%',
//     delay: -.2,
// })
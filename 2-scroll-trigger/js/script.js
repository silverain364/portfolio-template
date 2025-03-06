gsap.registerPlugin(ScrollTrigger)


const scene1 = gsap.timeline({
    // duration:.5
})

ScrollTrigger.create({
    animation:scene1,
    trigger:"#s1", 
    start:"top 20%",
    end:"top 80%",
    scrub:1
})


scene1.to('#s1 .img-wrap',{
    opacity:1,
    x:10
})
scene1.to('#s1 .img-wrap .name',{
    opacity:1,
    x:10
})
scene1.to('.pg-con h3',{
    opacity:1,
    x:-10,
    stagger:.2
})
scene1.to('.pg-con dl > *',{
    opacity:1,
    x:-10,
    stagger:.2,
    duration:.2
})
scene1.to('.skill-list li > *',{
    opacity:1,
    x:-10,
    stagger:.2,
    duration:.2
})
scene1.to('.pg-wrap .pg.pg1',{
    width:'70%',
    delay:-.5
})
scene1.to('.pg-wrap .pg.pg2',{
    width:'60%',
    delay:-.5
})
scene1.to('.pg-wrap .pg.pg3',{
    width:'80%',
    delay:-.5
})
scene1.to('.pg-wrap .pg.pg4',{
    width:'90%',
    delay:-.5
})
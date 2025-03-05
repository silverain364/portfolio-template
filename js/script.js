document.querySelectorAll('.hover-effect').forEach((element) => {
    element.addEventListener('mousemove', (e) => {
        const { width, height, left, top } = element.getBoundingClientRect();

        const x = ((e.clientX - left - width / 2) / width) * 20; // X축 회전값의 좌우 기울기
        const y = ((e.clientY - top - height / 2) / height) * 20; // Y축 회전값의 좌우 기울기

        // console.log(x, y);
        gsap.to(element, {
            rotateX: x,
            rotateY: y,
            transformPerspective: 1000, // 원근감을 주어 자연스러운 3D 효과 생성
            ease: 'power2.out',
            duration: 0.3
        });

        gsap.to(element.querySelectorAll('span'), {  
            rotateX: () => gsap.utils.random(-5, 5),
            rotateY: () => gsap.utils.random(-5, 5),
            translateZ: () => gsap.utils.random(-10, 10),
            ease: 'power2.out',
            duration: 0.3,
            stagger: 0.5
        });

    });

    element.addEventListener('mouseleave', () => {
        // console.log(x, y);
        gsap.to(element, {
            rotateX: 0,
            rotateY: 0,
            transformPerspective: 1000, // 원근감을 주어 자연스러운 3D 효과 생성
            ease: 'power2.out',
            duration: 0.3
        });

        gsap.to(element.querySelectorAll('span'), { 
            rotateX: 0,
            rotateY: 0,
            translateZ: 0,
            ease: 'power2.out',
            duration: 0.3,
            stagger: 0.5
        });
    });
});

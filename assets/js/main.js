// show menu
const navMenu=document.getElementById('nav-menu');
const navToggle=document.getElementById('nav-toggle');
const navClose=document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}
// remove menu mobile
const navLink=document.querySelectorAll('.nav__link');
const linkAction=()=>{
    const navMenu=document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
    navLink.forEach(n=>n.addEventListener('click',linkAction))
}
// add blue header
const blurHeader=()=>{
    const header=document.getElementById('header');
    this.scrollY>=50 ? header.classList.add('blur-header')
                     : header.classList.remove('blur-header')
}
window.addEventListener('scroll',blurHeader);

// email js
const contactForm=document.getElementById('contact-form');
const contactMessage=document.getElementById('contact-message');
const sendEmail=(e)=>{
    e.preventDefault()
    emailjs.sendForm('service_2a6fo5k','template_qb9e1su','#contact-form','qa-e8wJmDDaEY_-Ym')
    .then(()=>{
        contactMessage.textContent='Message Sent Successfully✅!';
        setTimeout(()=>{
            contactMessage.textContent=''
        },5000)
        contactForm.reset();

    },()=>{
        contactMessage.textContent='Message Not Sent (service error)❌!';

    })
}
contactForm.addEventListener('submit',sendEmail)


// show scroll up
const scrollUp=()=>{
    const scrollUp=document.getElementById('scroll-up')
    this.scrollY>=350 ? scrollUp.classList.add('show-scroll')
                      : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp);
// scroll section active link
const sections=document.querySelectorAll('section[id]');
const srcollActive=()=>{
    const scrollDown=window.scrollY
    sections.forEach(current=>{
        const sectionHeight=current.offsetHeight,
                            sectionTop=current.offsetTop-58,
                            sectionId=current.getAttribute('id'),
                            sectionClass=document.querySelector('.nav__menu a[href*=' + sectionId +']');
        if(scrollDown>sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link');
        }else{
            sectionClass.classList.remove('active-link');
        }                    
    })
}
window.addEventListener('scroll',srcollActive);
// scroll reveal animation
const sr=ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400,
})
sr.reveal(`.home__data, .experience, .skills, .contact__container`);
sr.reveal(`.home__img`,{delay:600});
sr.reveal(`.home__scroll`,{delay:800});
sr.reveal(`.work__card, .services__card`,{interval:100});
sr.reveal(`.about__content`,{origin:'right'});
sr.reveal(`.about__img`,{origin:'left'});

//swiper 
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    // grabCursor:true,
    spaceBetween:30,
    autoplay: {
        delay: 5000,
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets:true
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints:{
        0:{
            slidesPerView:1
        }, 
        620:{
            slidesPerView:2
        },
        1024:{
            slidesPerView:3
        }
    }
 });

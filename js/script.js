let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
}


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })

        };
    });
//--------------------------------sticky navbar--------------------------------------    
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

//------------remove toggle icons and navbar when click navbar link(scroll)--------------
    menuIcon.classList.remove('bx-x');
    navBar.classList.remove('active');
};


//----------------------------------scroll reveal-------------------------------------
ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });

ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });

ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });

ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


//------------------------------Typed Js --------------------------------------
const typed = new Typed('.multiple-text',{
    strings: ["Front-End Developer","Graphics Designer", "UI/UX Designer"],
    typeSpeed: 80,
    backSpeed: 60,
    backDelay: 1000,
    loop: true
})

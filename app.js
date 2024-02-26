
// mouse move body 
let body = document.querySelector('body');
body.addEventListener('mousemove',(e)=>{

    let client  = body.getBoundingClientRect();

    let x = e.clientX - client.left;
    let y = e.clientY - client.top;

    body.style.setProperty('--mouse-x',`${x}px`);
    body.style.setProperty('--mouse-y',`${y}px`);
});

let cardscontainer = document.querySelector('.projet-concu');
cardscontainer.addEventListener('mousemove',(e)=>{

    for (const card of document.querySelectorAll('.projet')) {
        card.addEventListener('mousemove',(e)=>{
            let client  = card.getBoundingClientRect();

            let x = e.clientX - client.left;
            let y = e.clientY - client.top;

            card.style.setProperty('--mouse-x',`${x}px`);
            card.style.setProperty('--mouse-y',`${y}px`);
        });
    }
});

// navigation
let liste_1  = document.querySelector('.liste1');
let liste_2  = document.querySelector('.liste2');
let liste_3  = document.querySelector('.liste3');

let btnburger = document.querySelector('.burger');


let component  = document.querySelector('.section-information');
btnburger.addEventListener('click',()=>{
    component.classList.toggle('active-info-true');
    console.log('clicked')
});

document.querySelector('.navigation').onclick = e =>{

    liste_1.addEventListener('click',()=>{
        liste_1.classList.add('liste-active');

        liste_2.classList.remove('liste-active');
        liste_3.classList.remove('liste-active');

    });
    liste_2.addEventListener('click',()=>{
        liste_2.classList.add('liste-active');

        liste_1.classList.remove('liste-active');
        liste_3.classList.remove('liste-active');
    });
    liste_3.addEventListener('click',()=>{
        liste_3.classList.add('liste-active');

        liste_1.classList.remove('liste-active');
        liste_2.classList.remove('liste-active');
    });
    component.classList.remove('active-info-true');
}

let experienc_pro = document.querySelector('.experience-proffetionnelle');
let project__ = document.querySelector('.projet-concu');
let activitie__ = document.querySelector('.activiter');

window.addEventListener('scroll',()=>{
    if(window.scrollY==0){
        liste_1.classList.add('liste-active');

        liste_2.classList.remove('liste-active');
        liste_3.classList.remove('liste-active');
        

        activitie__.classList.add('active-element');
        experienc_pro.classList.remove('active-element');
        project__.classList.remove('active-element');
    }
    if(window.scrollY>0){
        liste_2.classList.add('liste-active');

        liste_1.classList.remove('liste-active');
        liste_3.classList.remove('liste-active');

        activitie__.classList.remove('active-element');
        experienc_pro.classList.add('active-element');
        project__.classList.remove('active-element');
    }
    if(window.scrollY>950){
        liste_3.classList.add('liste-active');

        liste_1.classList.remove('liste-active');
        liste_2.classList.remove('liste-active');

        activitie__.classList.remove('active-element');
        experienc_pro.classList.remove('active-element');
        project__.classList.add('active-element');
    }


    
});


// les lien vers les reseau sociaux
document.querySelector(".social-reseau").onmousemove = e =>{
    for (const icon of document.querySelectorAll('.fa-brands')) {
        
        icon.addEventListener('mouseenter',()=>{
            icon.classList.add('fa-bounce');
        })
        icon.addEventListener('mouseleave',()=>{
            icon.classList.remove('fa-bounce');
        })
    }
}





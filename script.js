window.addEventListener('load', () => {
    //** Loading animation **/
    const loader = document.querySelector('.loader');
    const all_letter = document.querySelectorAll('.letter');
    
    var a = 0;
    var run = setInterval(frame);
    function frame() { 
        a = a + 1;
        if(a == 70) {
            all_letter.forEach(letter => {
                letter.classList.add('froze'); 
            });
        }else if(a >= 100) {
            clearInterval(run);
            loader.classList.add('melt-out');
            all_letter.forEach(letter => {
                letter.classList.remove('froze'); 
                homeAnimation();
            });
        }
    }

    //** Gsap animation **/
    function homeAnimation() {
    gsap.to(".contain", {
        y: 0, 
        delay: 0.5,
        duration: 1.5
    });
    gsap.to(".big-title", {
        x: 0, 
        delay: 0.5,
        duration: 1.5
    });
    gsap.to(".loader", {
        display: "none",
        duration: 0.5,
        delay: 0.5
    })
    }

    function ThemeDayToNight() {
        gsap.from(".personDay", {
            opacity: 1, 
            delay: 0.5,
            duration: 1
        });
        gsap.to(".personDay", {
            opacity: 0, 
            delay: 0.5,
            duration: 1
        });
        gsap.from(".personNight", {
            opacity: 0, 
            delay: 0.5,
            duration: 1
        });
        gsap.to(".personNight", {
            opacity: 1, 
            display: "block",
            delay: 0.5,
            duration: 1
        });

        gsap.from(".rockDay1", {
            opacity: 1, 
            delay: 0.7,
            duration: 1
        });
        gsap.to(".rockDay1", {
            opacity: 0, 
            delay: 0.7,
            duration: 1
        });
        gsap.from(".rockNight1", {
            opacity: 0, 
            delay: 0.7,
            duration: 1
        });
        gsap.to(".rockNight1", {
            opacity: 1, 
            display: "block",
            delay: 0.7,
            duration: 1
        });

        gsap.from(".rockDay2", {
            opacity: 1, 
            delay: 0.9,
            duration: 1
        });
        gsap.to(".rockDay2", {
            opacity: 0, 
            delay: 0.9,
            duration: 1
        });
        gsap.from(".rockNight2", {
            opacity: 0, 
            delay: 0.9,
            duration: 1
        });
        gsap.to(".rockNight2", {
            opacity: 1, 
            display: "block",
            delay: 0.9,
            duration: 1
        });

        gsap.from(".rockDay3", {
            opacity: 1, 
            delay: 1.1,
            duration: 1
        });
        gsap.to(".rockDay3", {
            opacity: 0, 
            delay: 1.1,
            duration: 1
        });
        gsap.from(".rockNight3", {
            opacity: 0, 
            delay: 1.1,
            duration: 1
        });
        gsap.to(".rockNight3", {
            opacity: 1, 
            display: "block",
            delay: 1.1,
            duration: 1
        });

        gsap.from(".skyDay", {
            opacity: 1, 
            delay: 1.3,
            duration: 1
        });
        gsap.to(".skyDay", {
            opacity: 0, 
            delay: 1.3,
            duration: 1
        });
        gsap.from(".skyNight", {
            opacity: 0, 
            delay: 1.3,
            duration: 1
        });
        gsap.to(".skyNight", {
            opacity: 1, 
            display: "block",
            delay: 1.3,
            duration: 1
        });

        const width = window.innerWidth
        
        if(width > 650) {
            gsap.to(".moon", {
                top: 0,
                delay: 1.5,
                display: "block",
                duration: 2
            })
        }else if(width < 650 && width > 450) {
            gsap.from(".moon", {
                right: -300,
                top: 70,
                delay: 1.5,
                display: "block",
                duration: 2
            })
            gsap.to(".moon", {
                right: -20,
                top: 70,
                delay: 1.5,
                display: "block",
                duration: 2
            })
        }else if(width < 450 && width > 320) {
            gsap.from(".moon", {
                right: -300,
                top: 70,
                delay: 1.5,
                display: "block",
                duration: 2
            })
            gsap.to(".moon", {
                right: -10,
                top: 70,
                delay: 1.5,
                display: "block",
                duration: 2
            })
        }
    }

    function ThemeNightToDay() {
        const width = window.innerWidth
        
        if(width > 650) {
            gsap.to(".moon", {
                top: -250,
                delay: 0.2,
                display: "none",
                duration: 0.5
            })
        }else if(width < 650 && width > 450) {
            gsap.from(".moon", {
                right: -20,
                top: 70,
                delay: 0.2,
                display: "block",
                duration: 0.5
            })
            gsap.to(".moon", {
                right: -300,
                top: 70,
                delay: 0.2,
                display: "none",
                duration: 0.5
            })
        }else if(width < 450 && width > 320) {
            gsap.from(".moon", {
                right: -10,
                top: 70,
                delay: 0.2,
                display: "block",
                duration: 0.5
            })
            gsap.to(".moon", {
                right: -300,
                top: 70,
                delay: 0.2,
                display: "block",
                duration: 0.5
            })
        }

        gsap.from(".skyNight", {
            opacity: 1, 
            delay: 0.5,
            duration: 1
        });
        gsap.to(".skyNight", {
            opacity: 0, 
            display: "none",
            delay: 0.5,
            duration: 1
        });
        gsap.from(".skyDay", {
            opacity: 0, 
            delay: 0.5,
            duration: 1
        });
        gsap.to(".skyDay", {
            opacity: 1, 
            delay: 0.5,
            duration: 1
        });
       
        gsap.from(".rockNight3", {
            opacity: 1, 
            delay: 0.7,
            duration: 1
        });
        gsap.to(".rockNight3", {
            opacity: 0, 
            display: "none",
            delay: 0.7,
            duration: 1
        });
        gsap.from(".rockDay3", {
            opacity: 0, 
            delay: 0.7,
            duration: 1
        });
        gsap.to(".rockDay3", {
            opacity: 1, 
            delay: 0.7,
            duration: 1
        });

        gsap.from(".rockNight2", {
            opacity: 1, 
            delay: 0.9,
            duration: 1
        });
        gsap.to(".rockNight2", {
            opacity: 0, 
            display: "none",
            delay: 0.9,
            duration: 1
        });
        gsap.from(".rockDay2", {
            opacity: 0, 
            delay: 0.9,
            duration: 1
        });
        gsap.to(".rockDay2", {
            opacity: 1,
            delay: 0.9,
            duration: 1
        });
       
        gsap.from(".rockNight1", {
            opacity: 1, 
            delay: 1,
            duration: 1
        });
        gsap.to(".rockNight1", {
            opacity: 0, 
            display: "none",
            delay: 1,
            duration: 1
        });
        gsap.from(".rockDay1", {
            opacity: 0, 
            delay: 1,
            duration: 1
        });
        gsap.to(".rockDay1", {
            opacity: 1, 
            delay: 1,
            duration: 1
        });
    
        gsap.from(".personNight", {
            opacity: 1, 
            delay: 1.2,
            duration: 1
        });
        gsap.to(".personNight", {
            opacity: 0, 
            display: "none",
            delay: 1.2,
            duration: 1
        });
        gsap.from(".personDay", {
            opacity: 0, 
            delay: 1.2,
            duration: 1
        });
        gsap.to(".personDay", {
            opacity: 1,
            delay: 1.2,
            duration: 1
        });
    }

    //** Theme dark light */
    const toggle = document.getElementById('toggle');
    const sections = document.querySelectorAll('section');
    const shadow_bottom = document.querySelector('.shadow-bottom');
    const text = document.querySelector('.text');
    const inputs = document.querySelectorAll('input');
    const textarea = document.querySelector('textarea');
    const copyright = document.querySelector('.copyright');
    const button = document.querySelector('button');

    toggle.onclick = function() {
        // Theme switch
        if(toggle.classList.toggle('active')) {
            ThemeDayToNight()
        }else {
            ThemeNightToDay()
        }
        // Theme switch

        for (let i = 0; i < sections.length; i++) {
            sections[i].classList.toggle('active'); 
        }

        shadow_bottom.classList.toggle('active');
        text.classList.toggle('active');

        for (let i = 0; i < inputs.length; i++) {
            inputs[i].classList.toggle('active');
        }

        textarea.classList.toggle('active');
        copyright.classList.toggle('active');
        button.classList.toggle('active');
    };


    const translate = document.querySelectorAll('.translate');
    const big_title = document.querySelector('.big-title');
    const header = document.querySelector('header');
    const shadow = document.querySelector('.shadow-top');
    const section = document.querySelector('section');

    let header_height = header.offsetHeight;
    let section_height = section.offsetHeight;

    window.addEventListener('scroll', () => {
        let scroll = window.pageYOffset;
        // let sectionY = section.getBoundingClientRect();

        translate.forEach(element => {
            let speed = element.dataset.speed;
            element.style.transform = `translateY(${scroll * speed}px)`;
        });

        big_title.style.opacity = - scroll / (header_height / 2) + 1;
        shadow.style.height = `${scroll * 0.3 + 400}px`;
    });


    const hamburger_menu = document.querySelector('.hamburger-menu');
    const hamburger_menu_items = document.querySelectorAll('.contain .menu-item');
    let hamburger_menu_open = false;

    const menuMobile = document.querySelector('.menuMobile .list-menu ul li')
    for (let i = 0; i < menuMobile.length; i++) {
        console.log(menuMobile)
    }
    
    hamburger_menu.addEventListener('click', () => {
        if(!hamburger_menu_open) {
            hamburger_menu.classList.add('open');
            hamburger_menu_items.forEach(item => {
                item.classList.add('open');
                item.classList.remove('close');

                document.querySelector('body').classList.add('modalOpen'); // pour bloquer le scroll de la page principal quand le menu et ouvert
                document.querySelector('aside').classList.add('open'); // pour afficher le fond en opacité 30% 
                document.querySelector('.menuMobile').classList.add('open'); // pour afficher le menu slide mobile
                document.querySelector('.logo') .classList.add('open'); //  changement de couleur du titre à l'ouverture du menu mobile
            });
            hamburger_menu_open = true;
        } else {
            hamburger_menu.classList.remove('open');
            hamburger_menu_items.forEach(item => {
                item.classList.remove('open');
                item.classList.add('close');

                document.querySelector('body').classList.remove('modalOpen'); // pour bloquer le scroll de la page principal quan le menu et ouvert
                document.querySelector('aside').classList.remove('open'); // pour afficher le fond en opacité 30% 
                document.querySelector('.menuMobile').classList.remove('open'); // pour afficher le menu slide mobile 
                document.querySelector('.logo') .classList.remove('open');
            });
            hamburger_menu_open = false;
        }
    });

    /** pour faire disparaître le menu au click n'importe ou sur la page */
    const liste_menu = document.querySelector('.liste-menu, .hamburger-menu');
    document.body.addEventListener("click", function(e) {
        var target = e.target;

        if (target !== liste_menu && !isChildOf(target, liste_menu) && header.offsetWidth > 1024) {  // && header.offsetWidth > 1024 c'est pour désactivé, en desous de 1024px, l'effet "disparaître le menu au click n'importe ou sur la page" car on a un menu slide tablet mobile
            hamburger_menu.classList.remove('open');
            hamburger_menu_items.forEach(item => {
                item.classList.remove('open');
                item.classList.add('close');

                document.querySelector('body').classList.remove('modalOpen'); // pour bloquer le scroll de la page principal quand le menu et ouvert
                document.querySelector('aside').classList.remove('open'); // pour afficher le fond en opacité 30% 
                document.querySelector('.menuMobile').classList.remove('open'); // pour afficher le menu slide mobile 
                document.querySelector('.logo') .classList.remove('open');
            
            });
            hamburger_menu_open = false;
        }
    }, false);

    function isChildOf(child, parent) {
        if(child.parentNode === parent) {
            return true;
        } else if(child.parentNode === null) {
            return false;
        }else {
            return isChildOf(child.parentNode, parent);
        }
    }
    /** pour faire disparaître le menu au click n'importe ou sur la page */

    /** pour faire disparaître le menu au scroll */
    window.addEventListener('scroll', () => {
        let scroll = window.pageYOffset;
        if(scroll == 1) {
            hamburger_menu.classList.remove('open');
            hamburger_menu_items.forEach(item => {
                item.classList.remove('open');
                item.classList.add('close');
            });
            hamburger_menu_open = false;
        }
    })
    /** pour faire disparaître le menu au scroll */

    // Mettre les images background en incrémentation
    let images = [...document.querySelectorAll('.slide')];

    images.forEach((img, idx) => {
        img.style.backgroundImage = `url(./image/Work_Photo/${idx+1}.jpg)`;
    })

    const slider = document.querySelector('.slider');
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
    });

    slider.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        slider.scrollLeft = scrollLeft - walk;
    });

    //** Pour un effet d'apparation des éléments au scroll de la page sur Y */
    const ratio = .1 // (10%) 
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: ratio
    }

    const callback = function(entries, observer) { 
        entries.forEach(entry => {
            if(entry.intersectionRatio > ratio) {
                entry.target.classList.add('reveal-visible')
                observer.unobserve(entry.target)
            }
        })
    }

    const observer = new IntersectionObserver(callback, options)
        document.querySelectorAll('[class*="reveal').forEach( e => {
        observer.observe(e);
    })
});


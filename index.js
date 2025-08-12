const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav__link')
function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=> n.addEventListener('click', linkAction))

const skillsContent = document.getElementsByClassName('skills__content'),
        skillsHeader = document.querySelectorAll('.skills__header')
function skillsToggle() {
    let itemClass = this.parentNode.className
    for(let i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass==='skills__content skills__close'){
        this.parentNode.className='skills__content skills__open'
    }
}
skillsHeader.forEach((eL)=>{
    eL.addEventListener('click', skillsToggle)
})

let swiper;

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

function scrollHeader(){
    const nav = document.getElementById('header')
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

const languageButton = document.getElementById('language-toggle')
const browserLang = navigator.language || navigator.userLanguage
let currentLanguage = localStorage.getItem('language') || (browserLang.startsWith('es') ? 'es' : 'en')

const translations = {
    es: {
        'nav-home': 'Inicio',
        'nav-about': 'Acerca',
        'nav-skills': 'Habilidades',
        'nav-portfolio': 'Portfolio',
        'nav-contact': 'Contacto',
        'home-title': 'Hola!, Soy Zamir',
        'home-subtitle': 'Desarrollador Fullstack',
        'home-description': 'Estudiante de Ciencias de la Computación con experiencia en desarrollo web y móvil.',
        'home-contact': 'Contáctame',
        'about-title': 'Acerca de mí',
        'about-subtitle': 'Mi introducción',
        'about-description': 'Desarrollador Fullstack con experiencia en backend y frontend. Especializado en tecnologías modernas como React, Node.js, Python y Java. Me apasiona crear soluciones innovadoras y eficientes.',
        'about-years': 'Años <br> experiencia',
        'about-projects': 'Proyectos <br> completados',
        'about-companies': 'Empresas <br> colaboradas',
        'about-download': 'Descargar CV',
        'portfolio-title': 'Portafolio',
        'portfolio-subtitle': 'Proyectos recientes',
        'project1-desc': 'Plataforma fullstack que conecta viajeros y anfitriones con comunicación en tiempo real. Implementé microservicios con Docker, backend en Java Spring y Node.js, bases de datos PostgreSQL, MySQL y MongoDB, desplegado en AWS.',
        'project2-desc': 'Sistema de e-commerce basado en microservicios con API orquestada. Backend desarrollado en Python (Django, Flask), Node.js y Java Spring. Incluye ingesta de datos con AWS Glue para análisis y escalabilidad.',
        'project3-desc': 'Sistema multi-tenant para streaming de música con arquitectura serverless usando AWS Lambda. Pipelines ETL para procesamiento de datos y visualización en Looker, diseñado para máxima eficiencia y escalabilidad.',
        'project4-desc': 'Tutor de matemáticas con IA utilizando microservicios FastAPI y MongoDB. Integración con APIs de Gemini y base de datos vectoriales para mantener contexto conversacional y personalizar el aprendizaje.',
        'project5-desc': 'Plataforma web moderna para negocio agrícola desarrollada con Next.js. Interfaz responsiva con gestión de productos, catálogo interactivo y sistema de contacto optimizado para la experiencia del usuario.',
        'view-code': 'Ver Código',
        'contact-title': 'Contáctame',
        'contact-subtitle': 'Pongámonos en contacto',
        'contact-call': 'Llámame',
        'contact-email': 'Envíame un correo',
        'contact-location': 'Ubicación',
        'footer-subtitle': 'Desarrollador Fullstack',
        'footer-skills': 'Habilidades',
        'footer-portfolio': 'Portfolio',
        'footer-contact': 'Contacto',
        'footer-copy': '&#169; Zamir Lizardo. Todos los derechos reservados',
        'contact-name': 'Nombre',
        'contact-email-label': 'Email',
        'contact-subject': 'Asunto',
        'contact-message': 'Mensaje',
        'contact-send': 'Enviar Mensaje',
        'años': 'años',
        'año': 'año',
        'stack-tech':'Mi stack tecnologico'
    },
    en: {
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-skills': 'Skills',
        'nav-portfolio': 'Portfolio',
        'nav-contact': 'Contact',
        'home-title': 'Hi!, I\'m Zamir',
        'home-subtitle': 'Fullstack Developer',
        'home-description': 'Computer Science student with experience in web and mobile development.',
        'home-contact': 'Contact me',
        'about-title': 'About me',
        'about-subtitle': 'My introduction',
        'about-description': 'Fullstack Developer with experience in backend and frontend development. Specialized in modern technologies like React, Node.js, Python and Java. I\'m passionate about creating innovative and efficient solutions.',
        'about-years': 'Years <br> experience',
        'about-projects': 'Completed <br> projects',
        'about-companies': 'Companies <br> worked',
        'about-download': 'Download CV',
        'portfolio-title': 'Portfolio',
        'portfolio-subtitle': 'Recent projects',
        'project1-desc': 'Fullstack platform connecting travelers and hosts with real-time communication. Implemented microservices with Docker, Java Spring and Node.js backend, PostgreSQL, MySQL and MongoDB databases, deployed on AWS.',
        'project2-desc': 'E-commerce system based on microservices with orchestrated API. Backend developed in Python (Django, Flask), Node.js and Java Spring. Includes data ingestion with AWS Glue for analytics and scalability.',
        'project3-desc': 'Multi-tenant system for music streaming with serverless architecture using AWS Lambda. ETL pipelines for data processing and Looker visualization, designed for maximum efficiency and scalability.',
        'project4-desc': 'AI-powered math tutor using FastAPI microservices and MongoDB. Integration with Gemini APIs and vector databases to maintain conversational context and personalize learning.',
        'project5-desc': 'Modern web platform for agricultural business developed with Next.js. Responsive interface with product management, interactive catalog and contact system optimized for user experience.',
        'view-code': 'View Code',
        'contact-title': 'Contact me',
        'contact-subtitle': 'Get in touch',
        'contact-call': 'Call me',
        'contact-email': 'Email me',
        'contact-location': 'Location',
        'footer-subtitle': 'Fullstack Developer',
        'footer-skills': 'Skills',
        'footer-portfolio': 'Portfolio',
        'footer-contact': 'Contact',
        'footer-copy': '&#169; Zamir Lizardo. All rights reserved',
        'contact-name': 'Name',
        'contact-email-label': 'Email',
        'contact-subject': 'Subject',
        'contact-message': 'Message',
        'contact-send': 'Send Message',
        'años': 'years',
        'año': 'year',
        'stack-tech':'My stack'
    }
}

function updateLanguage() {
    const elements = document.querySelectorAll('[data-key]')
    elements.forEach(element => {
        const key = element.getAttribute('data-key')
        if (translations[currentLanguage][key]) {
            element.innerHTML = translations[currentLanguage][key]
        }
    })
    
    const cvLink = document.getElementById('download-cv')
    if (cvLink) {
        cvLink.href = currentLanguage === 'es' ? 'pdf/ZamirCVEspañol.pdf' : 'pdf/ZamirCVEnglish.pdf'
    }
    
    document.title = currentLanguage === 'es' 
        ? 'Zamir Lizardo - Desarrollador Fullstack Portfolio'
        : 'Zamir Lizardo - Fullstack Developer Portfolio'
    
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
        metaDescription.content = currentLanguage === 'es'
            ? 'Zamir Lizardo - Desarrollador Fullstack con experiencia en React, Node.js, Python y Java. Portfolio mostrando proyectos de desarrollo web y móvil.'
            : 'Zamir Lizardo - Fullstack Developer with expertise in React, Node.js, Python, and Java. Portfolio showcasing web and mobile development projects.'
    }
    
    languageButton.textContent = currentLanguage === 'es' ? 'EN' : 'ES'
    updateTooltips()
}

languageButton.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'es' ? 'en' : 'es'
    localStorage.setItem('language', currentLanguage)
    updateLanguage()
})

updateLanguage()

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateY(0)'
        }
    })
}, observerOptions)

document.addEventListener('DOMContentLoaded', () => {
    const swiperContainer = document.querySelector('.portafolio__container');
    if (swiperContainer) {
        const actualSlides = swiperContainer.querySelectorAll('.swiper-slide').length;
        console.log('Found', actualSlides, 'slides in container');
        
        setTimeout(() => {
            swiper = new Swiper('.portafolio__container', {
                slidesPerView: 3,
                spaceBetween: 50,
                centeredSlides: true,
                
                loop: true,
                
                effect: 'coverflow',
                grabCursor: true,
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                },
                
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    dynamicBullets: true,
                },
                
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                },
                
                speed: 600,
                allowTouchMove: true,
                
                breakpoints: {
                    320: {
                        slidesPerView: 0,
                        spaceBetween: 50,
                        effect: 'slide',
                        centeredSlides: true,
                        autoplay: {
                            delay: 4000,
                            disableOnInteraction: false,
                        },
                    
                    },
                    576: {
                        slidesPerView: 1,
                        spaceBetween: 50,
                        effect: 'slide', 
                        centeredSlides: false,
                        autoplay: {
                            delay: 4000,
                            disableOnInteraction: false,
                        },
                        
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                        effect: 'coverflow',
                        coverflowEffect: {
                            rotate: 45,
                            stretch: 0,
                            depth: 95,
                            modifier: 1,
                            slideShadows: true,
                        }
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                        effect: 'coverflow',
                        coverflowEffect: {
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }
                    }
                },
                
                on: {
                    init: function () {
                        console.log('Swiper initialized with beautiful coverflow effect');
                        console.log('Total slides:', this.slides.length);
                        console.log('Real slides:', actualSlides);
                        
                        this.update();
                        this.updateSize();
                        this.updateSlides();
                        this.updateProgress();
                    },
                    
                    slideChange: function () {
                        const projectNames = ['Connect', 'ShopUtec', 'ShareYourTaste', 'Matemix', 'AgroChingas'];
                        console.log('Current project:', projectNames[this.realIndex]);
                    },
                    
                    transitionEnd: function () {
                        this.update();
                    }
                }
            });
            
        }, 100);
    }
    updateTooltips()
    updateLanguage()
})

const contactForm = document.getElementById('contact-form')
const submitBtn = document.getElementById('submit-btn')
const contactStatus = document.getElementById('contact-status')

const EMAILJS_SERVICE_ID = 'id' 
const EMAILJS_TEMPLATE_ID = 'id'  
const EMAILJS_PUBLIC_KEY = 'id'

function showStatus(message, type) {
    contactStatus.textContent = message
    contactStatus.className = `contact__status ${type}`
    contactStatus.style.display = 'block'
    
    if (type !== 'loading') {
        setTimeout(() => {
            contactStatus.style.display = 'none'
        }, 5000)
    }
}

function sendEmail(formData) {
    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: formData.get('name'),
        from_email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message'),
        to_email: 'lmr293141@gmail.com'
    }, EMAILJS_PUBLIC_KEY)
    .then(() => {
        showStatus(
            currentLanguage === 'es' 
                ? '¡Mensaje enviado exitosamente! Te contactaré pronto.' 
                : 'Message sent successfully! I will contact you soon.',
            'success'
        )
        contactForm.reset()
    })
    .catch((error) => {
        console.error('EmailJS Error:', error)
        showStatus(
            currentLanguage === 'es' 
                ? 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.' 
                : 'Error sending message. Please try again.',
            'error'
        )
    })
    .finally(() => {
        submitBtn.classList.remove('loading')
        submitBtn.disabled = false
    })
}

function sendEmailFormspree(formData) {
    fetch('https://formspree.io/f/your_form_id', {  // Replace with your Formspree form ID
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            showStatus(
                currentLanguage === 'es' 
                    ? '¡Mensaje enviado exitosamente! Te contactaré pronto.' 
                    : 'Message sent successfully! I will contact you soon.',
                'success'
            )
            contactForm.reset()
        } else {
            throw new Error('Network response was not ok')
        }
    })
    .catch(error => {
        console.error('Formspree Error:', error)
        showStatus(
            currentLanguage === 'es' 
                ? 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.' 
                : 'Error sending message. Please try again.',
            'error'
        )
    })
    .finally(() => {
        submitBtn.classList.remove('loading')
        submitBtn.disabled = false
    })
}

function sendEmailMailto(formData) {
    const name = formData.get('name')
    const email = formData.get('email')
    const subject = formData.get('subject')
    const message = formData.get('message')
    
    const mailtoLink = `mailto:lmr293141@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`
    )}`
    
    window.open(mailtoLink)
    
    showStatus(
        currentLanguage === 'es' 
            ? 'Se abrió tu cliente de correo. Por favor, envía el mensaje desde allí.' 
            : 'Your email client has been opened. Please send the message from there.',
        'success'
    )
    
    submitBtn.classList.remove('loading')
    submitBtn.disabled = false
}

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault()
        
        submitBtn.classList.add('loading')
        submitBtn.disabled = true
        
        showStatus(
            currentLanguage === 'es' ? 'Enviando mensaje...' : 'Sending message...',
            'loading'
        )
        
        const formData = new FormData(contactForm)
 
        setTimeout(() => {
            sendEmailMailto(formData)
        }, 1000)
    })
}

function updateTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]')
    
    const tooltipTranslations = {
        es: {
            'Inicio': 'Inicio',
            'Acerca de mí': 'Acerca de mí', 
            'Habilidades': 'Habilidades',
            'Portafolio': 'Portafolio',
            'Contacto': 'Contacto',
            'Cambiar idioma': 'Cambiar idioma',
            'Cambiar tema': 'Cambiar tema',
            'Menú': 'Menú'
        },
        en: {
            'Inicio': 'Home',
            'Acerca de mí': 'About me',
            'Habilidades': 'Skills', 
            'Portafolio': 'Portfolio',
            'Contacto': 'Contact',
            'Cambiar idioma': 'Change language',
            'Cambiar tema': 'Change theme',
            'Menú': 'Menu'
        }
    }
    
    tooltipElements.forEach(element => {
        const originalTooltip = element.getAttribute('data-tooltip')
        if (tooltipTranslations[currentLanguage][originalTooltip]) {
            element.setAttribute('data-tooltip', tooltipTranslations[currentLanguage][originalTooltip])
        }
    })
}
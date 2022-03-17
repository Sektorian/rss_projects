const i18Obj = {
    'en': {
      'skills': 'Skills',
      'portfolio': 'Portfolio',
      'video': 'Video',
      'price': 'Price',
      'contacts': 'Contacts',
      'hero-title': 'Alexa Rise',
      'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
      'hire': 'Hire me',
      'skill-title-1': 'Digital photography',
      'skill-text-1': 'High-quality photos in the studio and on the nature',
      'skill-title-2': 'Video shooting',
      'skill-text-2': 'Capture your moments so that they always stay with you',
      'skill-title-3': 'Rotouch',
      'skill-text-3': 'I strive to make photography surpass reality',
      'skill-title-4': 'Audio',
      'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
      'winter': 'Winter',
      'spring': 'Spring',
      'summer': 'Summer',
      'autumn': 'Autumn',
      'price-description-1-span-1': 'One location',
      'price-description-1-span-2': '120 photos in color',
      'price-description-1-span-3': '12 photos in retouch',
      'price-description-1-span-4': 'Readiness 2-3 weeks',
      'price-description-1-span-5': 'Make up, visage',
      'price-description-2-span-1': 'One or two locations',
      'price-description-2-span-2': '200 photos in color',
      'price-description-2-span-3': '20 photos in retouch',
      'price-description-2-span-4': 'Readiness 1-2 weeks',
      'price-description-2-span-5': 'Make up, visage',
      'price-description-3-span-1': 'Three locations or more',
      'price-description-3-span-2': '300 photos in color',
      'price-description-3-span-3': '50 photos in retouch',
      'price-description-3-span-4': 'Readiness 1 week',
      'price-description-3-span-5': 'Make up, visage, hairstyle',
      'order': 'Order shooting',
      'contact-me': 'Contact me',
      'send-message': 'Send message',
      'e-mail': 'E-mail',
      'phone': 'Phone',
      'message': 'Message'
    },
    'ru': {
      'skills': 'Навыки',
      'portfolio': 'Портфолио',
      'video': 'Видео',
      'price': 'Цены',
      'contacts': 'Контакты',
      'hero-title': 'Алекса Райс',
      'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
      'hire': 'Пригласить',
      'skill-title-1': 'Фотография',
      'skill-text-1': 'Высококачественные фото в студии и на природе',
      'skill-title-2': 'Видеосъемка',
      'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
      'skill-title-3': 'Ретушь',
      'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
      'skill-title-4': 'Звук',
      'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
      'winter': 'Зима',
      'spring': 'Весна',
      'summer': 'Лето',
      'autumn': 'Осень',
      'price-description-1-span-1': 'Одна локация',
      'price-description-1-span-2': '120 цветных фото',
      'price-description-1-span-3': '12 отретушированных фото',
      'price-description-1-span-4': 'Готовность через 2-3 недели',
      'price-description-1-span-5': 'Макияж, визаж',
      'price-description-2-span-1': 'Одна-две локации',
      'price-description-2-span-2': '200 цветных фото',
      'price-description-2-span-3': '20 отретушированных фото',
      'price-description-2-span-4': 'Готовность через 1-2 недели',
      'price-description-2-span-5': 'Макияж, визаж',
      'price-description-3-span-1': 'Три локации и больше',
      'price-description-3-span-2': '300 цветных фото',
      'price-description-3-span-3': '50 отретушированных фото',
      'price-description-3-span-4': 'Готовность через 1 неделю',
      'price-description-3-span-5': 'Макияж, визаж, прическа',
      'order': 'Заказать съемку',
      'contact-me': 'Свяжитесь со мной',
      'send-message': 'Отправить',
      'e-mail': 'Электронная почта',
      'phone': 'Телефон',
      'message': 'Сообщение'
    }
  }
//Прошу прощения за выше скопированный код, но import почему-то у меня не сработал ))

const portfolioImage = document.querySelectorAll('.portfolio-img');
const portfolioBtnWin = document.querySelector('.pfBtnWin');
const portfolioBtnSpr = document.querySelector('.pfBtnSpr');
const portfolioBtnSum = document.querySelector('.pfBtnSum');
const portfolioBtnAut = document.querySelector('.pfBtnAut');
const portfolioBtns = document.querySelectorAll('.container-pfBtn');
const headerHamburger = document.querySelector('.header__hamburger');
const headerLine1 = document.querySelector('.header__line1');
const headerLine2 = document.querySelector('.header__line2');
const headerLine3 = document.querySelector('.header__line3');
const adaptMenu = document.querySelector('.adapt-menu');
const menuLi = document.querySelectorAll('.menu-li');
const headerBtnTheme = document.querySelector('.theme');
let count = 0;

//Portfolio

portfolioBtnAut.classList.add('active');

    portfolioBtnWin.addEventListener('click', () => {
        portfolioImage.forEach((img, index) => img.src = `https://github.com/rolling-scopes-school/file-storage/blob/portfolio/assets/img/${portfolioBtnWin.dataset.season}/${index+1}.jpg?raw=true`);
        portfolioBtnWin.classList.add('active');
        portfolioBtnSpr.classList.remove('active');
        portfolioBtnSum.classList.remove('active');
        portfolioBtnAut.classList.remove('active');
    }); 
   
    portfolioBtnSpr.addEventListener('click', () => {
        portfolioImage.forEach((img, index) => img.src = `https://github.com/rolling-scopes-school/file-storage/blob/portfolio/assets/img/${portfolioBtnSpr.dataset.season}/${index+1}.jpg?raw=true`);
        portfolioBtnWin.classList.remove('active');
        portfolioBtnSpr.classList.add('active');
        portfolioBtnSum.classList.remove('active');
        portfolioBtnAut.classList.remove('active');
    }); 

    portfolioBtnSum.addEventListener('click', () => {
        portfolioImage.forEach((img, index) => img.src = `https://github.com/rolling-scopes-school/file-storage/blob/portfolio/assets/img/${portfolioBtnSum.dataset.season}/${index+1}.jpg?raw=true`);
        portfolioBtnWin.classList.remove('active');
        portfolioBtnSpr.classList.remove('active');
        portfolioBtnSum.classList.add('active');
        portfolioBtnAut.classList.remove('active');
    }); 

    portfolioBtnAut.addEventListener('click', () => {
        portfolioImage.forEach((img, index) => img.src = `https://github.com/rolling-scopes-school/file-storage/blob/portfolio/assets/img/${portfolioBtnAut.dataset.season}/${index+1}.jpg?raw=true`);
        portfolioBtnWin.classList.remove('active');
        portfolioBtnSpr.classList.remove('active');
        portfolioBtnSum.classList.remove('active');
        portfolioBtnAut.classList.add('active');
    });
    
    //Language

    const langEn = document.querySelector('.btn-en');
    const langRu = document.querySelector('.btn-ru');

    langEn.classList.add('active');

    const getTranslate = (str) => {
        const dataI18 = document.querySelectorAll('[data-i18]');
        dataI18.forEach((item, index, array) => {
            item.textContent = i18Obj[str][item.dataset.i18];
            if (item.placeholder) {
                item.placeholder = i18Obj[str][item.dataset.i18];
                item.textContent = '';
            }
        });
    }

    langEn.addEventListener('click', () => {
        getTranslate('en');
        langEn.classList.add('active');
        langRu.classList.remove('active');
    }); 

    langRu.addEventListener('click', () => {
        getTranslate('ru');
        langEn.classList.remove('active');
        langRu.classList.add('active');
    });

    //Hamburger

    headerHamburger.addEventListener('click', () => {
        headerLine1.classList.toggle('open');
        headerLine2.classList.toggle('open');
        headerLine3.classList.toggle('open');
        adaptMenu.classList.toggle('open');
    });

    menuLi.forEach((element) => {
        element.addEventListener('click', () => {
            headerLine1.classList.toggle('open');
            headerLine2.classList.toggle('open');
            headerLine3.classList.toggle('open');
            adaptMenu.classList.toggle('open');
        });
    });
    
    

    //Theme

    headerBtnTheme.addEventListener('click', () => {
        
        if (count%2 === 0) {
            document.documentElement.style.setProperty('--body-color', '#fff');
            document.documentElement.style.setProperty('--text-color', '#000');
            document.documentElement.style.setProperty('--hover-color', '#000');
            headerBtnTheme.classList.add('light');
            count++;
        } else {
            document.documentElement.style.setProperty('--body-color', '#000');
            document.documentElement.style.setProperty('--text-color', '#fff');
            document.documentElement.style.setProperty('--hover-color', '#fff');
            headerBtnTheme.classList.remove('light');
            count++;
        }
    }); 
    
    

    





    
   
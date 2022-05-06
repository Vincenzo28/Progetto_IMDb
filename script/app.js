const menuBtn = document.getElementById('menu-btn')
const closeMenu = document.getElementById('close-menu')
const menuContainer = document.getElementById('menu-container')

menuBtn.addEventListener('click',changeDisplay)

function changeDisplay(){
    menuContainer.style.display = 'block';
    menuContainer.classList.add('animate__animated')
    menuContainer.classList.add('animate__fadeInDownBig')
    menuContainer.classList.remove('animate__fadeOutUpBig')
    
    
    // Get the current page scroll position
     scrollTop = window.pageYOffset || document.documentElement.scrollTop;
     scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
         // if any scroll is attempted, set this to the previous value
         window.onscroll = function() {
             window.scrollTo(scrollLeft, scrollTop);
         };
}

closeMenu.addEventListener('click',displayNone)
function displayNone(){
    menuContainer.classList.add('animate__animated')
    menuContainer.classList.add('animate__fadeOutUpBig')
    menuContainer.classList.remove('animate__fadeInDownBig')


    // Scrollbar on
    window.onscroll = function() {};
}



// BLOCK THE SCROLLBAR MENU




// Menù responsive
const menuBtnResponsive = document.getElementById('menu-responsive-btn')
const closeMenuResponsive = document.getElementById ('btn-close')
const menuContainerResponsive = document.getElementById('menu-responsive')

menuBtnResponsive.addEventListener('click',responsiveMenu)
function responsiveMenu(){
    menuContainerResponsive.style.display = 'block';
    menuContainerResponsive.classList.add('animate__animated')
    menuContainerResponsive.classList.add('animate__fadeInLeft')
    menuContainerResponsive.classList.remove('animate__fadeOutLeft')

    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        // if any scroll is attempted, set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
}

closeMenuResponsive.addEventListener('click',displayNoneResponsive)

function displayNoneResponsive(){
    menuContainerResponsive.classList.add('animate__animated')
    menuContainerResponsive.classList.add('animate__fadeOutLeft')
    menuContainerResponsive.classList.remove('animate__fadeInLeft')

    window.onscroll = function() {};
    
}

// Search bar mobile
const containerSearch = document.getElementById('container-search')
const searchBtn = document.getElementById('mobile-search')
const closeSearchbar = document.getElementById('btn-search')

// Aprire ricerca
searchBtn.addEventListener('click',openSearch)
function openSearch(){
    containerSearch.style.display= 'block'
    containerSearch.classList.add('animate_animated')
    containerSearch.classList.add('animate__backInDown')
    containerSearch.classList.remove('animate__fadeOutUpBig')
}

// Chiudere ricerca
closeSearchbar.addEventListener('click',closeSearch)
function closeSearch(){
    containerSearch.style.display = 'none'
}




// SWIPER JS

// Preferiti dal pubblico

const swiper_film = new Swiper('.swiper_film_prefer', {
    direction: 'horizontal',
        // init: false,
    navigation: {
      nextEl: '.next-prefer',
      prevEl: '.prev-prefer',
    },

    breakpoints:{
      320: {
        slidesPerView: 2,

      },
      480: {
        slidesPerView: 2.5,
      },
      768: {
        slidesPerView: 3.7,
      },
      760: {
        slidesPerView: 3.8,
      },
      1200: {
        slidesPerView: 6,
      },
    }
      });
  

// Film su PRIME

  const swiper_film_prime = new Swiper('.swiper_film_prime', {
        direction: 'horizontal',
        // init: false,
        navigation: {
      nextEl: '.next-prime',
      prevEl: '.prev-prime',
    },
    breakpoints:{
      320: {
        slidesPerView: 2,
      },
      480: {
        slidesPerView: 2.5,
      },
      768: {
        slidesPerView: 4,
      },
      760: {
        slidesPerView: 3.8,
      },
      1200: {
        slidesPerView: 6,
      },
    }
      });


// Film al cinema
      
  const swiper_film_cinemas = new Swiper('.swiper_film_cinemas', {
        direction: 'horizontal',
        // init: false,
        navigation: {
      nextEl: '.next-cinemas',
      prevEl: '.prev-cinemas',
    },
    breakpoints:{
      320: {
        slidesPerView: 2,
      },
      480: {
        slidesPerView: 2.5,
      },
      768: {
        slidesPerView: 4,
      },
      760: {
        slidesPerView: 3.8,
      },
      1200: {
        slidesPerView: 6,
      },
    }});
  
  
// In evidenza oggi

  const swiper_evidence = new Swiper('.swiper_evidence',{
    direction: 'horizontal',
        navigation: {
      nextEl: '.next-evidence',
      prevEl: '.prev-evidence',
    },
    breakpoints:{
        320: {
          slidesPerView: 1.6,

        },
        550: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,

        },
        1116: {
          slidesPerView: 2,
        },
      }
  });


// Hero section
  const swiper = new Swiper('.swiper_hero',{
    direction: 'horizontal',
    loop: true,
        navigation: {
      nextEl: '.next-hero',
      prevEl: '.prev-hero',
    }  
  });


// Prossimamente in sala
const swiper_film_new = new Swiper('.swiper_film_new', {
    direction: 'horizontal',
    // init: false,
    navigation: {
  nextEl: '.next-new',
  prevEl: '.prev-new',
},
breakpoints:{
  400: {
    slidesPerView: 1.6,
  },
  501: {
    slidesPerView: 1,
  },
  760: {
    slidesPerView: 1.7,
  },
  901: {
    slidesPerView: 2,
  },
  1200: {
    slidesPerView: 3,
  },
  1270: {
    slidesPerView: 2.7,
  },
}});

// Altre pagine da esplorare
const swiper_film_other = new Swiper('.swiper_film_explore', {
    direction: 'horizontal',
    // init: false,
    navigation: {
  nextEl: '.next-other',
  prevEl: '.prev-other',
},
breakpoints:{
  400: {
    slidesPerView: 1.6,
  },
  501: {
    slidesPerView: 1,
  },
  760: {
    slidesPerView: 1.7,
  },
  901: {
    slidesPerView: 2,
  },
  1200: {
    slidesPerView: 3,
  },
  1270: {
    slidesPerView: 2.7,
  },
}});


// Nati oggi

const swiper_film_born = new Swiper('.swiper_film_born', {
direction: 'horizontal',
    // init: false,
    navigation: {
  nextEl: '.next-born',
  prevEl: '.prev-born',
},
breakpoints:{
  320:{ 
    slidesPerView: 2,
  },
  600:{
    slidesPerView: 4,
  },
  1000: {
    slidesPerView: 5,
  },
  1280:{
    slidesPerView: 7,
  },
}});

// News

const swiper_film_news = new Swiper('.swiper_film_news', {
    direction: 'horizontal',
    // init: false,
    navigation: {
  nextEl: '.next-news',
  prevEl: '.prev-news',
},
breakpoints:{
  320: {
    slidesPerView: 1,
  },
  480: {
    slidesPerView: 1.4,
  },
  760: {
    slidesPerView: 2,
  },
  768: {
    slidesPerView: 3,
  },
  1200: {
    slidesPerView: 3,
  },
  1270: {
    slidesPerView: 3,
  },
}});



// Originali IMDB

const swiper_film_originals = new Swiper('.swiper_film_originals', {
    direction: 'horizontal',
    // init: false,
    navigation: {
  nextEl: '.next-original',
  prevEl: '.prev-original',
},
breakpoints:{
  400: {
    slidesPerView: 1.6,
  },
  501: {
    slidesPerView: 1,
  },
  760: {
    slidesPerView: 1.7,
  },
  901: {
    slidesPerView: 2,
  },
  1200: {
    slidesPerView: 3,
  },
  1270: {
    slidesPerView: 2.7,
  },
}});


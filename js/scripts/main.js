// AOS
AOS.init({
  duration: 1000,
  once: true,
});

// SwiperJS 
var thumbs = new Swiper(".swiper.cases-thumbs", {
  loop: true,
  spaceBetween: 16,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});

var swiper = new Swiper('.swiper.cases', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: thumbs,
  },
});


// Acordeão
document.addEventListener("DOMContentLoaded", function () {
  var accordion = document.querySelectorAll(".accordion");

  accordion.forEach((el) => {
    var accordionItems = el.querySelectorAll(".accordion-item");

    accordionItems.forEach(function (item) {
      var header = item.querySelector(".accordion-header");

      header.addEventListener("click", function () {
        var currentActiveItem = item.classList.contains("active");

        accordionItems.forEach(function (el) {
          el.classList.remove("active");
        });

        if (!currentActiveItem) {
          item.classList.add("active");
        }
      });
    });
  });
});

let counter = document.querySelectorAll(".counter")

window.addEventListener("load", function() {
  setTimeout(function() {
    counter.forEach(function(k, v) {
      var start = counter[v].getAttribute('counter-start')
      var end = counter[v].getAttribute('counter-end')
      var speed = counter[v].getAttribute('counter-speed')
      var step = counter[v].getAttribute('counter-step')

      start = Number(start);
      end = Number(end);
      speed = Number(speed);
      step = Number(step);

      setInterval(function() {
        start += step;
        if(start > end) {
          return false;
        }
        counter[v].innerText = start;
      }, speed)
    })
  }, 1000); // 1000 milliseconds = 1 second
}, false)


// Menu de navegação
window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  let scrollPosition = window.scrollY;
  let screenWidth = window.innerWidth;

  if (scrollPosition > 8) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});


// Menu mobile;
function openMobileSidebar() {
  var item = document.querySelector('#navigation');
  item.removeAttribute('style', 'display: none;');
}

function closeMobileSidebar() {
  var item = document.querySelector('#navigation');
  item.setAttribute('style', 'display: none;');
  // item.removeAttribute('style', 'display: flex;');
}
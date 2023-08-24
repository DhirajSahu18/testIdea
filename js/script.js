// Collapse function
function toggleCollapse(element) {

    const content = element.nextElementSibling;
    element.classList.toggle('collapsed');
    
    const symbol = element.querySelector('.collapsible::before');
    symbol.textContent = content.classList.contains('collapsed') ? '+' : '-';
  
  }

  //Owl Carousel function
  $('.owl-carousel').owlCarousel({
    loop:true,
    lazyLoad: true,
    margin:20,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
})

  //Owl Carousel2 function
  $('.owl-carousel2').owlCarousel({
    loop:true,
    lazyLoad: true,
    margin:20,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
})
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
import '../css/style.scss';


$('.owl_first').owlCarousel({
  loop:true,
  autoplay:true, 
  autoplayTimeout:4500,
  autoplayHoverPause:true,
  margin:0,
  nav:true,
  navText : ["",""],
  dots: false,
  dots: 0,
  responsive:{
  0:{
      items:1
      },
  768:{
        items:2
      },
  960:{
      items:2
      },
  1100: {
      items: 3
  }
  }
}); 
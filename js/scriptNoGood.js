$(document).ready(function(){

var pages = $.makeArray($('.pages'));

function expand(t){
  t.css({
        height: '100vh',
        width: '100vh'
  });
  
}
  var nextPage, currentPage, index, previousPage;
  function randoms(stuff){
    
      stuff.mouseenter(function(){
      stuff.removeClass('trans');
      expand(stuff);
      
      
      //setupNextPage(stuff);
      });
      stuff.mouseleave(function(){
        if($(this).offset().top - $(document).scrollTop() <= -50){
          $(this).addClass('trans');

        }
        
      });
    }

  $(window).scroll(function(){
    
    $('.overlay').css({display: 'block'});
    
    setTimeout(function(){
      $('.overlay').css({display: 'none'}, 5000);
    });


    for(var i = 0; i < pages.length; i++){
      currentPage = pages[i];
      index = pages.indexOf(currentPage);
      
      if(index >= 0 && index < pages.length){
        nextPage = pages[index + 1];
        previousPage = pages[index - 1];
        randoms($(currentPage));
        //setupNextPage($(currentPage));
      }
      
    }
    //randoms($(currentPage));

    //setupNextPage($(currentPage));
  });



  /*
function expand(page){
  $(page).css({
        height: window.innerHeight,
        width: window.innerWidth
  });
}

  function setupPage(p){
    var bottomOfDiv = p.offset().top + p.outerHeight();

    //if($(window).scrollTop() > bottomOfDiv){
     p.removeClass('trans');      
    } 
  }

  for(var i = 0; i < overlays.length; i++){

    if(overlays[i].style.display !== 'none'){
      overlaysHide(overlays[i]);
    }
    else {
      overlays[i].style.display = 'block';
    }
  }

  var nextPage, currentPage, index, previousPage, bottomOfDiv;
  
  function randoms(stuff){
    bottomOfDiv = $(stuff).offset().top + $(stuff).outerHeight() - $(window).scrollTop();

    if(bottomOfDiv <=1){
      stuff.removeClass('trans');
    }
    else if(bottomOfDiv == $(stuff).outerHeight()/2){
      stuff.addClass('trans');
    }
    else{}

  function setupNextPage(page){
    
     $(window).scrollTo(0, -$(page).outerHeight(),{
      complete: function(){
        
      }  
    }); 
    
    $("html, body").bind("scroll mousedown DOMMouseScroll mousewheel keyup", function(){
      $('html, body').stop();
   }); 
  }*/
});

/*

var pages = $.makeArray($('.pages'));
var overlays = $.makeArray($('.overlay'));
var previousScroll = 0;
var currentScroll = $(this).scrollTop();


function overlaysHide(olay){
  setTimeout(function(){
    olay.style.display = 'none';
  }, 3000);
}

function showOverlays(){
  for(var i = 0; i < overlays.length; i++){
    overlays[i].style.display = 'block';
    overlaysHide(overlays[i]);
    }
}
//for(var i = 0; i < pagesi.length; i++){
  //pages.push(pagesi[i]);
  //pagesi[0].classList.add('trans');
//}

function detectScrollDirection() {
  var scrollDirection;
  currentScroll = $(window).scrollTop();

  if (currentScroll > previousScroll){
    scrollDirection = 'down';
  } 
  else {
    scrollDirection = 'up';
  }
  previousScroll = currentScroll;
  return scrollDirection;
}
var currentPage, nextPage, previousPage, halfWindow;

halfWindow = $(window).scrollTop() + window.outerHeight / 2;
currentPage = 0;
nextPage = 1;
previousPage = undefined;
function previousCurrentNextPages(){
  $('.pages').hover(function(){
    currentPage = ($(this).index());

    if(($(this).index()) <= pages.length){
      nextPage = ($(this).index() + 1);
    }
    if(($(this).index()) >= 1){
      previousPage = ($(this).index() - 1);
    }
  });
}

function expand(page){
  $(page).css({
        height: window.innerHeight,
        width: window.innerWidth
  });
}
function moveToScreenTop(x){
  setTimeout(function(){
    $('html, body').animate({scrollTop: $(x).offset().top
    }, 1000, function(){
      x.stop();
    });
  }, 1000);
}
function StackPage(page){
  $(page).animate({
      top: '400px',
      }, 10, function(){
      $(page).stop();
      page.classList.remove('trans');
  });
}
document.onscroll = function(){
  previousCurrentNextPages();
  showOverlays();
//console.log(pages[previousPage].offsetTop - $(document).scrollTop()+ pages[previousPage].style.height);

  if(detectScrollDirection() === 'down' && 
    pages[currentPage].offsetTop - $(document).scrollTop() <= 550){

    pages[previousPage].classList.add('trans');
    expand(pages[currentPage]);
    moveToScreenTop(pages[currentPage]);
    StackPage(pages[previousPage]);
    
  }
  if(detectScrollDirection() === 'down' && pages[nextPage].offsetTop - $(document).scrollTop() == 550){
    pages[currentPage].classList.add('trans');
  }
  if(detectScrollDirection() === 'up'){
    
  }
  // HIDE/SHOW OVERLAYS //

  
  // END OF HIDE/SHOW OVERLAYS //

};

$(document).ready(function(){
var menu = $.makeArray($('.menu'));
var pages = $.makeArray($('.pages'));
var content = $.makeArray($('.content'));
var overlays = $.makeArray($('.overlay'));
var previousScroll = 0;
var currentScroll = $(this).scrollTop();

    $('.window').windows({
        snapping: true,
        snapSpeed: 750,
        snapInterval: 200,
        onScroll: function(scrollPos){
            // scrollPos:Number
        },
        onSnapComplete: function($el){
          for(var i = 0; i < content.length; i++){
            content[i].classList.remove('trans2','trans3', 'trans', 'trans4');
          }

          if(menu.classList.contains('menuClosedOnScroll')){
            setTimeout(function(){
              showHideMenu();
            }, 2500);
           menu.classList.remove('menuClosedOnScroll');
          }
        },
        onWindowEnter: function($el){
            // when new window ($el) enters viewport
        }
    });

// HIDE/SHOW MENU //
function showHideMenu(){
  for(els in menu){
    menus = menu[i];
    if(menu[i].classList.contains('menuClose')){
      menu[i].classList.remove('menuClose');
      menu[i].classList.add('menuOpen');
    }
    else {  
      menu[i].classList.remove('menuOpen');
      menu[i].classList.add('menuClose');
    }
  }
}
console.log(showHideMenu());

$('.button').click(function(){
  showHideMenu();
});

function isMenuOpen() {
  if(menu.classList.contains('menuOpen')){ 
     showHideMenu();
     menu.classList.add('menuClosedOnScroll');
  }
}

// END OF HIDE/SHOW MENU //

// HIDE/SHOW OVERLAYS //
function overlaysHide(olay){
  setTimeout(function(){
    olay.stop().fadeOut();
  }, 3000);
}

function showOverlays(){
  $('.overlay').stop().fadeIn();
  overlaysHide($('.overlay'));  
}
// END OF HIDE/SHOW OVERLAYS //

var currentPage, nextPage, previousPage;

function thirdOfWindow(){
  var thirdwindowheight = $(window).innerHeight() / 2.3;
  return thirdwindowheight;
} 

function previousCurrentNextPages(){
  
    currentPage = pages.indexOf(getCurrentWindow());

    if(pages.indexOf(getCurrentWindow()) < pages.length - 1){
      nextPage = pages.indexOf(getCurrentWindow()) + 1;
    }
    else {
      nextPage = null;
    }
    if(pages.indexOf(getCurrentWindow()) > 0){
      previousPage = pages.indexOf(getCurrentWindow()) - 1;
    }
    else {
      previousPage = null;
    }
}

$(pages).css({
  height: window.innerHeight,
  width: window.innerWidth
  });

var getCurrentWindow = $.fn.getCurrentWindow = function(){
        var maxPerc = 0,
            maxElem = pages[0];
        $.each(pages, function(i){
            var perc = $(this).ratioVisible();
            if(Math.abs(perc) > Math.abs(maxPerc)){
                maxElem = this;
                maxPerc = perc;
            }
        });
        return maxElem;
    };

var scaleFactor;


function scaler(ell){
  scaleFactor = $(window).scrollTop() / ( $(document).height() - $(window).height() );

  if(scaleFactor >= 0.7 && scaleFactor <= 1){
    ell.style.transform = 'scale('+scaleFactor+')';
  }
  
}
function addRemoveClasses(){
  var position = $(window).scrollTop(), store;

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > position) {
      store = 'down';
    } else {
      store = 'up';
    }
    position = scroll;

     if(store == 'down' && pages[nextPage].offsetTop - 
      $(document).scrollTop() < thirdOfWindow() * 1.5){
      //scaler(content[currentPage]);
      content[nextPage].classList.add('trans3');
      content[currentPage].classList.add('trans4');
    }
    
     if(store == 'up' && pages[previousPage].offsetTop - 
      $(document).scrollTop() + $(pages[previousPage]).height() >= thirdOfWindow()){
      content[previousPage].classList.add('trans');
      content[currentPage].classList.add('trans2');
    }
  });
}

window.onscroll = function(){
  isMenuOpen();
  previousCurrentNextPages();
  //showOverlays();
  addRemoveClasses();
  //console.log(pages[currentPage].offsetTop);
};

});

*/































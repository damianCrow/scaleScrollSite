$(document).ready(function(){
  var menu = $.makeArray($('.menu'));
  var pages = $.makeArray($('.pages'));
  var content = $.makeArray($('.content'));
  var overlays = $.makeArray($('.overlay'));
  var menuHolders = $.makeArray($('.menuHolder'));
  var previousScroll = 0;
  var currentScroll = $(this).scrollTop();

      $('.window').windows({
          snapping: true,
          snapSpeed: 750,
          snapInterval: 250,
          onScroll: function(scrollPos){
              // scrollPos:Number
          },
          onSnapComplete: function($el){
            if(menuAll){
              if(menuAll.classList.contains('menuClosedOnScroll')){
                setTimeout(function(){
                  showHideMenu();
                }, 1500);
               menuAll.classList.remove('menuClosedOnScroll');
              }
            }
          },
          onWindowEnter: function($el){
              // when new window ($el) enters viewport
          }
      });

  // HIDE/SHOW MENU //
  var menuAll, contentAll, menuHolderAll;
  function showHideMenu(){
    for(var i = 0; i < menu.length; i++){
      contentAll = content[i];
      menuAll = menu[i];
      menuHolderAll = menuHolders[i];
    
      if(menuAll.classList.contains('menuClose')){
        menuAll.classList.remove('menuClose');
        menuAll.classList.add('menuOpen');
        contentAll.classList.add('contentMenuOpen');
        menuHolderAll.style.visibility = 'visible';
      }
      else if(menuAll.classList.contains('menuOpen')){  
        menuAll.classList.remove('menuOpen');
        menuAll.classList.add('menuClose');
        contentAll.classList.remove('contentMenuOpen');
        menuHolderAll.style.visibility = 'hidden';
      }
      else {}
        console.log(menuHolderAll);
    }
  }   

  $('.button').click(function(){
    showHideMenu();
  });

  function isMenuOpen() {
    if(menuAll){
      if(menuAll.classList.contains('menuOpen')){ 
         showHideMenu();
         menuAll.classList.add('menuClosedOnScroll');
      }
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

  window.onscroll = function(){
    isMenuOpen();
    showOverlays();
    //console.log(pages[currentPage].offsetTop);
  };

});
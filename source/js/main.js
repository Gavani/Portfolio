(function ($) {
  $(document).ready(function () {

    
    //___________________/Parallax on mouse move/___________________//
    (function () {
      if( $('.parallax')[0] ){
          var parallaxContainer = document.getElementById('parallax'),
          layers = parallaxContainer.children;

        var moveLayers = function (e) {
          var initialX = (window.innerWidth / 2) - e.pageX
          initialY = (window.innerHeight / 2) - e.pageY;

          [].slice.call(layers).forEach(function (layer, i) {
            var
              divider = i / 100,
              positionX = initialX * divider,
              positionY = initialY * divider,
              layerStyle = layer.style,
              transformString = 'translate3d(' + positionX + 'px ,' + positionY + 'px , 0)';

            layerStyle.transform = transformString;
          });
        }
        window.addEventListener('mousemove', moveLayers);
      }

    })();

    //___________________/Parallax on scroll positive/___________________//
      var parallax = (function(){
        var bg            = document.querySelector('.hero__bg');

        return{
          move: function (block, windowScroll, strafeAmmount){
              var strafe          = windowScroll / strafeAmmount + '%';
              var style           = block.style;
              var transformString = 'translate3d(0, ' + strafe + ' , 0)';

              style.transform = transformString;
              style.webkitTransform = transformString;
          },

          init: function(wScroll){
              this.move(bg, wScroll, 30);
          }
        }
      }());

      //___________________/Parallax on scroll negative/___________________//
      var parallaxNegative = (function(){
        var user          = document.querySelector('.hero__user-block'),
            sectionTitle  = document.querySelector('.section__title-header');

        return{
          move: function (block, windowScroll, strafeAmmount){
              var strafe          = windowScroll / -strafeAmmount + '%';
              var style           = block.style;
              var transformString = 'translate3d(0, ' + strafe + ' , 0)';

              style.transform = transformString;
              style.webkitTransform = transformString;
          },

          init: function(wScroll){
              this.move(user, wScroll, 5);
              this.move(sectionTitle, wScroll, 15);
          }
        }
      }());

    window.onscroll = function(){
      var wScroll = window.pageYOffset;
      parallax.init(wScroll);
      parallaxNegative.init(wScroll);
    }
  })
})(jQuery);
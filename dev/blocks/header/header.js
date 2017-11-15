;(function($){
    var $placeholder = $('.header__navigation-placeholder');
    var $navigation = $('.header__navigation');
    var $menu = $('.header__menu');

    // var getTopMenuHeight = function(){
    //     var navigationContainerHeight = $navigation.outerHeight();
    //     var menuHeight = $menu.outerHeight();
    //     var height = isMobileScreen() ? navigationContainerHeight - menuHeight : navigationContainerHeight;

    //     return  height;
    // };
    // var isMobileScreen = function(){
    //     return $(window).outerWidth() < 768;
    // };
    var recalculateTopMenuPosition = function(){
        $placeholder.css('height', $navigation.outerHeight());
        // $navigation.removeClass('header__navigation-fixed');

        // var scrollTopPosition = $(window).scrollTop();
        // var menuHeight = getTopMenuHeight();
        
        // if (scrollTopPosition > menuHeight || isMobileScreen()){
        //     $navigation.addClass('header__navigation-fixed');
        // }
    };

    $(function(){

        recalculateTopMenuPosition();

        $(window).on('scroll', function(){
            recalculateTopMenuPosition();
        });
        $(window).on('resize', function(){
            recalculateTopMenuPosition();
        });

        $menu.find('.menu__link').on('click', function(){
            var target = $(this).attr('href') || $(this).data('target');
            if (!target) {
                return;
            }
            
            var targetTop = $(target).offset().top;

            $('html, body').animate({
                scrollTop: targetTop - $navigation.outerHeight()
            }, 700);
        });
    });
})(jQuery);
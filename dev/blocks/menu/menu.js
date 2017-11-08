;(function($){
    $(function(){
        var $burger = $('.btn-burger');
        var $menuSelector = $burger.data('toggle');
        var $menu = $($menuSelector);
        var $menuBlock = $menu.find('.menu__items');
        var $menuItems = $menuBlock.find('.menu__item');

        $burger.on('click', function(){
            $burger.toggleClass('btn-burger_opened');

            if ($burger.hasClass('btn-burger_opened')){
                $menu.css('max-height', $menuBlock.outerHeight());
            }
            else{
                $menu.css('max-height', '');
            }
        });

        $menuItems.on('click', function(){
            $burger.removeClass('btn-burger_opened');
            $menu.css('max-height', '');
        });
    });
})(jQuery);
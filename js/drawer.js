$(window).on({
    'load': function() {
        $('#drawer-open').on({
            'click': function() {
                $('.header__drawer').toggleClass('open');
            }
        })
        $('#drawer-close').on({
            'click': function() {
                $('.header__drawer').toggleClass('open');
            }
        })
    }
})
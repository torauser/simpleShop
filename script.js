$(document).ready(()=>{
    //initial conditions
    $('.watches-container').siblings().hide();
    $('.watches').addClass('bar-word-effect');
    $('.watch-cart').hide();
    //tabs
    $('.showcase-bar').children().on('click', e => {
        let element = $(e.currentTarget);
        $(element).siblings().removeClass('bar-word-effect');
        $(element).addClass('bar-word-effect');

        if (element.hasClass('watches')) {
            $('.watches-container').fadeIn();
            $('.watches-container').siblings().hide();
        } else if (element.hasClass('fashion')) {
            $('.fashion-container').fadeIn();
            $('.fashion-container').siblings().hide();
        } else if (element.hasClass('furniture')) {
            $('.furniture-container').fadeIn();
            $('.furniture-container').siblings().hide();
        } else if (element.hasClass('mobile')) {
            $('.mobile-container').fadeIn();
            $('.mobile-container').siblings().hide();
        } else if (element.hasClass('cloth')) {
            $('.cloth-container').fadeIn();
            $('.cloth-container').siblings().hide();
        } else if (element.hasClass('toys')) {
            $('.toys-container').fadeIn();
            $('.toys-container').siblings().hide();
        }
    });
    //watch cards effects
    $('.watch-card').on('click',event=>{
        $(event.currentTarget).children('.watch-cart').fadeIn(200);
        $(event.currentTarget).addClass('shadow-effect');
    }).on('mouseleave', event=>{
        $(event.currentTarget).children('.watch-cart').fadeOut(200);
        $(event.currentTarget).removeClass('shadow-effect');
    });
    // social buttons
    $('.social-media').children().on('mouseenter', e=>{
        let element = $(e.currentTarget);
        $(element).addClass('shadow-social');
    }).on('mouseleave', e=>{
        let element = $(e.currentTarget);
        $(element).removeClass('shadow-social');
    });
    //categories
    $('.categories').children().on('mouseenter',e=>{
        let element = $(e.currentTarget);
        $(element).css({
            "color": "purple",
            "cursor": "pointer"
        });
    }).on('mouseleave',e=>{
        let element = $(e.currentTarget);
        $(element).css({
            "color": "black"
        });
    })
})
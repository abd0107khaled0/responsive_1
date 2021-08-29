$(function(){
    'use strict';
    $('.info-list li').click(function (){
        $(this).addClass('selected').siblings('li').removeClass('selected');
        $('.info-content div').hide();
        $('.' +  $(this).data('class')).fadeIn();
    });
    $('.features .feat').mouseenter(function(){
        $(this).addClass('active').siblings(this).removeClass('active')
    });
    $('.features .feat').mouseleave(function(){
        $(this).removeClass('active')
    })
})
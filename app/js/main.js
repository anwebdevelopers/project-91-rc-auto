(function ($) {

    'use strict';

    document.addEventListener( 'DOMContentLoaded', function() {

        /*******************************************************/
        //MENU
        /*******************************************************/
        (function() {

            const elemNav = document.querySelector('.header__menu'),
                buttonNav = document.querySelector('.header__menu-button');

            buttonNav.addEventListener('click', function (event) {
                event.stopPropagation();

                buttonNav.toggleAttribute('active');
                elemNav.toggleAttribute('active');
            });

        }());

        /*******************************************************/
        //HOME SLIDER
        /*******************************************************/
        (function() {

            document.addEventListener('readystatechange', function() {

                if ( document.readyState === 'complete') {

                    $( '.stock' ).each( function () {

                        const $stock = $( this );
                        $stock.append( '<div class="stock__dots"></div>' )
                            .find( '.stock__item' )
                            .addClass( 'swiper-slide' )
                            .wrapAll( '<div class="stock__container swiper-container"><div class="stock__wrapper swiper-wrapper"></div></div>' );

                        const stockSwiper = new Swiper( $stock.find( '.stock__container' ), {

                            speed: 800,
                            spaceBetween: 0,
                            autoHeight: true,
                            //direction: 'vertical',
                            loop: true,

                            autoplay: {
                                delay: 5000,
                            },

                            pagination: {
                                el: $stock.find('.stock__dots'),
                                clickable: true,
                                type: 'bullets',
                            },

                        } );

                        window.addEventListener( 'resize', function () {
                            stockSwiper.updateSize();
                        } );
                    } );
                }
            });

        }());

    });

}( jQuery ));

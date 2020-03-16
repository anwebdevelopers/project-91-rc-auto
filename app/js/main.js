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

        /*******************************************************/
        //GALLERY SLIDER
        /*******************************************************/
        (function() {
            document.addEventListener('readystatechange', function() {
                if (document.readyState === 'complete') {
                    $( '.gallery__box' ).each( function () {

                        const $gallery__box = $( this );

                        $gallery__box.find( '.gallery__item' )
                            .addClass( 'swiper-slide' )
                            .wrapAll( '<div class="gallery__container swiper-container"><div class="gallery__wrapper swiper-wrapper"></div></div>' )
                            .closest( '.gallery__container' )
                            .after( '<div class="gallery__nav"><div class="swiper-button-prev"></div><div class="swiper-button-next"></div></div>' )/*.after( '<div class="gallery__dots"></div>' )*/;

                        const gallerySwiper = new Swiper( $gallery__box.find( '.gallery__container' ), {

                            speed: 600,
                            spaceBetween: 0,
                            //autoHeight: true,
                            slidesPerView: 4,
                            loop: true,
                            loopedSlides: 20,
                            autoplay: {
                                delay: 3000,
                            },

                            navigation: {
                                nextEl: '.gallery__nav .swiper-button-next',
                                prevEl: '.gallery__nav .swiper-button-prev',
                            },

                            breakpoints: {
                                0: {
                                    slidesPerView: 1,
                                },
                                360: {
                                    slidesPerView: 2,
                                },
                                640: {
                                    slidesPerView: 3,
                                },
                                1024: {
                                    slidesPerView: 4,
                                },
                            }

                        } );

                        window.addEventListener( 'resize', function () {
                            gallerySwiper.updateSize();
                        } );

                    } );
                }
            });
        }());

        /*******************************************************/
        //SPECOFFERS SLIDER
        /*******************************************************/
        (function() {
            document.addEventListener('readystatechange', function() {
                if (document.readyState === 'complete') {
                    $( '.specoffers__box' ).each( function () {

                        const $specoffers__box = $( this );

                        $specoffers__box.addClass( 'swiper' ).find( '.specoffers__item' )
                            .addClass( 'swiper-slide' )
                            .wrapAll( '<div class="specoffers__container swiper-container"><div class="specoffers__wrapper swiper-wrapper"></div></div>' )
                            .closest( '.specoffers__container' )
                            .after( '<div class="specoffers__nav"><div class="swiper-button-next"></div></div>' )/*.after( '<div class="specoffers__dots"></div>' )*/;

                        const specoffersSwiper = new Swiper( $specoffers__box.find( '.specoffers__container' ), {

                            speed: 600,
                            spaceBetween: 30,
                            //autoHeight: true,
                            slidesPerView: 4,
                            loop: true,
                            //loopedSlides: 20,
                            autoplay: {
                                delay: 3000,
                            },

                            navigation: {
                                nextEl: '.specoffers__nav .swiper-button-next',
                                //prevEl: '.swiper-button-prev',
                            },

                            breakpoints: {
                                0: {
                                    slidesPerView: 1,
                                },
                                360: {
                                    slidesPerView: 2,
                                },
                                640: {
                                    slidesPerView: 3,
                                },
                                1024: {
                                    slidesPerView: 4,
                                },
                            },

                            on: {
                                init: function () {

                                    const thisSwiper = this;

                                    $(thisSwiper.el).next('.specoffers__nav').find('.swiper-button-next').attr('data-specoffers-count', (+thisSwiper.slides[thisSwiper.activeIndex].getAttribute('data-swiper-slide-index') + 1) + ' / ' + $(thisSwiper.slides).not('.swiper-slide-duplicate').length);
                                },
                            }

                        } );

                        specoffersSwiper.on('slideChange', function () {

                            $(specoffersSwiper.el).next('.specoffers__nav').find('.swiper-button-next').attr('data-specoffers-count', (+specoffersSwiper.slides[specoffersSwiper.activeIndex].getAttribute('data-swiper-slide-index') + 1) + ' / ' + $(specoffersSwiper.slides).not('.swiper-slide-duplicate').length);
                        });

                        window.addEventListener( 'resize', function () {
                            specoffersSwiper.updateSize();
                        } );

                    } );
                }
            });
        }());

    });

}( jQuery ));

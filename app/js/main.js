(function ($) {

    'use strict';

    document.addEventListener('DOMContentLoaded', function () {

        /*******************************************************/
        //MENU
        /*******************************************************/
        (function () {

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
        (function () {
            document.addEventListener('readystatechange', function () {
                if (document.readyState === 'complete') {
                    $('.stock').each(function () {
                        const $stock = $(this);
                        $stock.append('<div class="stock__dots"></div>')
                            .find('.stock__item')
                            .addClass('swiper-slide')
                            .wrapAll('<div class="stock__container swiper-container"><div class="stock__wrapper swiper-wrapper"></div></div>');

                        const stockSwiper = new Swiper($stock.find('.stock__container'), {

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

                        });

                        window.addEventListener('resize', function () {
                            stockSwiper.updateSize();
                        });
                    });
                }
            });
        }());

        /*******************************************************/
        //GALLERY SLIDER
        /*******************************************************/
        (function () {
            document.addEventListener('readystatechange', function () {
                if (document.readyState === 'complete') {
                    $('.gallery__box').each(function () {

                        const $gallery__box = $(this);

                        $gallery__box.find('.gallery__item')
                            .addClass('swiper-slide')
                            .wrapAll('<div class="gallery__container swiper-container"><div class="gallery__wrapper swiper-wrapper"></div></div>')
                            .closest('.gallery__container')
                            .after('<div class="gallery__nav"><div class="swiper-button-prev"></div><div class="swiper-button-next"></div></div>');

                        const gallerySwiper = new Swiper($gallery__box.find('.gallery__container'), {

                            speed: 600,
                            spaceBetween: 0,
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

                        });

                        window.addEventListener('resize', function () {
                            gallerySwiper.updateSize();
                        });

                    });
                }
            });
        }());

        /*******************************************************/
        //SPECOFFERS SLIDER
        /*******************************************************/
        (function () {
            document.addEventListener('readystatechange', function () {
                if (document.readyState === 'complete') {
                    $('.specoffers__box').each(function () {

                        const $specoffers__box = $(this);

                        $specoffers__box.addClass('swiper').find('.specoffers__item')
                            .addClass('swiper-slide')
                            .wrapAll('<div class="specoffers__container swiper-container"><div class="specoffers__wrapper swiper-wrapper"></div></div>')
                            .closest('.specoffers__container')
                            .after('<div class="specoffers__nav"><div class="swiper-button-next"></div></div>');

                        const specoffersSwiper = new Swiper($specoffers__box.find('.specoffers__container'), {

                            speed: 600,
                            spaceBetween: 30,
                            slidesPerView: 4,
                            loop: true,
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

                        });

                        specoffersSwiper.on('slideChange', function () {

                            $(specoffersSwiper.el).next('.specoffers__nav').find('.swiper-button-next').attr('data-specoffers-count', (+specoffersSwiper.slides[specoffersSwiper.activeIndex].getAttribute('data-swiper-slide-index') + 1) + ' / ' + $(specoffersSwiper.slides).not('.swiper-slide-duplicate').length);
                        });

                        window.addEventListener('resize', function () {
                            specoffersSwiper.updateSize();
                        });

                    });
                }
            });
        }());

        /*******************************************************/
        //TABS
        /*******************************************************/

        (function () {
            $('.tabs').each(function () {
                const $tabs = $(this);
                $tabs.prepend('<div class="tabs__buttons"></div>')
                    .find('.tabs__section').wrapAll('<div class="tabs__box"></div>')
                    .each(function () {
                        $tabs.find('.tabs__buttons').append('<div class="tabs__buttons-item">' + $(this).attr('data-tabs-title') + '</div>');
                    });

                $tabs.find('> .tabs__buttons .tabs__buttons-item').first().attr('active', '');
                $tabs.find('> .tabs__box > .tabs__section').not(':first-child').hide();
                $tabs.find('> .tabs__buttons').on('click', '.tabs__buttons-item:not( [ active ] )', function () {
                    $(this).attr('active', '').siblings().removeAttr('active').closest('.tabs').find('> .tabs__box > .tabs__section').slideUp(300).eq($(this).index()).slideDown(300);
                });
            }).attr('active','');
        }());

        /*******************************************************/
        //NAV OPEN ACTIVE TAB
        /*******************************************************/

        (function () {
            $('.nav').each(function () {
                $(this).closest('.tabs').find('.tabs__buttons-item').eq($(this).closest('.tabs').find('.nav__item > .current').closest('.tabs__section').index()).click();
            });
        }());

        /*******************************************************/
        //ACCORDION
        /*******************************************************/

        (function () {
            $('.accordion').each(function () {
                const $this = $(this);

                ($this.hasClass('current') || $this.find('.current').length) ? $this.addClass('active') : $this.children('.accordion__box').hide();
            }).on('click', '.accordion__title', function (event) {
                event.stopPropagation();

                if (!$(this).closest('.accordion').hasClass('active')) {
                    event.preventDefault();
                    $(this).closest('.accordion').addClass('active')
                        .children('.accordion__box').slideDown(200).end()
                        .siblings().removeClass('active')
                        .children('.accordion__box').slideUp(200);
                }
            });
        }());

        /*******************************************************/
        //DETAIL SLIDER
        /*******************************************************/
        (function () {
            document.addEventListener('readystatechange', function () {
                if (document.readyState === 'complete') {
                    $('.detail__images').addClass('swiper').each(function () {
                        const $detailImages = $(this);
                        $detailImages.append('<div class="detail__images-dots"></div>')
                            .find('.detail__images-item')
                            .addClass('swiper-slide')
                            .wrapAll('<div class="detail__images-container swiper-container"><div class="detail__images-wrapper swiper-wrapper"></div></div>');

                        const detailImagesSwiper = new Swiper($detailImages.find('.detail__images-container'), {

                            speed: 800,
                            spaceBetween: 0,
                            autoHeight: true,
                            loop: true,

                            autoplay: {
                                delay: 5000,
                            },

                            pagination: {
                                el: $detailImages.find('.detail__images-dots'),
                                clickable: true,
                                type: 'bullets',
                            },

                            on: {
                                paginationRender: function () {
                                    const thisSwiper = this;
                                    $(thisSwiper.pagination.bullets).each(function (i) {
                                        $(this).append($(thisSwiper.slides).eq(i).find('img').clone());
                                    });
                                }
                            }
                        });

                        window.addEventListener('resize', function () {
                            detailImagesSwiper.updateSize();
                        });
                    });
                }
            });
        }());

        //*********************************************************//
        //YANDEX MAP
        //*********************************************************//
        ( function() {

            const mapElem = document.querySelector( '#map' );

            if (mapElem) {
                const lazyLoadMap = new IntersectionObserver(

                    function( entries ) {

                        for ( let i = 0; i < entries.length; i++  ) {

                            const entry = entries[ i ];
                            const target = entry.target;

                            if ( entry.isIntersecting ) {

                                const script = document.createElement( 'script' );

                                script.src = '//api-maps.yandex.ru/2.1/?lang=ru_RU';

                                document.getElementsByTagName( 'head' )[ 0 ].appendChild( script );

                                script.onload = function() {

                                    ymaps.ready( function() {

                                        const myMap = new ymaps.Map( 'map', {
                                            center: [ 57.626595, 39.891324 ],
                                            zoom: 8,
                                            controls: [],
                                            behaviors: [ 'drag', 'dblClickZoom', 'rightMouseButtonMagnifier', 'multiTouch' ]
                                        }, {
                                            searchControlProvider: 'yandex#search'
                                        });

                                        //Элементы управления
                                        myMap.controls.add( 'zoomControl', {
                                            size: 'small',
                                            position: {
                                                top: 'auto',
                                                right: 10,
                                                bottom: 50
                                            }
                                        } );

                                        myMap.geoObjects.add( new ymaps.Placemark(
                                            [ 57.626595, 39.891324 ],
                                            {
                                                hintContent: 'Адрес: г. Москва, ул. Крылатская, д.15',
                                                balloonContent: 'Адрес: г. Москва, ул. Крылатская, д.15',
                                            },
                                            {
                                                iconLayout: 'default#image',
                                                iconImageHref: 'img/icon-mark.svg',
                                                iconImageSize: [ 53, 62 ],
                                                iconImageOffset: [- 26, -62 ],
                                            }
                                        ) );

                                        //Вкл/Выкл драг карты при адаптиве
                                        const manageDrag = function() {
                                            window.innerWidth <= 992 ? myMap.behaviors.disable( 'drag' ) : myMap.behaviors.enable( 'drag' )
                                        };
                                        window.onload = manageDrag
                                        window.onresize = manageDrag

                                        //перерисуем карту по ресайзу
                                        typeof ResizeObserver === 'object' && new ResizeObserver( function( entries ) {
                                            myMap.container.fitToViewport()
                                        } ).observe( mapElem );

                                        //перерисуем карту после инициализации
                                        myMap.container.fitToViewport();

                                    } );

                                }

                                lazyLoadMap.unobserve( target );
                            }
                        }
                    },
                    {
                        root: null,
                        rootMargin: ( window.innerHeight / 2 ) + 'px ' + ( window.innerWidth / 2 ) + 'px',
                        threshold: [ 0 ],
                    }
                );

                // Start observing an element
                lazyLoadMap.observe( mapElem );
            }

        } () );
    });

}(jQuery));

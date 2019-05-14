$(document).ready(function () {


    //header
    $('.searchIcon').click(function () {
        $(this).parent().toggleClass("open")
    });

    //side menu
    $("#navbar").mCustomScrollbar({
        theme: "minimal-dark"
    });
    $("#navbar ul li a").click(function () {
        $(this).parent("li").siblings().removeClass("active");
        $(this).parent().addClass("active");
    });

    //main carousel
    $('#myCarousel').carousel({
        //interval: 4000
    });

    //events section 
    $('#quote-carousel').carousel({
        interval: 4000,
    });
    $('#boxesCarousel').carousel({
        interval: 6000
    });

    //social counters
    $.fn.is_on_screen = function () {
        var win = $(window);
        var viewport = {
            top: win.scrollTop(),
            left: win.scrollLeft()
        };
        viewport.right = viewport.left + win.width();
        viewport.bottom = viewport.top + win.height();

        var bounds = this.offset();
        bounds.right = bounds.left + this.outerWidth();
        bounds.bottom = bounds.top + this.outerHeight();

        return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
    };



    if ($('.count').length > 0) { // if target element exists in DOM
        if ($('.count').is_on_screen()) { // if target element is visible on screen after DOM loaded


            // console.log("can you see me");
            $('.count').each(function () {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                        duration: 2000,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(Math.ceil(now));
                        }
                    });
            });


        } else {
            // $('.log').html('<div class="alert">target element is not visible on screen</div>'); // log info
        }
    }
    var count = 0;
    $(window).scroll(function () {


        if ($('.counters').length > 0 && count == 0) {
            if ($('.counters').is_on_screen()) {
                // console.log("can you see me scroll");
                $('.count').each(function () {
                    $(this).prop('Counter', 0).animate({
                        Counter: $(this).text()
                    }, {
                            duration: 3000,
                            easing: 'swing',
                            step: function (now) {
                                $(this).text(Math.ceil(now));
                            }
                        });
                });
                count = 1;
            }

        }
    });


    // Home page 
    $("#navbar ul li:nth-child(1)").addClass("active");

    var mql = window.matchMedia("screen and (min-width: 1250px)");
    if (mql.matches) { // if media query matches 
        //sticky header
        window.onscroll = function () { myFunction() };

        var header = document.getElementById("header");
        var sticky = header.offsetTop;

        function myFunction() {
            if (window.pageYOffset >= (sticky + 130)) {
                header.classList.add("sticky")
            }
            else {
                header.classList.remove("sticky");
            }
        }

    }


    //animate when scroll
    var $animation_elements = $('.animation-element');
    var $window = $(window);

    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        $.each($animation_elements, function () {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);

            //check to see if this current container is within viewport
            if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
                $element.addClass('in-view');
            } else {
                $element.removeClass('in-view');
            }
        });
    }

    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');



    // map 
    function createMapwithMarker(latCenter, lngCenter, titleMarker, latMarker, lngMarker) {

        //map options 
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 16,
            center: new google.maps.LatLng(latCenter, lngCenter),
            styles: styledMapType,
            disableDefaultUI: true,
            zoomControl: false,
            scrollwheel: false,
            navigationControl: false,
            mapTypeControl: false,
            scaleControl: true,
            draggable: true
        });

        //add marker
        new google.maps.Marker({
            map: map,
            position: new google.maps.LatLng(latMarker, lngMarker),
            title: titleMarker,
            animation: google.maps.Animation.BOUNCE,
            icon: './images/marker.png'
        });
    }

    createMapwithMarker(24.4258117, 54.4188263, 'general directorate of civil defence', 24.4258117, 54.4188263);

    $('#gov').on("click", function () {
        $(this).addClass('focused');
        $('#dept').removeClass('focused')
        createMapwithMarker(24.4258117, 54.4188263, 'general directorate of civil defence', 24.4258117, 54.4188263);
    });
    $('#dept').on("click", function () {
        $(this).addClass('focused');
        $('#gov').removeClass('focused')
        createMapwithMarker(30.0444196, 31.23571160000006, 'Umm AL Quwain', 30.0444196, 31.23571160000006);
    });


    //map style array
    var styledMapType = [
        {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#868b93"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#edebe8"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#fef1b3"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#f9dd8a"
                },
                {
                    "weight": "2"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#acdbfd"
                },
                {
                    "visibility": "on"
                }
            ]
        }
    ];














});
(function($, window, document, undefined) {

    $.fn.slider = function(options) {
        return this.each(function() {

            var settings = $.extend({
                show: ($(this).data("show")) ? $(this).data("show") : 1,
                autoplay: ($(this).data("autoplay")) ? $(this).data("autoplay") : false,
                random: ($(this).data("random")) ? $(this).data("random") : false,
                hidebuttons: ($(this).data("hidebuttons")) ? $(this).data("hidebuttons") : false,
                rows: 1
            }, options);

            // Variables
            var wrapper = $(this),
                viewport = $(".viewport", this),
                ul = $("ul.slides", viewport),
                li = ul.children("li"),
                current_slide = 0,
                number_of_slides = (li.length-1);

            if (settings.random) {
                $('li', ul).sort(function() {
                    return (Math.round(Math.random()) - 0.5)
                }).appendTo(ul);
            }

            var offsets = parseInt($(li).css("margin-left")) + 
                parseInt($(li).css("margin-right"));

            var item_width = Math.round((viewport.width() / settings.show) - offsets);

             

            $(li).width(item_width);
            $(ul).width(item_width * ((number_of_slides + 1) / settings.rows) + 1000);

            $.each(li, function() {
                image = $(this).data("background");
                if (image) {
                    $(this).css("background-image", "url('" + image + "')")
                        .css("background-repeat", "no-repeat")
                }
            })

            slide(current_slide);
        
            var interval = false;

            function set_interval() {
                if (settings.autoplay) {
                    clearInterval(interval);
                    interval = setInterval(function() {
                        if (!$("a.next", wrapper).is(':hidden')) {
                            $("a.next", wrapper).trigger("click");
                            set_interval()
                        } else {
                            $("a.previous", wrapper).trigger("click");
                            set_interval()
                        }

                    }, settings.autoplay);
                }
            }

            function slide(slide) {
                current_slide = slide;

                if (li.eq(current_slide).find("div.callout").length) {
                    li.eq(current_slide).find("div.callout")
                        .css("opacity", 0)
                        .css("margin-top", "0px")
                        .animate({
                            'opacity': 1,
                            'margin-top': -(li.eq(current_slide).find("div.callout").height()/2)
                        }, 2000);
                }

                var current_position = parseInt(ul.css("marginLeft"));
                $(ul).animate({
                    marginLeft: -(current_slide * (item_width +offsets) * settings.show)
                }, 500, function() {});


                check_options();
            }


            function previous() {
                if (current_slide > 0) {
                    current_slide--;
                } else if (current_slide === 0) {
                    current_slide = number_of_slides;
                }

                slide(current_slide)
            }

            function next() {
                if (current_slide < number_of_slides) {
                    current_slide++;
                } else if (current_slide === number_of_slides) {
                    current_slide = 0;
                }
                slide(current_slide)
            }

            function last() {
                if (number_of_slides > (settings.show-1)) {
                    slide(number_of_slides/settings.show)
                }
            }


            function check_options() {
                console.log(
                    settings.show,
                    current_slide, 
                    number_of_slides, 
                     
                    ((current_slide * settings.show) + settings.show), 
                    (((current_slide * settings.show) + settings.show) >= number_of_slides)
                );

                $(".next, .previous", wrapper).fadeIn();


                if (settings.show > 1) {
                    if (((current_slide * settings.show) + settings.show)  >= number_of_slides ) {
                        $(".next", wrapper).fadeOut(); 
                    }
                } else if (current_slide === number_of_slides)  {
                    $(".next", wrapper).fadeOut();
                }
             

                if (current_slide === 0) {
                    $(".previous", wrapper).fadeOut();
                } 

                // Toggle Navigation Items

                if (wrapper.data("displaydots")) {
                    var dots = wrapper.children("div.dots");
                    dots.children("a").removeClass("on")
                    dots.children("a").eq(current_slide).addClass("on");
                }

                wrapper.css("visibility", "visible");
            }



            if (number_of_slides > 0 && !settings.hidebuttons) {
                wrapper.children(".previous, .next, .last", wrapper).remove();
                wrapper.append(
                    $('<a href="javascript: void(0);" class="previous"/>').on("click", function() {
                        previous();
                       
                    }).append( 
                        $('<i class="fa fa-3x fa-chevron-left">')
                    )
                ).append(
                    $('<a href="javascript: void(0);" class="next"/>').on("click", function() {
                         next();
                    }).append( 
                        $('<i class="fa fa-3x fa-chevron-right">')
                    )
                ).append(
                    $('<a href="javascript: void(0);" class="last"/>').on("click", function() {
                         last();
                    })
                );

                check_options();

                if (wrapper.data("displaydots")) {
                    $("div.dots", wrapper).remove();

                    var dots = $('<div class="clear dots">');
                    for (i = 0; i < ((number_of_slides / settings.show) + 1); i++) {
                        var dot = $('<a href="javascript: void(0);">').on("click", function() {
                            slide(parseInt($(this).text()));
                        }).html(i)

                        dots.append(dot);
                    }
                    dots.children("a").eq(0).addClass("on");
                    wrapper.append(dots);
                }
            } else if (settings.hidebuttons) {
                $(".next").off("click").on("click", function() {

                    var index = $(this).index(".next");
                    var slide = $(this).closest("form").find("ul.slides").children("li").eq(index)[0];

                    //console.log(index, slide, $(this).closest("form"));
                    if (Forms.elements_are_valid($("[data-required]", slide))) {
                        next();
                    }
                    return false;
                })

                $(".previous").off("click").on("click", function() {
                    previous();
                });

            }

        });

    };
})(jQuery, window, document);



$(window).on("load", function() {
   $(".slider").each(function() {
        $(this).slider({});
    });
}).on("resize", function() {
    $(".slider").each(function() {
        $(this).slider({});
    })
})


if (typeof Routes.reload == 'function') {
    $(window).bind('hashchange', function() {
        $(".slider").each(function() {
            $(this).slider({});
        })
    })
}

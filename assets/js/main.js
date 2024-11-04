! function(e) {
    "use strict";

    function t(t) {
        e(t).length > 0 && e(t).each((function() {
            var t = e(this).find("a");
            e(this).find(t).each((function() {
                e(this).on("click", (function() {
                    var t = e(this.getAttribute("href"));
                    t.length && (event.preventDefault(), e("html, body").stop().animate({
                        scrollTop: t.offset().top - 10
                    }, 1e3))
                }))
            }))
        }))
    }
    if (e(window).on("load", (function() {
            e(".preloader").fadeOut()
        })), e(".nice-select").length && e(".nice-select").niceSelect(), e(".preloader").length > 0 && e(".preloaderCls").each((function() {
            e(this).on("click", (function(t) {
                t.preventDefault(), e(".preloader").css("display", "none")
            }))
        })), e(document).ready((function() {
            setTimeout((function() {
                e("#loader").addClass("loaded"), e("#loader").hasClass("loaded") && e("#preloader").delay(9e3).queue((function() {
                    e(this).remove()
                }))
            }), 3e3)
        })), e.fn.thmobilemenu = function(t) {
            var a = e.extend({
                menuToggleBtn: ".th-menu-toggle",
                bodyToggleClass: "th-body-visible",
                subMenuClass: "th-submenu",
                subMenuParent: "menu-item-has-children",
                thSubMenuParent: "th-item-has-children",
                subMenuParentToggle: "th-active",
                meanExpandClass: "th-mean-expand",
                subMenuToggleClass: "th-open",
                toggleSpeed: 400
            }, t);
            return this.each((function() {
                var t = e(this);

                function i() {
                    t.toggleClass(a.bodyToggleClass);
                    var i = "." + a.subMenuClass;
                    e(i).each((function() {
                        e(this).hasClass(a.subMenuToggleClass) && (e(this).removeClass(a.subMenuToggleClass), e(this).css("display", "none"), e(this).parent().removeClass(a.subMenuParentToggle))
                    }))
                }
                t.find("." + a.subMenuParent).each((function() {
                    var t = e(this).find("ul");
                    t.addClass(a.subMenuClass), t.css("display", "none"), e(this).addClass(a.subMenuParent), e(this).addClass(a.thSubMenuParent), e(this).children("a").append(a.appendElement)
                }));
                var n = "." + a.thSubMenuParent + " > a";
                e(n).each((function() {
                    e(this).on("click", (function(t) {
                        var i, n;
                        t.preventDefault(), i = e(this).parent(), (n = i.children("ul")).length > 0 && (i.toggleClass(a.subMenuParentToggle), n.slideToggle(a.toggleSpeed), n.toggleClass(a.subMenuToggleClass))
                    }))
                })), e(a.menuToggleBtn).each((function() {
                    e(this).on("click", (function() {
                        i()
                    }))
                })), t.on("click", (function(e) {
                    e.stopPropagation(), i()
                })), t.find("div").on("click", (function(e) {
                    e.stopPropagation()
                }))
            }))
        }, e(".th-menu-wrapper").thmobilemenu(), t(".onepage-nav"), t(".scroll-down"), e(window).on("scroll", (function() {
            e(".onepage-nav").length
        })), e(window).scroll((function() {
            e(this).scrollTop() > 500 ? (e(".sticky-wrapper").addClass("sticky"), e(".category-menu").addClass("close-category")) : (e(".sticky-wrapper").removeClass("sticky"), e(".category-menu").removeClass("close-category"))
        })), e(".menu-expand").each((function() {
            e(this).on("click", (function(t) {
                t.preventDefault(), e(".category-menu").toggleClass("open-category")
            }))
        })), e(".scroll-top").length > 0) {
        var a = document.querySelector(".scroll-top"),
            i = document.querySelector(".scroll-top path"),
            n = i.getTotalLength();
        i.style.transition = i.style.WebkitTransition = "none", i.style.strokeDasharray = n + " " + n, i.style.strokeDashoffset = n, i.getBoundingClientRect(), i.style.transition = i.style.WebkitTransition = "stroke-dashoffset 10ms linear";
        var s = function() {
            var t = e(window).scrollTop(),
                a = e(document).height() - e(window).height(),
                s = n - t * n / a;
            i.style.strokeDashoffset = s
        };
        s(), e(window).scroll(s);
        jQuery(window).on("scroll", (function() {
            jQuery(this).scrollTop() > 50 ? jQuery(a).addClass("show") : jQuery(a).removeClass("show")
        })), jQuery(a).on("click", (function(e) {
            return e.preventDefault(), jQuery("html, body").animate({
                scrollTop: 0
            }, 750), !1
        }))
    }
    e("[data-bg-src]").length > 0 && e("[data-bg-src]").each((function() {
        var t = e(this).attr("data-bg-src");
        e(this).css("background-image", "url(" + t + ")"), e(this).removeAttr("data-bg-src").addClass("background-image")
    })), e("[data-bg-color]").length > 0 && e("[data-bg-color]").each((function() {
        var t = e(this).attr("data-bg-color");
        e(this).css("background-color", t), e(this).removeAttr("data-bg-color")
    })), e("[data-border]").each((function() {
        var t = e(this).data("border");
        e(this).css("--th-border-color", t)
    })), e("[data-mask-src]").length > 0 && e("[data-mask-src]").each((function() {
        var t = e(this).attr("data-mask-src");
        e(this).css({
            "mask-image": "url(" + t + ")",
            "-webkit-mask-image": "url(" + t + ")"
        }), e(this).addClass("bg-mask"), e(this).removeAttr("data-mask-src")
    })), e(".th-slider").each((function() {
        var t = e(this),
            a = e(this).data("slider-options"),
            i = t.find(".slider-prev"),
            n = t.find(".slider-next"),
            s = t.find(".slider-pagination"),
            o = a.autoplay,
            r = {
                slidesPerView: 1,
                spaceBetween: a.spaceBetween ? a.spaceBetween : 24,
                loop: 0 != a.loop,
                speed: a.speed ? a.speed : 1e3,
                autoplay: o || {
                    delay: 6e3,
                    disableOnInteraction: !1
                },
                navigation: {
                    nextEl: n.get(0),
                    prevEl: i.get(0)
                },
                pagination: {
                    el: s.get(0),
                    clickable: !0,
                    renderBullet: function(e, t) {
                        return '<span class="' + t + '" aria-label="Go to Slide ' + (e + 1) + '"></span>'
                    }
                }
            },
            l = JSON.parse(t.attr("data-slider-options"));
        l = e.extend({}, r, l);
        new Swiper(t.get(0), l);
        e(".slider-area").length > 0 && e(".slider-area").closest(".container").parent().addClass("arrow-wrap")
    }));
    var o = new Swiper(".heroThumbs", {
        spaceBetween: 10,
        slidesPerView: 2,
        freeMode: !0,
        watchSlidesProgress: !0
    });
    o = new Swiper(".hero-slider-2", {
        spaceBetween: 10,
        thumbs: {
            swiper: o
        },
        effect: "fade",
        pagination: {
            el: ".swiper-pagination",
            clickable: !0
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        autoplay: {
            delay: 6e3,
            disableOnInteraction: !1
        },
        loop: !0,
        watchSlidesProgress: !0
    }), o = new Swiper(".hero3Thumbs", {
        spaceBetween: 10,
        slidesPerView: 1,
        freeMode: !0,
        watchSlidesProgress: !0
    }), o = new Swiper(".hero-slider-3", {
        thumbs: {
            swiper: o
        },
        loop: !0,
        effect: "fade",
        autoplay: {
            delay: 6e3,
            disableOnInteraction: !1
        },
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
            formatFractionCurrent: function(e) {
                return "0" + e
            }
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    });
    document.addEventListener("mouseenter", e => {
        const t = e.target;
        if (t && t.matches && t.matches(".swiper-container")) {
            t.swiper.autoplay.stop(), t.classList.add("swiper-paused");
            t.querySelector(".swiper-pagination-bullet-active").style.animationPlayState = "paused"
        }
    }, !0), document.addEventListener("mouseleave", e => {
        const t = e.target;
        if (t && t.matches && t.matches(".swiper-container")) {
            t.swiper.autoplay.start(), t.classList.remove("swiper-paused");
            const e = t.querySelector(".swiper-pagination-bullet-active");
            e.classList.remove("swiper-pagination-bullet-active"), setTimeout(() => {
                e.classList.add("swiper-pagination-bullet-active")
            }, 10)
        }
    }, !0), e(document).ready((function() {
        e(".categorySlider").each((function() {
            const e = .1,
                t = .01;
            new Swiper(".categorySlider", {
                    slidesPerView: 5,
                    spaceBetween: 60,
                    centeredSlides: !0,
                    loop: !0,
                    grabCursor: !0,
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: !0
                    },
                    breakpoints: {
                        300: {
                            slidesPerView: 1,
                            spaceBetween: 10
                        },
                        600: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 40
                        },
                        1280: {
                            slidesPerView: 5,
                            spaceBetween: 60
                        }
                    }
                }),
                function a() {
                    requestAnimationFrame(a), document.querySelectorAll(".single").forEach((a, i) => {
                        const n = a.getBoundingClientRect(),
                            s = .5 * window.innerWidth - (n.x + .5 * n.width);
                        let o = Math.abs(s) * e - n.width * e;
                        o < 0 && (o = 0);
                        const r = s < 0 ? "left top" : "right top";
                        a.style.transform = `translate(0, ${o}px) rotate(${-s*t}deg)`, a.style.transformOrigin = r
                    })
                }()
        }))
    })), e(document).ready((function() {
        e(".categorySlider2").each((function() {
            const e = .1,
                t = 0;
            new Swiper(".categorySlider2", {
                    slidesPerView: "auto",
                    slidesPerView: 5,
                    spaceBetween: 60,
                    centeredSlides: !0,
                    loop: !0,
                    grabCursor: !0,
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: !0
                    },
                    breakpoints: {
                        300: {
                            slidesPerView: 1,
                            spaceBetween: 30
                        },
                        600: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 40
                        },
                        1280: {
                            slidesPerView: 5,
                            spaceBetween: 60
                        }
                    }
                }),
                function a() {
                    requestAnimationFrame(a), document.querySelectorAll(".single2").forEach((a, i) => {
                        const n = a.getBoundingClientRect(),
                            s = .5 * window.innerWidth - (n.x + .5 * n.width);
                        let o = Math.abs(s) * e - n.width * e;
                        o < 0 && (o = 0);
                        const r = s < 0 ? "left top" : "right top";
                        a.style.transform = `translate(0, ${o}px) rotate(${-s*t}deg)`, a.style.transformOrigin = r
                    })
                }()
        }))
    })), e(".destination-list-wrap").on("click", (function() {
        e(this).addClass("active").siblings().removeClass("active")
    })), e(".destination-prev").on("click", (function() {
        var t;
        (t = e(".destination-list-area .destination-list-wrap.active")).prev().length > 0 ? (t.removeClass("active"), t.prev().addClass("active")) : (t.removeClass("active"), e(".destination-list-area .destination-list-wrap:last").addClass("active"))
    })), e(".destination-next").on("click", (function() {
        var t;
        (t = e(".destination-list-area .destination-list-wrap.active")).next().length > 0 ? (t.removeClass("active"), t.next().addClass("active")) : (t.removeClass("active"), e(".destination-list-area .destination-list-wrap:first").addClass("active"))
    })), e(".accordion-item-wrapp li:first-child").addClass("active"), e(".according-img-tab").hide(), e(".according-img-tab:first").show(), e(".accordion-item-wrapp .accordion-item-content").mouseenter((function() {
        e(".accordion-item-wrapp .accordion-item-content").removeClass("active"), e(".according-img-tab").hide();
        var t = e(this).find(".accordion-tab-item").attr("data-bs-target");
        return e(t).fadeIn(), !1
    })), e(document).on("mouseover", ".hover-item", (function() {
        e(this).addClass("item-active"), e(".hover-item").removeClass("item-active"), e(this).addClass("item-active")
    })), e("[data-ani]").each((function() {
        var t = e(this).data("ani");
        e(this).addClass(t)
    })), e("[data-ani-delay]").each((function() {
        var t = e(this).data("ani-delay");
        e(this).css("animation-delay", t)
    })), e("[data-slider-prev], [data-slider-next]").on("click", (function() {
        var t = e(this).data("slider-prev") || e(this).data("slider-next"),
            a = e(t);
        if (a.length) {
            var i = a[0].swiper;
            i && (e(this).data("slider-prev") ? i.slidePrev() : i.slideNext())
        }
    })), e.fn.activateSliderThumbs = function(t) {
        var a = e.extend({
            sliderTab: !1,
            tabButton: ".tab-btn"
        }, t);
        return this.each((function() {
            var t = e(this),
                i = t.find(a.tabButton),
                n = e('<span class="indicator"></span>').appendTo(t),
                s = t.data("slider-tab"),
                o = e(s)[0].swiper;
            if (i.on("click", (function(t) {
                    t.preventDefault();
                    var i = e(this);
                    if (i.addClass("active").siblings().removeClass("active"), c(i), i.prevAll(a.tabButton).addClass("list-active"), i.nextAll(a.tabButton).removeClass("list-active"), a.sliderTab) {
                        var n = i.index();
                        o.slideTo(n)
                    }
                })), a.sliderTab) {
                o.on("slideChange", (function() {
                    var e = o.realIndex,
                        t = i.eq(e);
                    t.addClass("active").siblings().removeClass("active"), c(t), t.prevAll(a.tabButton).addClass("list-active"), t.nextAll(a.tabButton).removeClass("list-active")
                }));
                var r = o.activeIndex,
                    l = i.eq(r);
                l.addClass("active").siblings().removeClass("active"), c(l), l.prevAll(a.tabButton).addClass("list-active"), l.nextAll(a.tabButton).removeClass("list-active")
            }

            function c(e) {
                var t = e.position(),
                    a = parseInt(e.css("margin-top")) || 0,
                    i = parseInt(e.css("margin-left")) || 0;
                n.css("--height-set", e.outerHeight() + "px"), n.css("--width-set", e.outerWidth() + "px"), n.css("--pos-y", t.top + a + "px"), n.css("--pos-x", t.left + i + "px")
            }
        }))
    }, e(".product-thumb").length && e(".product-thumb").activateSliderThumbs({
        sliderTab: !0,
        tabButton: ".tab-btn"
    }), e(".team-thumb").length && e(".team-thumb").activateSliderThumbs({
        sliderTab: !0,
        tabButton: ".tab-btn"
    }), e(".testi-thumb").length && e(".testi-thumb").activateSliderThumbs({
        sliderTab: !0,
        tabButton: ".tab-btn"
    }), e(".testi-thumb2").length && e(".testi-thumb2").activateSliderThumbs({
        sliderTab: !0,
        tabButton: ".tab-btn"
    });
    var r, l, c, d = ".ajax-contact",
        u = '[name="email"]',
        p = e(".form-messages");

    function h() {
        var t = e(d).serialize();
        (function() {
            var t, a = !0;

            function i(i) {
                i = i.split(",");
                for (var n = 0; n < i.length; n++) t = d + " " + i[n], e(t).val() ? (e(t).removeClass("is-invalid"), a = !0) : (e(t).addClass("is-invalid"), a = !1)
            }
            i('[name="name"],[name="email"],[name="subject"],[name="number"],[name="message"]'), e(u).val() && e(u).val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/) ? (e(u).removeClass("is-invalid"), a = !0) : (e(u).addClass("is-invalid"), a = !1);
            return a
        })() && jQuery.ajax({
            url: e(d).attr("action"),
            data: t,
            type: "POST"
        }).done((function(t) {
            p.removeClass("error"), p.addClass("success"), p.text(t), e(d + ' input:not([type="submit"]),' + d + " textarea").val("")
        })).fail((function(e) {
            p.removeClass("success"), p.addClass("error"), "" !== e.responseText ? p.html(e.responseText) : p.html("Oops! An error occured and your message could not be sent.")
        }))
    }

    function m(t, a, i, n) {
        e(a).on("click", (function(a) {
            a.preventDefault(), e(t).addClass(n)
        })), e(t).on("click", (function(a) {
            a.stopPropagation(), e(t).removeClass(n)
        })), e(t + " > div").on("click", (function(a) {
            a.stopPropagation(), e(t).addClass(n)
        })), e(i).on("click", (function(a) {
            a.preventDefault(), a.stopPropagation(), e(t).removeClass(n)
        }))
    }

    function m(t, a, i, n) {
        e(a).on("click", (function(a) {
            a.preventDefault(), e(t).addClass(n)
        })), e(t).on("click", (function(a) {
            a.stopPropagation(), e(t).removeClass(n)
        })), e(t + " > div").on("click", (function(a) {
            a.stopPropagation(), e(t).addClass(n)
        })), e(i).on("click", (function(a) {
            a.preventDefault(), a.stopPropagation(), e(t).removeClass(n)
        }))
    }
    if (e(d).on("submit", (function(e) {
            e.preventDefault(), h()
        })), r = ".popup-search-box", l = ".searchClose", c = "show", e(".searchBoxToggler").on("click", (function(t) {
            t.preventDefault(), e(r).addClass(c)
        })), e(r).on("click", (function(t) {
            t.stopPropagation(), e(r).removeClass(c)
        })), e(r).find("form").on("click", (function(t) {
            t.stopPropagation(), e(r).addClass(c)
        })), e(l).on("click", (function(t) {
            t.preventDefault(), t.stopPropagation(), e(r).removeClass(c)
        })), m(".sidemenu-wrapper", ".sideMenuToggler", ".sideMenuCls", "show"), m(".shopping-cart", ".sideMenuToggler2", ".sideMenuCls", "show"), e(".popup-image").magnificPopup({
            type: "image",
            mainClass: "mfp-zoom-in",
            removalDelay: 260,
            gallery: {
                enabled: !0
            }
        }), e(".popup-video").magnificPopup({
            type: "iframe"
        }), e(".popup-content").magnificPopup({
            type: "inline",
            midClick: !0
        }), e(".th-anim").length) {
        gsap.registerPlugin(ScrollTrigger), document.querySelectorAll(".th-anim").forEach(e => {
            let t = e.querySelector("img"),
                a = gsap.timeline({
                    scrollTrigger: {
                        trigger: e,
                        toggleActions: "play none none none"
                    }
                });
            a.set(e, {
                autoAlpha: 1
            }), a.from(e, 1.5, {
                xPercent: -100,
                ease: Power2.out
            }), a.from(t, 1.5, {
                xPercent: 100,
                scale: 1.3,
                delay: -1.5,
                ease: Power2.out
            })
        })
    }
    const f = document.querySelector(".cursor"),
        g = document.querySelector(".cursor-follower"),
        v = document.querySelectorAll(".gsap-cursor");
    let w = 0,
        b = 0,
        y = 0,
        C = 0;

    function k(e) {
        return parseInt(e, 10)
    }
    TweenMax.to({}, .02, {
        repeat: -1,
        onRepeat: function() {
            w += (y - w) / 9, b += (C - b) / 9, TweenMax.set(g, {
                css: {
                    left: w - 20,
                    top: b - 20
                }
            }), TweenMax.set(f, {
                css: {
                    left: y,
                    top: C
                }
            })
        }
    }), document.addEventListener("mousemove", e => {
        y = e.pageX, C = e.pageY
    }), v.forEach(e => {
        e.addEventListener("mouseenter", () => {
            f.classList.add("active"), g.classList.add("active")
        }), e.addEventListener("mouseleave", () => {
            f.classList.remove("active"), g.classList.remove("active")
        })
    }), e.fn.sectionPosition = function(t, a) {
        e(this).each((function() {
            var i, n, s, o, r, l = e(this);
            i = Math.floor(l.height() / 2), n = l.attr(t), s = l.attr(a), o = k(e(s).css("padding-top")), r = k(e(s).css("padding-bottom")), "top-half" === n ? (e(s).css("padding-bottom", r + i + "px"), l.css("margin-top", "-" + i + "px")) : "bottom-half" === n && (e(s).css("padding-top", o + i + "px"), l.css("margin-bottom", "-" + i + "px"))
        }))
    };

    function x() {
        e(".feature-circle .progressbar").each((function() {
            var t = e(this).attr("data-path-color"),
                a = e(this).offset().top,
                i = e(window).scrollTop(),
                n = e(this).find(".circle").attr("data-percent"),
                s = (parseInt(n, 10), parseInt(100, 10), e(this).data("animate"));
            a < i + e(window).height() - 30 && !s && (e(this).data("animate", !0), e(this).find(".circle").circleProgress({
                startAngle: -Math.PI / 2,
                value: n / 100,
                size: 100,
                thickness: 8,
                emptyFill: "#E4E4E4",
                lineCap: "round",
                fill: {
                    color: t
                }
            }).on("circle-animation-progress", (function(t, a, i) {
                e(this).find(".circle-num").text((100 * i).toFixed(0) + "%")
            })).stop())
        })), e(".skill-circle .progressbar").each((function() {
            var t = e(this).offset().top,
                a = e(window).scrollTop(),
                i = e(this).find(".circle").attr("data-percent"),
                n = (parseInt(i, 10), parseInt(100, 10), e(this).data("animate"));
            t < a + e(window).height() - 30 && !n && (e(this).data("animate", !0), e(this).find(".circle").circleProgress({
                startAngle: -Math.PI / 2,
                value: i / 100,
                size: 100,
                thickness: 8,
                emptyFill: "#E0E0E0",
                lineCap: "round",
                fill: {
                    gradient: ["#F11F22", "#F2891D"]
                }
            }).on("circle-animation-progress", (function(t, a, i) {
                e(this).find(".circle-num").text((100 * i).toFixed(0) + "%")
            })).stop())
        }))
    }
    e("[data-sec-pos]").length && e("[data-sec-pos]").imagesLoaded((function() {
        e("[data-sec-pos]").sectionPosition("data-sec-pos", "data-pos-for")
    })), x(), e(window).scroll(x), e(".filter-active").imagesLoaded((function() {
        if (e(".filter-active").length > 0) {
            var t = e(".filter-active").isotope({
                itemSelector: ".filter-item",
                filter: "*",
                masonry: {
                    columnWidth: 1
                }
            });
            e(".filter-menu-active").on("click", "button", (function() {
                var a = e(this).attr("data-filter");
                t.isotope({
                    filter: a
                })
            })), e(".filter-menu-active").on("click", "button", (function(t) {
                t.preventDefault(), e(this).addClass("active"), e(this).siblings(".active").removeClass("active")
            }))
        }
    })), e(".masonary-active").imagesLoaded((function() {
        e(".masonary-active").length > 0 && e(".masonary-active").isotope({
            itemSelector: ".filter-item",
            filter: "*",
            masonry: {
                columnWidth: 1
            }
        })
    })), e(".masonary-active, .woocommerce-Reviews .comment-list").imagesLoaded((function() {
        var t = ".masonary-active, .woocommerce-Reviews .comment-list";
        e(t).length > 0 && e(t).isotope({
            itemSelector: ".filter-item, .woocommerce-Reviews .comment-list li",
            filter: "*",
            masonry: {
                columnWidth: 1
            }
        }), e('[data-bs-toggle="tab"]').on("shown.bs.tab", (function(a) {
            e(t).isotope({
                filter: "*"
            })
        }))
    })), e(".counter-number").counterUp({
        delay: 10,
        time: 1e3
    }), e.fn.shapeMockup = function() {
        e(this).each((function() {
            var t = e(this),
                a = t.data("top"),
                i = t.data("right"),
                n = t.data("bottom"),
                s = t.data("left");
            t.css({
                top: a,
                right: i,
                bottom: n,
                left: s
            }).removeAttr("data-top").removeAttr("data-right").removeAttr("data-bottom").removeAttr("data-left").parent().addClass("shape-mockup-wrap")
        }))
    }, e(".shape-mockup") && e(".shape-mockup").shapeMockup(), e(".progress-bar").waypoint((function() {
        e(".progress-bar").css({
            animation: "animate-positive 1.8s",
            opacity: "1"
        })
    }), {
        offset: "75%"
    }), e.fn.countdown = function() {
        e(this).each((function() {
            var t = e(this),
                a = new Date(t.data("offer-date")).getTime();

            function i(e) {
                return t.find(e)
            }
            var n = setInterval((function() {
                var e = (new Date).getTime(),
                    s = a - e,
                    o = Math.floor(s / 864e5),
                    r = Math.floor(s % 864e5 / 36e5),
                    l = Math.floor(s % 36e5 / 6e4),
                    c = Math.floor(s % 6e4 / 1e3);
                o < 10 && (o = "0" + o), r < 10 && (r = "0" + r), l < 10 && (l = "0" + l), c < 10 && (c = "0" + c), s < 0 ? (clearInterval(n), t.addClass("expired"), t.find(".message").css("display", "block")) : (i(".day").html(o), i(".hour").html(r), i(".minute").html(l), i(".seconds").html(c))
            }), 1e3)
        }))
    }, e(".counter-list").length && e(".counter-list").countdown(), e((function() {
        e(".faq-area").slice(0, 4).show(), e("#loadMore").on("click", (function(t) {
            t.preventDefault(), e(".loadcontent:hidden").slice(0, 3).slideDown(), 0 == e(".loadcontent:hidden").length && e("#loadMore").text("No Content").addClass("noContent")
        }))
    })), e(".price_slider").slider({
        range: !0,
        min: 0,
        max: 100,
        values: [0, 30],
        slide: function(t, a) {
            e(".from").text("$" + a.values[0]), e(".to").text("$" + a.values[1])
        }
    }), e(".from").text("$" + e(".price_slider").slider("values", 0)), e(".to").text("$" + e(".price_slider").slider("values", 1));
    const P = {};

    function T() {
        const t = e(this),
            a = t.attr("src");
        if (!P[a]) {
            const t = e.Deferred();
            e.get(a, a => {
                t.resolve(e(a).find("svg"))
            }), P[a] = t.promise()
        }
        P[a].then(a => {
            const i = e(a).clone();
            t.attr("id") && i.attr("id", t.attr("id")), t.attr("class") && i.attr("class", t.attr("class")), t.attr("style") && i.attr("style", t.attr("style")), t.attr("width") && (i.attr("width", t.attr("width")), t.attr("height") || i.removeAttr("height")), t.attr("height") && (i.attr("height", t.attr("height")), t.attr("width") || i.removeAttr("width")), i.insertAfter(t), t.trigger("svgInlined", i[0]), t.remove()
        })
    }
    if (e.fn.inlineSvg = function() {
            return this.each(T), this
        }, e(".svg-img").inlineSvg(), e(".th-anim").length) {
        gsap.registerPlugin(ScrollTrigger), document.querySelectorAll(".th-anim").forEach(e => {
            let t = e.querySelector("img"),
                a = gsap.timeline({
                    scrollTrigger: {
                        trigger: e,
                        toggleActions: "play none none none"
                    }
                });
            a.set(e, {
                autoAlpha: 1
            }), a.from(e, 1.5, {
                xPercent: -100,
                ease: Power2.out
            }), a.from(t, 1.5, {
                xPercent: 100,
                scale: 1.3,
                delay: -1.5,
                ease: Power2.out
            })
        })
    }
    e("#ship-to-different-address-checkbox").on("change", (function() {
        e(this).is(":checked") ? e("#ship-to-different-address").next(".shipping_address").slideDown() : e("#ship-to-different-address").next(".shipping_address").slideUp()
    })), e(".woocommerce-form-login-toggle a").on("click", (function(t) {
        t.preventDefault(), e(".woocommerce-form-login").slideToggle()
    })), e(".woocommerce-form-coupon-toggle a").on("click", (function(t) {
        t.preventDefault(), e(".woocommerce-form-coupon").slideToggle()
    })), e(".shipping-calculator-button").on("click", (function(t) {
        t.preventDefault(), e(this).next(".shipping-calculator-form").slideToggle()
    })), e('.wc_payment_methods input[type="radio"]:checked').siblings(".payment_box").show(), e('.wc_payment_methods input[type="radio"]').each((function() {
        e(this).on("change", (function() {
            e(".payment_box").slideUp(), e(this).siblings(".payment_box").slideDown()
        }))
    })), e(".rating-select .stars a").each((function() {
        e(this).on("click", (function(t) {
            t.preventDefault(), e(this).siblings().removeClass("active"), e(this).parent().parent().addClass("selected"), e(this).addClass("active")
        }))
    })), e(".quantity-plus").each((function() {
        e(this).on("click", (function(t) {
            t.preventDefault();
            var a = e(this).siblings(".qty-input"),
                i = parseInt(a.val(), 10);
            isNaN(i) || a.val(i + 1)
        }))
    })), e(".quantity-minus").each((function() {
        e(this).on("click", (function(t) {
            t.preventDefault();
            var a = e(this).siblings(".qty-input"),
                i = parseInt(a.val(), 10);
            !isNaN(i) && i > 1 && a.val(i - 1)
        }))
    })), e(".color-switch-btns button").each((function() {
        const t = e(this),
            a = t.data("color");
        t.css("--theme-color", a), t.on("click", (function() {
            const t = e(this).data("color");
            e(":root").css("--theme-color", t)
        }))
    })), e(document).on("click", ".switchIcon", (function() {
        e(".color-scheme-wrap").toggleClass("active")
    }));
    // window.addEventListener("contextmenu", (function(e) {
    //     e.preventDefault()
    // }), !1), document.onkeydown = function(e) {
    //     return 123 != event.keyCode && ((!e.ctrlKey || !e.shiftKey || e.keyCode != "I".charCodeAt(0)) && ((!e.ctrlKey || !e.shiftKey || e.keyCode != "C".charCodeAt(0)) && ((!e.ctrlKey || !e.shiftKey || e.keyCode != "J".charCodeAt(0)) && ((!e.ctrlKey || e.keyCode != "U".charCodeAt(0)) && void 0))))
    // }
}(jQuery);
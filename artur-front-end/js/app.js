(() => {
    var __webpack_modules__ = {
        732: function(module) {
            !function(n, t) {
                true ? module.exports = t() : 0;
            }(0, (function() {
                "use strict";
                function n() {
                    return n = Object.assign || function(n) {
                        for (var t = 1; t < arguments.length; t++) {
                            var e = arguments[t];
                            for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i]);
                        }
                        return n;
                    }, n.apply(this, arguments);
                }
                var t = "undefined" != typeof window, e = t && !("onscroll" in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent), i = t && "IntersectionObserver" in window, o = t && "classList" in document.createElement("p"), a = t && window.devicePixelRatio > 1, r = {
                    elements_selector: ".lazy",
                    container: e || t ? document : null,
                    threshold: 300,
                    thresholds: null,
                    data_src: "src",
                    data_srcset: "srcset",
                    data_sizes: "sizes",
                    data_bg: "bg",
                    data_bg_hidpi: "bg-hidpi",
                    data_bg_multi: "bg-multi",
                    data_bg_multi_hidpi: "bg-multi-hidpi",
                    data_bg_set: "bg-set",
                    data_poster: "poster",
                    class_applied: "applied",
                    class_loading: "loading",
                    class_loaded: "loaded",
                    class_error: "error",
                    class_entered: "entered",
                    class_exited: "exited",
                    unobserve_completed: !0,
                    unobserve_entered: !1,
                    cancel_on_exit: !0,
                    callback_enter: null,
                    callback_exit: null,
                    callback_applied: null,
                    callback_loading: null,
                    callback_loaded: null,
                    callback_error: null,
                    callback_finish: null,
                    callback_cancel: null,
                    use_native: !1,
                    restore_on_error: !1
                }, c = function(t) {
                    return n({}, r, t);
                }, l = function(n, t) {
                    var e, i = "LazyLoad::Initialized", o = new n(t);
                    try {
                        e = new CustomEvent(i, {
                            detail: {
                                instance: o
                            }
                        });
                    } catch (n) {
                        (e = document.createEvent("CustomEvent")).initCustomEvent(i, !1, !1, {
                            instance: o
                        });
                    }
                    window.dispatchEvent(e);
                }, u = "src", s = "srcset", d = "sizes", f = "poster", _ = "llOriginalAttrs", g = "data", v = "loading", b = "loaded", m = "applied", p = "error", h = "native", E = "data-", I = "ll-status", y = function(n, t) {
                    return n.getAttribute(E + t);
                }, k = function(n) {
                    return y(n, I);
                }, w = function(n, t) {
                    return function(n, t, e) {
                        var i = "data-ll-status";
                        null !== e ? n.setAttribute(i, e) : n.removeAttribute(i);
                    }(n, 0, t);
                }, A = function(n) {
                    return w(n, null);
                }, L = function(n) {
                    return null === k(n);
                }, O = function(n) {
                    return k(n) === h;
                }, x = [ v, b, m, p ], C = function(n, t, e, i) {
                    n && (void 0 === i ? void 0 === e ? n(t) : n(t, e) : n(t, e, i));
                }, N = function(n, t) {
                    o ? n.classList.add(t) : n.className += (n.className ? " " : "") + t;
                }, M = function(n, t) {
                    o ? n.classList.remove(t) : n.className = n.className.replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "");
                }, z = function(n) {
                    return n.llTempImage;
                }, T = function(n, t) {
                    if (t) {
                        var e = t._observer;
                        e && e.unobserve(n);
                    }
                }, R = function(n, t) {
                    n && (n.loadingCount += t);
                }, G = function(n, t) {
                    n && (n.toLoadCount = t);
                }, j = function(n) {
                    for (var t, e = [], i = 0; t = n.children[i]; i += 1) "SOURCE" === t.tagName && e.push(t);
                    return e;
                }, D = function(n, t) {
                    var e = n.parentNode;
                    e && "PICTURE" === e.tagName && j(e).forEach(t);
                }, H = function(n, t) {
                    j(n).forEach(t);
                }, V = [ u ], F = [ u, f ], B = [ u, s, d ], J = [ g ], P = function(n) {
                    return !!n[_];
                }, S = function(n) {
                    return n[_];
                }, U = function(n) {
                    return delete n[_];
                }, $ = function(n, t) {
                    if (!P(n)) {
                        var e = {};
                        t.forEach((function(t) {
                            e[t] = n.getAttribute(t);
                        })), n[_] = e;
                    }
                }, q = function(n, t) {
                    if (P(n)) {
                        var e = S(n);
                        t.forEach((function(t) {
                            !function(n, t, e) {
                                e ? n.setAttribute(t, e) : n.removeAttribute(t);
                            }(n, t, e[t]);
                        }));
                    }
                }, K = function(n, t, e) {
                    N(n, t.class_applied), w(n, m), e && (t.unobserve_completed && T(n, t), C(t.callback_applied, n, e));
                }, Q = function(n, t, e) {
                    N(n, t.class_loading), w(n, v), e && (R(e, 1), C(t.callback_loading, n, e));
                }, W = function(n, t, e) {
                    e && n.setAttribute(t, e);
                }, X = function(n, t) {
                    W(n, d, y(n, t.data_sizes)), W(n, s, y(n, t.data_srcset)), W(n, u, y(n, t.data_src));
                }, Y = {
                    IMG: function(n, t) {
                        D(n, (function(n) {
                            $(n, B), X(n, t);
                        })), $(n, B), X(n, t);
                    },
                    IFRAME: function(n, t) {
                        $(n, V), W(n, u, y(n, t.data_src));
                    },
                    VIDEO: function(n, t) {
                        H(n, (function(n) {
                            $(n, V), W(n, u, y(n, t.data_src));
                        })), $(n, F), W(n, f, y(n, t.data_poster)), W(n, u, y(n, t.data_src)), n.load();
                    },
                    OBJECT: function(n, t) {
                        $(n, J), W(n, g, y(n, t.data_src));
                    }
                }, Z = [ "IMG", "IFRAME", "VIDEO", "OBJECT" ], nn = function(n, t) {
                    !t || function(n) {
                        return n.loadingCount > 0;
                    }(t) || function(n) {
                        return n.toLoadCount > 0;
                    }(t) || C(n.callback_finish, t);
                }, tn = function(n, t, e) {
                    n.addEventListener(t, e), n.llEvLisnrs[t] = e;
                }, en = function(n, t, e) {
                    n.removeEventListener(t, e);
                }, on = function(n) {
                    return !!n.llEvLisnrs;
                }, an = function(n) {
                    if (on(n)) {
                        var t = n.llEvLisnrs;
                        for (var e in t) {
                            var i = t[e];
                            en(n, e, i);
                        }
                        delete n.llEvLisnrs;
                    }
                }, rn = function(n, t, e) {
                    !function(n) {
                        delete n.llTempImage;
                    }(n), R(e, -1), function(n) {
                        n && (n.toLoadCount -= 1);
                    }(e), M(n, t.class_loading), t.unobserve_completed && T(n, e);
                }, cn = function(n, t, e) {
                    var i = z(n) || n;
                    on(i) || function(n, t, e) {
                        on(n) || (n.llEvLisnrs = {});
                        var i = "VIDEO" === n.tagName ? "loadeddata" : "load";
                        tn(n, i, t), tn(n, "error", e);
                    }(i, (function(o) {
                        !function(n, t, e, i) {
                            var o = O(t);
                            rn(t, e, i), N(t, e.class_loaded), w(t, b), C(e.callback_loaded, t, i), o || nn(e, i);
                        }(0, n, t, e), an(i);
                    }), (function(o) {
                        !function(n, t, e, i) {
                            var o = O(t);
                            rn(t, e, i), N(t, e.class_error), w(t, p), C(e.callback_error, t, i), e.restore_on_error && q(t, B), 
                            o || nn(e, i);
                        }(0, n, t, e), an(i);
                    }));
                }, ln = function(n, t, e) {
                    !function(n) {
                        return Z.indexOf(n.tagName) > -1;
                    }(n) ? function(n, t, e) {
                        !function(n) {
                            n.llTempImage = document.createElement("IMG");
                        }(n), cn(n, t, e), function(n) {
                            P(n) || (n[_] = {
                                backgroundImage: n.style.backgroundImage
                            });
                        }(n), function(n, t, e) {
                            var i = y(n, t.data_bg), o = y(n, t.data_bg_hidpi), r = a && o ? o : i;
                            r && (n.style.backgroundImage = 'url("'.concat(r, '")'), z(n).setAttribute(u, r), 
                            Q(n, t, e));
                        }(n, t, e), function(n, t, e) {
                            var i = y(n, t.data_bg_multi), o = y(n, t.data_bg_multi_hidpi), r = a && o ? o : i;
                            r && (n.style.backgroundImage = r, K(n, t, e));
                        }(n, t, e), function(n, t, e) {
                            var i = y(n, t.data_bg_set);
                            if (i) {
                                var o = i.split("|"), a = o.map((function(n) {
                                    return "image-set(".concat(n, ")");
                                }));
                                n.style.backgroundImage = a.join(), "" === n.style.backgroundImage && (a = o.map((function(n) {
                                    return "-webkit-image-set(".concat(n, ")");
                                })), n.style.backgroundImage = a.join()), K(n, t, e);
                            }
                        }(n, t, e);
                    }(n, t, e) : function(n, t, e) {
                        cn(n, t, e), function(n, t, e) {
                            var i = Y[n.tagName];
                            i && (i(n, t), Q(n, t, e));
                        }(n, t, e);
                    }(n, t, e);
                }, un = function(n) {
                    n.removeAttribute(u), n.removeAttribute(s), n.removeAttribute(d);
                }, sn = function(n) {
                    D(n, (function(n) {
                        q(n, B);
                    })), q(n, B);
                }, dn = {
                    IMG: sn,
                    IFRAME: function(n) {
                        q(n, V);
                    },
                    VIDEO: function(n) {
                        H(n, (function(n) {
                            q(n, V);
                        })), q(n, F), n.load();
                    },
                    OBJECT: function(n) {
                        q(n, J);
                    }
                }, fn = function(n, t) {
                    (function(n) {
                        var t = dn[n.tagName];
                        t ? t(n) : function(n) {
                            if (P(n)) {
                                var t = S(n);
                                n.style.backgroundImage = t.backgroundImage;
                            }
                        }(n);
                    })(n), function(n, t) {
                        L(n) || O(n) || (M(n, t.class_entered), M(n, t.class_exited), M(n, t.class_applied), 
                        M(n, t.class_loading), M(n, t.class_loaded), M(n, t.class_error));
                    }(n, t), A(n), U(n);
                }, _n = [ "IMG", "IFRAME", "VIDEO" ], gn = function(n) {
                    return n.use_native && "loading" in HTMLImageElement.prototype;
                }, vn = function(n, t, e) {
                    n.forEach((function(n) {
                        return function(n) {
                            return n.isIntersecting || n.intersectionRatio > 0;
                        }(n) ? function(n, t, e, i) {
                            var o = function(n) {
                                return x.indexOf(k(n)) >= 0;
                            }(n);
                            w(n, "entered"), N(n, e.class_entered), M(n, e.class_exited), function(n, t, e) {
                                t.unobserve_entered && T(n, e);
                            }(n, e, i), C(e.callback_enter, n, t, i), o || ln(n, e, i);
                        }(n.target, n, t, e) : function(n, t, e, i) {
                            L(n) || (N(n, e.class_exited), function(n, t, e, i) {
                                e.cancel_on_exit && function(n) {
                                    return k(n) === v;
                                }(n) && "IMG" === n.tagName && (an(n), function(n) {
                                    D(n, (function(n) {
                                        un(n);
                                    })), un(n);
                                }(n), sn(n), M(n, e.class_loading), R(i, -1), A(n), C(e.callback_cancel, n, t, i));
                            }(n, t, e, i), C(e.callback_exit, n, t, i));
                        }(n.target, n, t, e);
                    }));
                }, bn = function(n) {
                    return Array.prototype.slice.call(n);
                }, mn = function(n) {
                    return n.container.querySelectorAll(n.elements_selector);
                }, pn = function(n) {
                    return function(n) {
                        return k(n) === p;
                    }(n);
                }, hn = function(n, t) {
                    return function(n) {
                        return bn(n).filter(L);
                    }(n || mn(t));
                }, En = function(n, e) {
                    var o = c(n);
                    this._settings = o, this.loadingCount = 0, function(n, t) {
                        i && !gn(n) && (t._observer = new IntersectionObserver((function(e) {
                            vn(e, n, t);
                        }), function(n) {
                            return {
                                root: n.container === document ? null : n.container,
                                rootMargin: n.thresholds || n.threshold + "px"
                            };
                        }(n)));
                    }(o, this), function(n, e) {
                        t && (e._onlineHandler = function() {
                            !function(n, t) {
                                var e;
                                (e = mn(n), bn(e).filter(pn)).forEach((function(t) {
                                    M(t, n.class_error), A(t);
                                })), t.update();
                            }(n, e);
                        }, window.addEventListener("online", e._onlineHandler));
                    }(o, this), this.update(e);
                };
                return En.prototype = {
                    update: function(n) {
                        var t, o, a = this._settings, r = hn(n, a);
                        G(this, r.length), !e && i ? gn(a) ? function(n, t, e) {
                            n.forEach((function(n) {
                                -1 !== _n.indexOf(n.tagName) && function(n, t, e) {
                                    n.setAttribute("loading", "lazy"), cn(n, t, e), function(n, t) {
                                        var e = Y[n.tagName];
                                        e && e(n, t);
                                    }(n, t), w(n, h);
                                }(n, t, e);
                            })), G(e, 0);
                        }(r, a, this) : (o = r, function(n) {
                            n.disconnect();
                        }(t = this._observer), function(n, t) {
                            t.forEach((function(t) {
                                n.observe(t);
                            }));
                        }(t, o)) : this.loadAll(r);
                    },
                    destroy: function() {
                        this._observer && this._observer.disconnect(), t && window.removeEventListener("online", this._onlineHandler), 
                        mn(this._settings).forEach((function(n) {
                            U(n);
                        })), delete this._observer, delete this._settings, delete this._onlineHandler, delete this.loadingCount, 
                        delete this.toLoadCount;
                    },
                    loadAll: function(n) {
                        var t = this, e = this._settings;
                        hn(n, e).forEach((function(n) {
                            T(n, t), ln(n, e, t);
                        }));
                    },
                    restoreAll: function() {
                        var n = this._settings;
                        mn(n).forEach((function(t) {
                            fn(t, n);
                        }));
                    }
                }, En.load = function(n, t) {
                    var e = c(t);
                    ln(n, e);
                }, En.resetStatus = function(n) {
                    A(n);
                }, t && function(n, t) {
                    if (t) if (t.length) for (var e, i = 0; e = t[i]; i += 1) l(n, e); else l(n, t);
                }(En, window.lazyLoadOptions), En;
            }));
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        "use strict";
        const modules_flsModules = {};
        function isWebp() {
            function testWebP(callback) {
                let webP = new Image;
                webP.onload = webP.onerror = function() {
                    callback(webP.height == 2);
                };
                webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
            }
            testWebP((function(support) {
                let className = support === true ? "webp" : "no-webp";
                document.documentElement.classList.add(className);
            }));
        }
        let isMobile = {
            Android: function() {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function() {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function() {
                return navigator.userAgent.match(/IEMobile/i);
            },
            any: function() {
                return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
            }
        };
        function addTouchClass() {
            if (isMobile.any()) document.documentElement.classList.add("touch");
        }
        function addLoadedClass() {
            if (!document.documentElement.classList.contains("loading")) window.addEventListener("load", (function() {
                setTimeout((function() {
                    document.documentElement.classList.add("loaded");
                }), 0);
            }));
        }
        function getHash() {
            if (location.hash) return location.hash.replace("#", "");
        }
        function fullVHfix() {
            const fullScreens = document.querySelectorAll("[data-fullscreen]");
            if (fullScreens.length && isMobile.any()) {
                window.addEventListener("resize", fixHeight);
                function fixHeight() {
                    let vh = window.innerHeight * .01;
                    document.documentElement.style.setProperty("--vh", `${vh}px`);
                }
                fixHeight();
            }
        }
        let bodyLockStatus = true;
        let bodyLockToggle = (delay = 500) => {
            if (document.documentElement.classList.contains("lock")) bodyUnlock(delay); else bodyLock(delay);
        };
        let bodyUnlock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                setTimeout((() => {
                    for (let index = 0; index < lock_padding.length; index++) {
                        const el = lock_padding[index];
                        el.style.paddingRight = "0px";
                    }
                    body.style.paddingRight = "0px";
                    document.documentElement.classList.remove("lock");
                }), delay);
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        let bodyLock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                for (let index = 0; index < lock_padding.length; index++) {
                    const el = lock_padding[index];
                    el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                }
                body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                document.documentElement.classList.add("lock");
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        function menuInit() {
            if (document.querySelector(".icon-menu")) document.addEventListener("click", (function(e) {
                if (bodyLockStatus && e.target.closest(".icon-menu")) {
                    bodyLockToggle();
                    document.documentElement.classList.toggle("menu-open");
                }
            }));
        }
        function menuClose() {
            bodyUnlock();
            document.documentElement.classList.remove("menu-open");
        }
        function filterGallery() {
            let filterList = document.querySelectorAll(".filter__button");
            let productBox = document.querySelectorAll(".portfolio-body__box");
            if (filterList.length) for (let i = 0; i < filterList.length; i++) filterList[i].addEventListener("click", (function() {
                for (let j = 0; j < filterList.length; j++) filterList[j].classList.remove("active");
                this.classList.add("active");
                let dataFilter = this.getAttribute("data-filter");
                for (let k = 0; k < productBox.length; k++) {
                    productBox[k].classList.remove("active");
                    productBox[k].classList.add("hiden");
                    if (productBox[k].getAttribute("data-item") === dataFilter || dataFilter === "all") {
                        productBox[k].classList.remove("hiden");
                        productBox[k].classList.add("active");
                    }
                }
            }));
        }
        function libsForSendingFormsEmail() {
            const contactForm = document.getElementById("contact-form"), contactMessage = document.getElementById("contact-message");
            const sendEmail = e => {
                e.preventDefault();
                emailjs.sendForm("service_4i46osd", "template_qrrwmb7", "#contact-form", "giOd1w371TjDW4QV3").then((() => {
                    contactMessage.textContent = "Message sent successfully ✅";
                    setTimeout((() => {
                        contactMessage.textContent = "";
                    }), 5e3);
                    contactForm.reset();
                }), (() => {
                    contactMessage.textContent = "Message not sent (service error) ❌";
                }));
            };
            contactForm.addEventListener("submit", sendEmail);
        }
        function functions_ART(message) {
            setTimeout((() => {
                if (window.ART) console.log(message);
            }), 0);
        }
        function uniqArray(array) {
            return array.filter((function(item, index, self) {
                return self.indexOf(item) === index;
            }));
        }
        let gotoblock_gotoBlock = (targetBlock, noHeader = false, speed = 500, offsetTop = 0) => {
            const targetBlockElement = document.querySelector(targetBlock);
            if (targetBlockElement) {
                let headerItem = "";
                let headerItemHeight = 0;
                if (noHeader) {
                    headerItem = "header.header";
                    const headerElement = document.querySelector(headerItem);
                    if (!headerElement.classList.contains("_header-scroll")) {
                        headerElement.style.cssText = `transition-duration: 0s;`;
                        headerElement.classList.add("_header-scroll");
                        headerItemHeight = headerElement.offsetHeight;
                        headerElement.classList.remove("_header-scroll");
                        setTimeout((() => {
                            headerElement.style.cssText = ``;
                        }), 0);
                    } else headerItemHeight = headerElement.offsetHeight;
                }
                let options = {
                    speedAsDuration: true,
                    speed,
                    header: headerItem,
                    offset: offsetTop,
                    easing: "easeOutQuad"
                };
                document.documentElement.classList.contains("menu-open") ? menuClose() : null;
                if (typeof SmoothScroll !== "undefined") (new SmoothScroll).animateScroll(targetBlockElement, "", options); else {
                    let targetBlockElementPosition = targetBlockElement.getBoundingClientRect().top + scrollY;
                    targetBlockElementPosition = headerItemHeight ? targetBlockElementPosition - headerItemHeight : targetBlockElementPosition;
                    targetBlockElementPosition = offsetTop ? targetBlockElementPosition - offsetTop : targetBlockElementPosition;
                    window.scrollTo({
                        top: targetBlockElementPosition,
                        behavior: "smooth"
                    });
                }
                functions_ART(`[gotoBlock]: Юхуу...їдемо до ${targetBlock}`);
            } else functions_ART(`[gotoBlock]: Йой... Такого блоку немає на сторінці: ${targetBlock}`);
        };
        var lazyload_min = __webpack_require__(732);
        const lazyMedia = new lazyload_min({
            elements_selector: "[data-src],[data-srcset]",
            class_loaded: "_lazy-loaded",
            use_native: true
        });
        lazyMedia.update();
        class ScrollWatcher {
            constructor(props) {
                let defaultConfig = {
                    logging: true
                };
                this.config = Object.assign(defaultConfig, props);
                this.observer;
                !document.documentElement.classList.contains("watcher") ? this.scrollWatcherRun() : null;
            }
            scrollWatcherUpdate() {
                this.scrollWatcherRun();
            }
            scrollWatcherRun() {
                document.documentElement.classList.add("watcher");
                this.scrollWatcherConstructor(document.querySelectorAll("[data-watch]"));
            }
            scrollWatcherConstructor(items) {
                if (items.length) {
                    this.scrollWatcherLogging(`Прокинувся, стежу за об'єктами (${items.length})...`);
                    let uniqParams = uniqArray(Array.from(items).map((function(item) {
                        return `${item.dataset.watchRoot ? item.dataset.watchRoot : null}|${item.dataset.watchMargin ? item.dataset.watchMargin : "0px"}|${item.dataset.watchThreshold ? item.dataset.watchThreshold : 0}`;
                    })));
                    uniqParams.forEach((uniqParam => {
                        let uniqParamArray = uniqParam.split("|");
                        let paramsWatch = {
                            root: uniqParamArray[0],
                            margin: uniqParamArray[1],
                            threshold: uniqParamArray[2]
                        };
                        let groupItems = Array.from(items).filter((function(item) {
                            let watchRoot = item.dataset.watchRoot ? item.dataset.watchRoot : null;
                            let watchMargin = item.dataset.watchMargin ? item.dataset.watchMargin : "0px";
                            let watchThreshold = item.dataset.watchThreshold ? item.dataset.watchThreshold : 0;
                            if (String(watchRoot) === paramsWatch.root && String(watchMargin) === paramsWatch.margin && String(watchThreshold) === paramsWatch.threshold) return item;
                        }));
                        let configWatcher = this.getScrollWatcherConfig(paramsWatch);
                        this.scrollWatcherInit(groupItems, configWatcher);
                    }));
                } else this.scrollWatcherLogging("Сплю, немає об'єктів для стеження. ZzzZZzz");
            }
            getScrollWatcherConfig(paramsWatch) {
                let configWatcher = {};
                if (document.querySelector(paramsWatch.root)) configWatcher.root = document.querySelector(paramsWatch.root); else if (paramsWatch.root !== "null") this.scrollWatcherLogging(`Эмм... батьківського об'єкта ${paramsWatch.root} немає на сторінці`);
                configWatcher.rootMargin = paramsWatch.margin;
                if (paramsWatch.margin.indexOf("px") < 0 && paramsWatch.margin.indexOf("%") < 0) {
                    this.scrollWatcherLogging(`йой, налаштування data-watch-margin потрібно задавати в PX або %`);
                    return;
                }
                if (paramsWatch.threshold === "prx") {
                    paramsWatch.threshold = [];
                    for (let i = 0; i <= 1; i += .005) paramsWatch.threshold.push(i);
                } else paramsWatch.threshold = paramsWatch.threshold.split(",");
                configWatcher.threshold = paramsWatch.threshold;
                return configWatcher;
            }
            scrollWatcherCreate(configWatcher) {
                this.observer = new IntersectionObserver(((entries, observer) => {
                    entries.forEach((entry => {
                        this.scrollWatcherCallback(entry, observer);
                    }));
                }), configWatcher);
            }
            scrollWatcherInit(items, configWatcher) {
                this.scrollWatcherCreate(configWatcher);
                items.forEach((item => this.observer.observe(item)));
            }
            scrollWatcherIntersecting(entry, targetElement) {
                if (entry.isIntersecting) {
                    !targetElement.classList.contains("_watcher-view") ? targetElement.classList.add("_watcher-view") : null;
                    this.scrollWatcherLogging(`Я бачу ${targetElement.classList}, додав клас _watcher-view`);
                } else {
                    targetElement.classList.contains("_watcher-view") ? targetElement.classList.remove("_watcher-view") : null;
                    this.scrollWatcherLogging(`Я не бачу ${targetElement.classList}, прибрав клас _watcher-view`);
                }
            }
            scrollWatcherOff(targetElement, observer) {
                observer.unobserve(targetElement);
                this.scrollWatcherLogging(`Я перестав стежити за ${targetElement.classList}`);
            }
            scrollWatcherLogging(message) {
                this.config.logging ? functions_ART(`[Спостерігач]: ${message}`) : null;
            }
            scrollWatcherCallback(entry, observer) {
                const targetElement = entry.target;
                this.scrollWatcherIntersecting(entry, targetElement);
                targetElement.hasAttribute("data-watch-once") && entry.isIntersecting ? this.scrollWatcherOff(targetElement, observer) : null;
                document.dispatchEvent(new CustomEvent("watcherCallback", {
                    detail: {
                        entry
                    }
                }));
            }
        }
        modules_flsModules.watcher = new ScrollWatcher({});
        let addWindowScrollEvent = false;
        function pageNavigation() {
            document.addEventListener("click", pageNavigationAction);
            document.addEventListener("watcherCallback", pageNavigationAction);
            function pageNavigationAction(e) {
                if (e.type === "click") {
                    const targetElement = e.target;
                    if (targetElement.closest("[data-goto]")) {
                        const gotoLink = targetElement.closest("[data-goto]");
                        const gotoLinkSelector = gotoLink.dataset.goto ? gotoLink.dataset.goto : "";
                        const noHeader = gotoLink.hasAttribute("data-goto-header") ? true : false;
                        const gotoSpeed = gotoLink.dataset.gotoSpeed ? gotoLink.dataset.gotoSpeed : 500;
                        const offsetTop = gotoLink.dataset.gotoTop ? parseInt(gotoLink.dataset.gotoTop) : 0;
                        if (modules_flsModules.fullpage) {
                            const fullpageSection = document.querySelector(`${gotoLinkSelector}`).closest("[data-fp-section]");
                            const fullpageSectionId = fullpageSection ? +fullpageSection.dataset.fpId : null;
                            if (fullpageSectionId !== null) {
                                modules_flsModules.fullpage.switchingSection(fullpageSectionId);
                                document.documentElement.classList.contains("menu-open") ? menuClose() : null;
                            }
                        } else gotoblock_gotoBlock(gotoLinkSelector, noHeader, gotoSpeed, offsetTop);
                        e.preventDefault();
                    }
                } else if (e.type === "watcherCallback" && e.detail) {
                    const entry = e.detail.entry;
                    const targetElement = entry.target;
                    if (targetElement.dataset.watch === "navigator") {
                        document.querySelector(`[data-goto]._navigator-active`);
                        let navigatorCurrentItem;
                        if (targetElement.id && document.querySelector(`[data-goto="#${targetElement.id}"]`)) navigatorCurrentItem = document.querySelector(`[data-goto="#${targetElement.id}"]`); else if (targetElement.classList.length) for (let index = 0; index < targetElement.classList.length; index++) {
                            const element = targetElement.classList[index];
                            if (document.querySelector(`[data-goto=".${element}"]`)) {
                                navigatorCurrentItem = document.querySelector(`[data-goto=".${element}"]`);
                                break;
                            }
                        }
                        if (entry.isIntersecting) navigatorCurrentItem ? navigatorCurrentItem.classList.add("_navigator-active") : null; else navigatorCurrentItem ? navigatorCurrentItem.classList.remove("_navigator-active") : null;
                    }
                }
            }
            if (getHash()) {
                let goToHash;
                if (document.querySelector(`#${getHash()}`)) goToHash = `#${getHash()}`; else if (document.querySelector(`.${getHash()}`)) goToHash = `.${getHash()}`;
                goToHash ? gotoblock_gotoBlock(goToHash, true, 500, 20) : null;
            }
        }
        function headerScroll() {
            addWindowScrollEvent = true;
            const header = document.querySelector("header.header");
            const headerShow = header.hasAttribute("data-scroll-show");
            const headerShowTimer = header.dataset.scrollShow ? header.dataset.scrollShow : 500;
            const startPoint = header.dataset.scroll ? header.dataset.scroll : 1;
            let scrollDirection = 0;
            let timer;
            document.addEventListener("windowScroll", (function(e) {
                const scrollTop = window.scrollY;
                clearTimeout(timer);
                if (scrollTop >= startPoint) {
                    !header.classList.contains("_header-scroll") ? header.classList.add("_header-scroll") : null;
                    if (headerShow) {
                        if (scrollTop > scrollDirection) header.classList.contains("_header-show") ? header.classList.remove("_header-show") : null; else !header.classList.contains("_header-show") ? header.classList.add("_header-show") : null;
                        timer = setTimeout((() => {
                            !header.classList.contains("_header-show") ? header.classList.add("_header-show") : null;
                        }), headerShowTimer);
                    }
                } else {
                    header.classList.contains("_header-scroll") ? header.classList.remove("_header-scroll") : null;
                    if (headerShow) header.classList.contains("_header-show") ? header.classList.remove("_header-show") : null;
                }
                scrollDirection = scrollTop <= 0 ? 0 : scrollTop;
            }));
        }
        setTimeout((() => {
            if (addWindowScrollEvent) {
                let windowScroll = new Event("windowScroll");
                window.addEventListener("scroll", (function(e) {
                    document.dispatchEvent(windowScroll);
                }));
            }
        }), 0);
        (() => {
            var t = {
                9662: (t, r, e) => {
                    var n = e(614), o = e(6330), i = TypeError;
                    t.exports = function(t) {
                        if (n(t)) return t;
                        throw i(o(t) + " is not a function");
                    };
                },
                9483: (t, r, e) => {
                    var n = e(4411), o = e(6330), i = TypeError;
                    t.exports = function(t) {
                        if (n(t)) return t;
                        throw i(o(t) + " is not a constructor");
                    };
                },
                6077: (t, r, e) => {
                    var n = e(614), o = String, i = TypeError;
                    t.exports = function(t) {
                        if ("object" == typeof t || n(t)) return t;
                        throw i("Can't set " + o(t) + " as a prototype");
                    };
                },
                5787: (t, r, e) => {
                    var n = e(7976), o = TypeError;
                    t.exports = function(t, r) {
                        if (n(r, t)) return t;
                        throw o("Incorrect invocation");
                    };
                },
                9670: (t, r, e) => {
                    var n = e(111), o = String, i = TypeError;
                    t.exports = function(t) {
                        if (n(t)) return t;
                        throw i(o(t) + " is not an object");
                    };
                },
                8533: (t, r, e) => {
                    "use strict";
                    var n = e(2092).forEach, o = e(9341)("forEach");
                    t.exports = o ? [].forEach : function(t) {
                        return n(this, t, arguments.length > 1 ? arguments[1] : void 0);
                    };
                },
                1318: (t, r, e) => {
                    var n = e(5656), o = e(1400), i = e(6244), a = function(t) {
                        return function(r, e, a) {
                            var c, u = n(r), s = i(u), f = o(a, s);
                            if (t && e != e) {
                                for (;s > f; ) if ((c = u[f++]) != c) return !0;
                            } else for (;s > f; f++) if ((t || f in u) && u[f] === e) return t || f || 0;
                            return !t && -1;
                        };
                    };
                    t.exports = {
                        includes: a(!0),
                        indexOf: a(!1)
                    };
                },
                2092: (t, r, e) => {
                    var n = e(9974), o = e(1702), i = e(8361), a = e(7908), c = e(6244), u = e(5417), s = o([].push), f = function(t) {
                        var r = 1 == t, e = 2 == t, o = 3 == t, f = 4 == t, p = 6 == t, v = 7 == t, l = 5 == t || p;
                        return function(h, d, y, m) {
                            for (var g, b, x = a(h), S = i(x), w = n(d, y), j = c(S), O = 0, E = m || u, T = r ? E(h, j) : e || v ? E(h, 0) : void 0; j > O; O++) if ((l || O in S) && (b = w(g = S[O], O, x), 
                            t)) if (r) T[O] = b; else if (b) switch (t) {
                              case 3:
                                return !0;

                              case 5:
                                return g;

                              case 6:
                                return O;

                              case 2:
                                s(T, g);
                            } else switch (t) {
                              case 4:
                                return !1;

                              case 7:
                                s(T, g);
                            }
                            return p ? -1 : o || f ? f : T;
                        };
                    };
                    t.exports = {
                        forEach: f(0),
                        map: f(1),
                        filter: f(2),
                        some: f(3),
                        every: f(4),
                        find: f(5),
                        findIndex: f(6),
                        filterReject: f(7)
                    };
                },
                9341: (t, r, e) => {
                    "use strict";
                    var n = e(7293);
                    t.exports = function(t, r) {
                        var e = [][t];
                        return !!e && n((function() {
                            e.call(null, r || function() {
                                return 1;
                            }, 1);
                        }));
                    };
                },
                206: (t, r, e) => {
                    var n = e(1702);
                    t.exports = n([].slice);
                },
                7475: (t, r, e) => {
                    var n = e(3157), o = e(4411), i = e(111), a = e(5112)("species"), c = Array;
                    t.exports = function(t) {
                        var r;
                        return n(t) && (r = t.constructor, (o(r) && (r === c || n(r.prototype)) || i(r) && null === (r = r[a])) && (r = void 0)), 
                        void 0 === r ? c : r;
                    };
                },
                5417: (t, r, e) => {
                    var n = e(7475);
                    t.exports = function(t, r) {
                        return new (n(t))(0 === r ? 0 : r);
                    };
                },
                7072: (t, r, e) => {
                    var n = e(5112)("iterator"), o = !1;
                    try {
                        var i = 0, a = {
                            next: function() {
                                return {
                                    done: !!i++
                                };
                            },
                            return: function() {
                                o = !0;
                            }
                        };
                        a[n] = function() {
                            return this;
                        }, Array.from(a, (function() {
                            throw 2;
                        }));
                    } catch (t) {}
                    t.exports = function(t, r) {
                        if (!r && !o) return !1;
                        var e = !1;
                        try {
                            var i = {};
                            i[n] = function() {
                                return {
                                    next: function() {
                                        return {
                                            done: e = !0
                                        };
                                    }
                                };
                            }, t(i);
                        } catch (t) {}
                        return e;
                    };
                },
                4326: (t, r, e) => {
                    var n = e(1702), o = n({}.toString), i = n("".slice);
                    t.exports = function(t) {
                        return i(o(t), 8, -1);
                    };
                },
                648: (t, r, e) => {
                    var n = e(1694), o = e(614), i = e(4326), a = e(5112)("toStringTag"), c = Object, u = "Arguments" == i(function() {
                        return arguments;
                    }());
                    t.exports = n ? i : function(t) {
                        var r, e, n;
                        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (e = function(t, r) {
                            try {
                                return t[r];
                            } catch (t) {}
                        }(r = c(t), a)) ? e : u ? i(r) : "Object" == (n = i(r)) && o(r.callee) ? "Arguments" : n;
                    };
                },
                9920: (t, r, e) => {
                    var n = e(2597), o = e(3887), i = e(1236), a = e(3070);
                    t.exports = function(t, r, e) {
                        for (var c = o(r), u = a.f, s = i.f, f = 0; f < c.length; f++) {
                            var p = c[f];
                            n(t, p) || e && n(e, p) || u(t, p, s(r, p));
                        }
                    };
                },
                8880: (t, r, e) => {
                    var n = e(9781), o = e(3070), i = e(9114);
                    t.exports = n ? function(t, r, e) {
                        return o.f(t, r, i(1, e));
                    } : function(t, r, e) {
                        return t[r] = e, t;
                    };
                },
                9114: t => {
                    t.exports = function(t, r) {
                        return {
                            enumerable: !(1 & t),
                            configurable: !(2 & t),
                            writable: !(4 & t),
                            value: r
                        };
                    };
                },
                7045: (t, r, e) => {
                    var n = e(6339), o = e(3070);
                    t.exports = function(t, r, e) {
                        return e.get && n(e.get, r, {
                            getter: !0
                        }), e.set && n(e.set, r, {
                            setter: !0
                        }), o.f(t, r, e);
                    };
                },
                8052: (t, r, e) => {
                    var n = e(614), o = e(3070), i = e(6339), a = e(3072);
                    t.exports = function(t, r, e, c) {
                        c || (c = {});
                        var u = c.enumerable, s = void 0 !== c.name ? c.name : r;
                        if (n(e) && i(e, s, c), c.global) u ? t[r] = e : a(r, e); else {
                            try {
                                c.unsafe ? t[r] && (u = !0) : delete t[r];
                            } catch (t) {}
                            u ? t[r] = e : o.f(t, r, {
                                value: e,
                                enumerable: !1,
                                configurable: !c.nonConfigurable,
                                writable: !c.nonWritable
                            });
                        }
                        return t;
                    };
                },
                3072: (t, r, e) => {
                    var n = e(7854), o = Object.defineProperty;
                    t.exports = function(t, r) {
                        try {
                            o(n, t, {
                                value: r,
                                configurable: !0,
                                writable: !0
                            });
                        } catch (e) {
                            n[t] = r;
                        }
                        return r;
                    };
                },
                9781: (t, r, e) => {
                    var n = e(7293);
                    t.exports = !n((function() {
                        return 7 != Object.defineProperty({}, 1, {
                            get: function() {
                                return 7;
                            }
                        })[1];
                    }));
                },
                4154: t => {
                    var r = "object" == typeof document && document.all, e = void 0 === r && void 0 !== r;
                    t.exports = {
                        all: r,
                        IS_HTMLDDA: e
                    };
                },
                317: (t, r, e) => {
                    var n = e(7854), o = e(111), i = n.document, a = o(i) && o(i.createElement);
                    t.exports = function(t) {
                        return a ? i.createElement(t) : {};
                    };
                },
                8324: t => {
                    t.exports = {
                        CSSRuleList: 0,
                        CSSStyleDeclaration: 0,
                        CSSValueList: 0,
                        ClientRectList: 0,
                        DOMRectList: 0,
                        DOMStringList: 0,
                        DOMTokenList: 1,
                        DataTransferItemList: 0,
                        FileList: 0,
                        HTMLAllCollection: 0,
                        HTMLCollection: 0,
                        HTMLFormElement: 0,
                        HTMLSelectElement: 0,
                        MediaList: 0,
                        MimeTypeArray: 0,
                        NamedNodeMap: 0,
                        NodeList: 1,
                        PaintRequestList: 0,
                        Plugin: 0,
                        PluginArray: 0,
                        SVGLengthList: 0,
                        SVGNumberList: 0,
                        SVGPathSegList: 0,
                        SVGPointList: 0,
                        SVGStringList: 0,
                        SVGTransformList: 0,
                        SourceBufferList: 0,
                        StyleSheetList: 0,
                        TextTrackCueList: 0,
                        TextTrackList: 0,
                        TouchList: 0
                    };
                },
                8509: (t, r, e) => {
                    var n = e(317)("span").classList, o = n && n.constructor && n.constructor.prototype;
                    t.exports = o === Object.prototype ? void 0 : o;
                },
                7871: (t, r, e) => {
                    var n = e(3823), o = e(5268);
                    t.exports = !n && !o && "object" == typeof window && "object" == typeof document;
                },
                3823: t => {
                    t.exports = "object" == typeof Deno && Deno && "object" == typeof Deno.version;
                },
                1528: (t, r, e) => {
                    var n = e(8113);
                    t.exports = /ipad|iphone|ipod/i.test(n) && "undefined" != typeof Pebble;
                },
                6833: (t, r, e) => {
                    var n = e(8113);
                    t.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(n);
                },
                5268: (t, r, e) => {
                    var n = e(4326);
                    t.exports = "undefined" != typeof process && "process" == n(process);
                },
                1036: (t, r, e) => {
                    var n = e(8113);
                    t.exports = /web0s(?!.*chrome)/i.test(n);
                },
                8113: t => {
                    t.exports = "undefined" != typeof navigator && String(navigator.userAgent) || "";
                },
                7392: (t, r, e) => {
                    var n, o, i = e(7854), a = e(8113), c = i.process, u = i.Deno, s = c && c.versions || u && u.version, f = s && s.v8;
                    f && (o = (n = f.split("."))[0] > 0 && n[0] < 4 ? 1 : +(n[0] + n[1])), !o && a && (!(n = a.match(/Edge\/(\d+)/)) || n[1] >= 74) && (n = a.match(/Chrome\/(\d+)/)) && (o = +n[1]), 
                    t.exports = o;
                },
                748: t => {
                    t.exports = [ "constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf" ];
                },
                1060: (t, r, e) => {
                    var n = e(1702), o = Error, i = n("".replace), a = String(o("zxcasd").stack), c = /\n\s*at [^:]*:[^\n]*/, u = c.test(a);
                    t.exports = function(t, r) {
                        if (u && "string" == typeof t && !o.prepareStackTrace) for (;r--; ) t = i(t, c, "");
                        return t;
                    };
                },
                5392: (t, r, e) => {
                    var n = e(8880), o = e(1060), i = e(2914), a = Error.captureStackTrace;
                    t.exports = function(t, r, e, c) {
                        i && (a ? a(t, r) : n(t, "stack", o(e, c)));
                    };
                },
                2914: (t, r, e) => {
                    var n = e(7293), o = e(9114);
                    t.exports = !n((function() {
                        var t = Error("a");
                        return !("stack" in t) || (Object.defineProperty(t, "stack", o(1, 7)), 7 !== t.stack);
                    }));
                },
                2109: (t, r, e) => {
                    var n = e(7854), o = e(1236).f, i = e(8880), a = e(8052), c = e(3072), u = e(9920), s = e(4705);
                    t.exports = function(t, r) {
                        var e, f, p, v, l, h = t.target, d = t.global, y = t.stat;
                        if (e = d ? n : y ? n[h] || c(h, {}) : (n[h] || {}).prototype) for (f in r) {
                            if (v = r[f], p = t.dontCallGetSet ? (l = o(e, f)) && l.value : e[f], !s(d ? f : h + (y ? "." : "#") + f, t.forced) && void 0 !== p) {
                                if (typeof v == typeof p) continue;
                                u(v, p);
                            }
                            (t.sham || p && p.sham) && i(v, "sham", !0), a(e, f, v, t);
                        }
                    };
                },
                7293: t => {
                    t.exports = function(t) {
                        try {
                            return !!t();
                        } catch (t) {
                            return !0;
                        }
                    };
                },
                2104: (t, r, e) => {
                    var n = e(4374), o = Function.prototype, i = o.apply, a = o.call;
                    t.exports = "object" == typeof Reflect && Reflect.apply || (n ? a.bind(i) : function() {
                        return a.apply(i, arguments);
                    });
                },
                9974: (t, r, e) => {
                    var n = e(1470), o = e(9662), i = e(4374), a = n(n.bind);
                    t.exports = function(t, r) {
                        return o(t), void 0 === r ? t : i ? a(t, r) : function() {
                            return t.apply(r, arguments);
                        };
                    };
                },
                4374: (t, r, e) => {
                    var n = e(7293);
                    t.exports = !n((function() {
                        var t = function() {}.bind();
                        return "function" != typeof t || t.hasOwnProperty("prototype");
                    }));
                },
                6916: (t, r, e) => {
                    var n = e(4374), o = Function.prototype.call;
                    t.exports = n ? o.bind(o) : function() {
                        return o.apply(o, arguments);
                    };
                },
                6530: (t, r, e) => {
                    var n = e(9781), o = e(2597), i = Function.prototype, a = n && Object.getOwnPropertyDescriptor, c = o(i, "name"), u = c && "something" === function() {}.name, s = c && (!n || n && a(i, "name").configurable);
                    t.exports = {
                        EXISTS: c,
                        PROPER: u,
                        CONFIGURABLE: s
                    };
                },
                5668: (t, r, e) => {
                    var n = e(1702), o = e(9662);
                    t.exports = function(t, r, e) {
                        try {
                            return n(o(Object.getOwnPropertyDescriptor(t, r)[e]));
                        } catch (t) {}
                    };
                },
                1470: (t, r, e) => {
                    var n = e(4326), o = e(1702);
                    t.exports = function(t) {
                        if ("Function" === n(t)) return o(t);
                    };
                },
                1702: (t, r, e) => {
                    var n = e(4374), o = Function.prototype, i = o.call, a = n && o.bind.bind(i, i);
                    t.exports = n ? a : function(t) {
                        return function() {
                            return i.apply(t, arguments);
                        };
                    };
                },
                5005: (t, r, e) => {
                    var n = e(7854), o = e(614);
                    t.exports = function(t, r) {
                        return arguments.length < 2 ? (e = n[t], o(e) ? e : void 0) : n[t] && n[t][r];
                        var e;
                    };
                },
                1246: (t, r, e) => {
                    var n = e(648), o = e(8173), i = e(8554), a = e(7497), c = e(5112)("iterator");
                    t.exports = function(t) {
                        if (!i(t)) return o(t, c) || o(t, "@@iterator") || a[n(t)];
                    };
                },
                4121: (t, r, e) => {
                    var n = e(6916), o = e(9662), i = e(9670), a = e(6330), c = e(1246), u = TypeError;
                    t.exports = function(t, r) {
                        var e = arguments.length < 2 ? c(t) : r;
                        if (o(e)) return i(n(e, t));
                        throw u(a(t) + " is not iterable");
                    };
                },
                8044: (t, r, e) => {
                    var n = e(1702), o = e(3157), i = e(614), a = e(4326), c = e(1340), u = n([].push);
                    t.exports = function(t) {
                        if (i(t)) return t;
                        if (o(t)) {
                            for (var r = t.length, e = [], n = 0; n < r; n++) {
                                var s = t[n];
                                "string" == typeof s ? u(e, s) : "number" != typeof s && "Number" != a(s) && "String" != a(s) || u(e, c(s));
                            }
                            var f = e.length, p = !0;
                            return function(t, r) {
                                if (p) return p = !1, r;
                                if (o(this)) return r;
                                for (var n = 0; n < f; n++) if (e[n] === t) return r;
                            };
                        }
                    };
                },
                8173: (t, r, e) => {
                    var n = e(9662), o = e(8554);
                    t.exports = function(t, r) {
                        var e = t[r];
                        return o(e) ? void 0 : n(e);
                    };
                },
                7854: (t, r, e) => {
                    var n = function(t) {
                        return t && t.Math == Math && t;
                    };
                    t.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof e.g && e.g) || function() {
                        return this;
                    }() || Function("return this")();
                },
                2597: (t, r, e) => {
                    var n = e(1702), o = e(7908), i = n({}.hasOwnProperty);
                    t.exports = Object.hasOwn || function(t, r) {
                        return i(o(t), r);
                    };
                },
                3501: t => {
                    t.exports = {};
                },
                842: t => {
                    t.exports = function(t, r) {
                        try {
                            1 == arguments.length ? console.error(t) : console.error(t, r);
                        } catch (t) {}
                    };
                },
                490: (t, r, e) => {
                    var n = e(5005);
                    t.exports = n("document", "documentElement");
                },
                4664: (t, r, e) => {
                    var n = e(9781), o = e(7293), i = e(317);
                    t.exports = !n && !o((function() {
                        return 7 != Object.defineProperty(i("div"), "a", {
                            get: function() {
                                return 7;
                            }
                        }).a;
                    }));
                },
                8361: (t, r, e) => {
                    var n = e(1702), o = e(7293), i = e(4326), a = Object, c = n("".split);
                    t.exports = o((function() {
                        return !a("z").propertyIsEnumerable(0);
                    })) ? function(t) {
                        return "String" == i(t) ? c(t, "") : a(t);
                    } : a;
                },
                9587: (t, r, e) => {
                    var n = e(614), o = e(111), i = e(7674);
                    t.exports = function(t, r, e) {
                        var a, c;
                        return i && n(a = r.constructor) && a !== e && o(c = a.prototype) && c !== e.prototype && i(t, c), 
                        t;
                    };
                },
                2788: (t, r, e) => {
                    var n = e(1702), o = e(614), i = e(5465), a = n(Function.toString);
                    o(i.inspectSource) || (i.inspectSource = function(t) {
                        return a(t);
                    }), t.exports = i.inspectSource;
                },
                8340: (t, r, e) => {
                    var n = e(111), o = e(8880);
                    t.exports = function(t, r) {
                        n(r) && "cause" in r && o(t, "cause", r.cause);
                    };
                },
                9909: (t, r, e) => {
                    var n, o, i, a = e(4811), c = e(7854), u = e(111), s = e(8880), f = e(2597), p = e(5465), v = e(6200), l = e(3501), h = "Object already initialized", d = c.TypeError, y = c.WeakMap;
                    if (a || p.state) {
                        var m = p.state || (p.state = new y);
                        m.get = m.get, m.has = m.has, m.set = m.set, n = function(t, r) {
                            if (m.has(t)) throw d(h);
                            return r.facade = t, m.set(t, r), r;
                        }, o = function(t) {
                            return m.get(t) || {};
                        }, i = function(t) {
                            return m.has(t);
                        };
                    } else {
                        var g = v("state");
                        l[g] = !0, n = function(t, r) {
                            if (f(t, g)) throw d(h);
                            return r.facade = t, s(t, g, r), r;
                        }, o = function(t) {
                            return f(t, g) ? t[g] : {};
                        }, i = function(t) {
                            return f(t, g);
                        };
                    }
                    t.exports = {
                        set: n,
                        get: o,
                        has: i,
                        enforce: function(t) {
                            return i(t) ? o(t) : n(t, {});
                        },
                        getterFor: function(t) {
                            return function(r) {
                                var e;
                                if (!u(r) || (e = o(r)).type !== t) throw d("Incompatible receiver, " + t + " required");
                                return e;
                            };
                        }
                    };
                },
                7659: (t, r, e) => {
                    var n = e(5112), o = e(7497), i = n("iterator"), a = Array.prototype;
                    t.exports = function(t) {
                        return void 0 !== t && (o.Array === t || a[i] === t);
                    };
                },
                3157: (t, r, e) => {
                    var n = e(4326);
                    t.exports = Array.isArray || function(t) {
                        return "Array" == n(t);
                    };
                },
                614: (t, r, e) => {
                    var n = e(4154), o = n.all;
                    t.exports = n.IS_HTMLDDA ? function(t) {
                        return "function" == typeof t || t === o;
                    } : function(t) {
                        return "function" == typeof t;
                    };
                },
                4411: (t, r, e) => {
                    var n = e(1702), o = e(7293), i = e(614), a = e(648), c = e(5005), u = e(2788), s = function() {}, f = [], p = c("Reflect", "construct"), v = /^\s*(?:class|function)\b/, l = n(v.exec), h = !v.exec(s), d = function(t) {
                        if (!i(t)) return !1;
                        try {
                            return p(s, f, t), !0;
                        } catch (t) {
                            return !1;
                        }
                    }, y = function(t) {
                        if (!i(t)) return !1;
                        switch (a(t)) {
                          case "AsyncFunction":
                          case "GeneratorFunction":
                          case "AsyncGeneratorFunction":
                            return !1;
                        }
                        try {
                            return h || !!l(v, u(t));
                        } catch (t) {
                            return !0;
                        }
                    };
                    y.sham = !0, t.exports = !p || o((function() {
                        var t;
                        return d(d.call) || !d(Object) || !d((function() {
                            t = !0;
                        })) || t;
                    })) ? y : d;
                },
                4705: (t, r, e) => {
                    var n = e(7293), o = e(614), i = /#|\.prototype\./, a = function(t, r) {
                        var e = u[c(t)];
                        return e == f || e != s && (o(r) ? n(r) : !!r);
                    }, c = a.normalize = function(t) {
                        return String(t).replace(i, ".").toLowerCase();
                    }, u = a.data = {}, s = a.NATIVE = "N", f = a.POLYFILL = "P";
                    t.exports = a;
                },
                8554: t => {
                    t.exports = function(t) {
                        return null == t;
                    };
                },
                111: (t, r, e) => {
                    var n = e(614), o = e(4154), i = o.all;
                    t.exports = o.IS_HTMLDDA ? function(t) {
                        return "object" == typeof t ? null !== t : n(t) || t === i;
                    } : function(t) {
                        return "object" == typeof t ? null !== t : n(t);
                    };
                },
                1913: t => {
                    t.exports = !1;
                },
                2190: (t, r, e) => {
                    var n = e(5005), o = e(614), i = e(7976), a = e(3307), c = Object;
                    t.exports = a ? function(t) {
                        return "symbol" == typeof t;
                    } : function(t) {
                        var r = n("Symbol");
                        return o(r) && i(r.prototype, c(t));
                    };
                },
                408: (t, r, e) => {
                    var n = e(9974), o = e(6916), i = e(9670), a = e(6330), c = e(7659), u = e(6244), s = e(7976), f = e(4121), p = e(1246), v = e(9212), l = TypeError, h = function(t, r) {
                        this.stopped = t, this.result = r;
                    }, d = h.prototype;
                    t.exports = function(t, r, e) {
                        var y, m, g, b, x, S, w, j = e && e.that, O = !(!e || !e.AS_ENTRIES), E = !(!e || !e.IS_RECORD), T = !(!e || !e.IS_ITERATOR), P = !(!e || !e.INTERRUPTED), L = n(r, j), C = function(t) {
                            return y && v(y, "normal", t), new h(!0, t);
                        }, R = function(t) {
                            return O ? (i(t), P ? L(t[0], t[1], C) : L(t[0], t[1])) : P ? L(t, C) : L(t);
                        };
                        if (E) y = t.iterator; else if (T) y = t; else {
                            if (!(m = p(t))) throw l(a(t) + " is not iterable");
                            if (c(m)) {
                                for (g = 0, b = u(t); b > g; g++) if ((x = R(t[g])) && s(d, x)) return x;
                                return new h(!1);
                            }
                            y = f(t, m);
                        }
                        for (S = E ? t.next : y.next; !(w = o(S, y)).done; ) {
                            try {
                                x = R(w.value);
                            } catch (t) {
                                v(y, "throw", t);
                            }
                            if ("object" == typeof x && x && s(d, x)) return x;
                        }
                        return new h(!1);
                    };
                },
                9212: (t, r, e) => {
                    var n = e(6916), o = e(9670), i = e(8173);
                    t.exports = function(t, r, e) {
                        var a, c;
                        o(t);
                        try {
                            if (!(a = i(t, "return"))) {
                                if ("throw" === r) throw e;
                                return e;
                            }
                            a = n(a, t);
                        } catch (t) {
                            c = !0, a = t;
                        }
                        if ("throw" === r) throw e;
                        if (c) throw a;
                        return o(a), e;
                    };
                },
                7497: t => {
                    t.exports = {};
                },
                6244: (t, r, e) => {
                    var n = e(7466);
                    t.exports = function(t) {
                        return n(t.length);
                    };
                },
                6339: (t, r, e) => {
                    var n = e(1702), o = e(7293), i = e(614), a = e(2597), c = e(9781), u = e(6530).CONFIGURABLE, s = e(2788), f = e(9909), p = f.enforce, v = f.get, l = String, h = Object.defineProperty, d = n("".slice), y = n("".replace), m = n([].join), g = c && !o((function() {
                        return 8 !== h((function() {}), "length", {
                            value: 8
                        }).length;
                    })), b = String(String).split("String"), x = t.exports = function(t, r, e) {
                        "Symbol(" === d(l(r), 0, 7) && (r = "[" + y(l(r), /^Symbol\(([^)]*)\)/, "$1") + "]"), 
                        e && e.getter && (r = "get " + r), e && e.setter && (r = "set " + r), (!a(t, "name") || u && t.name !== r) && (c ? h(t, "name", {
                            value: r,
                            configurable: !0
                        }) : t.name = r), g && e && a(e, "arity") && t.length !== e.arity && h(t, "length", {
                            value: e.arity
                        });
                        try {
                            e && a(e, "constructor") && e.constructor ? c && h(t, "prototype", {
                                writable: !1
                            }) : t.prototype && (t.prototype = void 0);
                        } catch (t) {}
                        var n = p(t);
                        return a(n, "source") || (n.source = m(b, "string" == typeof r ? r : "")), t;
                    };
                    Function.prototype.toString = x((function() {
                        return i(this) && v(this).source || s(this);
                    }), "toString");
                },
                4758: t => {
                    var r = Math.ceil, e = Math.floor;
                    t.exports = Math.trunc || function(t) {
                        var n = +t;
                        return (n > 0 ? e : r)(n);
                    };
                },
                5948: (t, r, e) => {
                    var n, o, i, a, c, u = e(7854), s = e(9974), f = e(1236).f, p = e(261).set, v = e(8572), l = e(6833), h = e(1528), d = e(1036), y = e(5268), m = u.MutationObserver || u.WebKitMutationObserver, g = u.document, b = u.process, x = u.Promise, S = f(u, "queueMicrotask"), w = S && S.value;
                    if (!w) {
                        var j = new v, O = function() {
                            var t, r;
                            for (y && (t = b.domain) && t.exit(); r = j.get(); ) try {
                                r();
                            } catch (t) {
                                throw j.head && n(), t;
                            }
                            t && t.enter();
                        };
                        l || y || d || !m || !g ? !h && x && x.resolve ? ((a = x.resolve(void 0)).constructor = x, 
                        c = s(a.then, a), n = function() {
                            c(O);
                        }) : y ? n = function() {
                            b.nextTick(O);
                        } : (p = s(p, u), n = function() {
                            p(O);
                        }) : (o = !0, i = g.createTextNode(""), new m(O).observe(i, {
                            characterData: !0
                        }), n = function() {
                            i.data = o = !o;
                        }), w = function(t) {
                            j.head || n(), j.add(t);
                        };
                    }
                    t.exports = w;
                },
                8523: (t, r, e) => {
                    "use strict";
                    var n = e(9662), o = TypeError, i = function(t) {
                        var r, e;
                        this.promise = new t((function(t, n) {
                            if (void 0 !== r || void 0 !== e) throw o("Bad Promise constructor");
                            r = t, e = n;
                        })), this.resolve = n(r), this.reject = n(e);
                    };
                    t.exports.f = function(t) {
                        return new i(t);
                    };
                },
                6277: (t, r, e) => {
                    var n = e(1340);
                    t.exports = function(t, r) {
                        return void 0 === t ? arguments.length < 2 ? "" : r : n(t);
                    };
                },
                3070: (t, r, e) => {
                    var n = e(9781), o = e(4664), i = e(3353), a = e(9670), c = e(4948), u = TypeError, s = Object.defineProperty, f = Object.getOwnPropertyDescriptor, p = "enumerable", v = "configurable", l = "writable";
                    r.f = n ? i ? function(t, r, e) {
                        if (a(t), r = c(r), a(e), "function" == typeof t && "prototype" === r && "value" in e && l in e && !e[l]) {
                            var n = f(t, r);
                            n && n[l] && (t[r] = e.value, e = {
                                configurable: v in e ? e[v] : n[v],
                                enumerable: p in e ? e[p] : n[p],
                                writable: !1
                            });
                        }
                        return s(t, r, e);
                    } : s : function(t, r, e) {
                        if (a(t), r = c(r), a(e), o) try {
                            return s(t, r, e);
                        } catch (t) {}
                        if ("get" in e || "set" in e) throw u("Accessors not supported");
                        return "value" in e && (t[r] = e.value), t;
                    };
                },
                1236: (t, r, e) => {
                    var n = e(9781), o = e(6916), i = e(5296), a = e(9114), c = e(5656), u = e(4948), s = e(2597), f = e(4664), p = Object.getOwnPropertyDescriptor;
                    r.f = n ? p : function(t, r) {
                        if (t = c(t), r = u(r), f) try {
                            return p(t, r);
                        } catch (t) {}
                        if (s(t, r)) return a(!o(i.f, t, r), t[r]);
                    };
                },
                8006: (t, r, e) => {
                    var n = e(6324), o = e(748).concat("length", "prototype");
                    r.f = Object.getOwnPropertyNames || function(t) {
                        return n(t, o);
                    };
                },
                5181: (t, r) => {
                    r.f = Object.getOwnPropertySymbols;
                },
                7976: (t, r, e) => {
                    var n = e(1702);
                    t.exports = n({}.isPrototypeOf);
                },
                6324: (t, r, e) => {
                    var n = e(1702), o = e(2597), i = e(5656), a = e(1318).indexOf, c = e(3501), u = n([].push);
                    t.exports = function(t, r) {
                        var e, n = i(t), s = 0, f = [];
                        for (e in n) !o(c, e) && o(n, e) && u(f, e);
                        for (;r.length > s; ) o(n, e = r[s++]) && (~a(f, e) || u(f, e));
                        return f;
                    };
                },
                1956: (t, r, e) => {
                    var n = e(6324), o = e(748);
                    t.exports = Object.keys || function(t) {
                        return n(t, o);
                    };
                },
                5296: (t, r) => {
                    "use strict";
                    var e = {}.propertyIsEnumerable, n = Object.getOwnPropertyDescriptor, o = n && !e.call({
                        1: 2
                    }, 1);
                    r.f = o ? function(t) {
                        var r = n(this, t);
                        return !!r && r.enumerable;
                    } : e;
                },
                7674: (t, r, e) => {
                    var n = e(5668), o = e(9670), i = e(6077);
                    t.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
                        var t, r = !1, e = {};
                        try {
                            (t = n(Object.prototype, "__proto__", "set"))(e, []), r = e instanceof Array;
                        } catch (t) {}
                        return function(e, n) {
                            return o(e), i(n), r ? t(e, n) : e.__proto__ = n, e;
                        };
                    }() : void 0);
                },
                288: (t, r, e) => {
                    "use strict";
                    var n = e(1694), o = e(648);
                    t.exports = n ? {}.toString : function() {
                        return "[object " + o(this) + "]";
                    };
                },
                2140: (t, r, e) => {
                    var n = e(6916), o = e(614), i = e(111), a = TypeError;
                    t.exports = function(t, r) {
                        var e, c;
                        if ("string" === r && o(e = t.toString) && !i(c = n(e, t))) return c;
                        if (o(e = t.valueOf) && !i(c = n(e, t))) return c;
                        if ("string" !== r && o(e = t.toString) && !i(c = n(e, t))) return c;
                        throw a("Can't convert object to primitive value");
                    };
                },
                3887: (t, r, e) => {
                    var n = e(5005), o = e(1702), i = e(8006), a = e(5181), c = e(9670), u = o([].concat);
                    t.exports = n("Reflect", "ownKeys") || function(t) {
                        var r = i.f(c(t)), e = a.f;
                        return e ? u(r, e(t)) : r;
                    };
                },
                2534: t => {
                    t.exports = function(t) {
                        try {
                            return {
                                error: !1,
                                value: t()
                            };
                        } catch (t) {
                            return {
                                error: !0,
                                value: t
                            };
                        }
                    };
                },
                3702: (t, r, e) => {
                    var n = e(7854), o = e(2492), i = e(614), a = e(4705), c = e(2788), u = e(5112), s = e(7871), f = e(3823), p = e(1913), v = e(7392), l = o && o.prototype, h = u("species"), d = !1, y = i(n.PromiseRejectionEvent), m = a("Promise", (function() {
                        var t = c(o), r = t !== String(o);
                        if (!r && 66 === v) return !0;
                        if (p && (!l.catch || !l.finally)) return !0;
                        if (!v || v < 51 || !/native code/.test(t)) {
                            var e = new o((function(t) {
                                t(1);
                            })), n = function(t) {
                                t((function() {}), (function() {}));
                            };
                            if ((e.constructor = {})[h] = n, !(d = e.then((function() {})) instanceof n)) return !0;
                        }
                        return !r && (s || f) && !y;
                    }));
                    t.exports = {
                        CONSTRUCTOR: m,
                        REJECTION_EVENT: y,
                        SUBCLASSING: d
                    };
                },
                2492: (t, r, e) => {
                    var n = e(7854);
                    t.exports = n.Promise;
                },
                9478: (t, r, e) => {
                    var n = e(9670), o = e(111), i = e(8523);
                    t.exports = function(t, r) {
                        if (n(t), o(r) && r.constructor === t) return r;
                        var e = i.f(t);
                        return (0, e.resolve)(r), e.promise;
                    };
                },
                612: (t, r, e) => {
                    var n = e(2492), o = e(7072), i = e(3702).CONSTRUCTOR;
                    t.exports = i || !o((function(t) {
                        n.all(t).then(void 0, (function() {}));
                    }));
                },
                2626: (t, r, e) => {
                    var n = e(3070).f;
                    t.exports = function(t, r, e) {
                        e in t || n(t, e, {
                            configurable: !0,
                            get: function() {
                                return r[e];
                            },
                            set: function(t) {
                                r[e] = t;
                            }
                        });
                    };
                },
                8572: t => {
                    var r = function() {
                        this.head = null, this.tail = null;
                    };
                    r.prototype = {
                        add: function(t) {
                            var r = {
                                item: t,
                                next: null
                            }, e = this.tail;
                            e ? e.next = r : this.head = r, this.tail = r;
                        },
                        get: function() {
                            var t = this.head;
                            if (t) return null === (this.head = t.next) && (this.tail = null), t.item;
                        }
                    }, t.exports = r;
                },
                4488: (t, r, e) => {
                    var n = e(8554), o = TypeError;
                    t.exports = function(t) {
                        if (n(t)) throw o("Can't call method on " + t);
                        return t;
                    };
                },
                6340: (t, r, e) => {
                    "use strict";
                    var n = e(5005), o = e(7045), i = e(5112), a = e(9781), c = i("species");
                    t.exports = function(t) {
                        var r = n(t);
                        a && r && !r[c] && o(r, c, {
                            configurable: !0,
                            get: function() {
                                return this;
                            }
                        });
                    };
                },
                8003: (t, r, e) => {
                    var n = e(3070).f, o = e(2597), i = e(5112)("toStringTag");
                    t.exports = function(t, r, e) {
                        t && !e && (t = t.prototype), t && !o(t, i) && n(t, i, {
                            configurable: !0,
                            value: r
                        });
                    };
                },
                6200: (t, r, e) => {
                    var n = e(2309), o = e(9711), i = n("keys");
                    t.exports = function(t) {
                        return i[t] || (i[t] = o(t));
                    };
                },
                5465: (t, r, e) => {
                    var n = e(7854), o = e(3072), i = "__core-js_shared__", a = n[i] || o(i, {});
                    t.exports = a;
                },
                2309: (t, r, e) => {
                    var n = e(1913), o = e(5465);
                    (t.exports = function(t, r) {
                        return o[t] || (o[t] = void 0 !== r ? r : {});
                    })("versions", []).push({
                        version: "3.30.0",
                        mode: n ? "pure" : "global",
                        copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)",
                        license: "https://github.com/zloirock/core-js/blob/v3.30.0/LICENSE",
                        source: "https://github.com/zloirock/core-js"
                    });
                },
                6707: (t, r, e) => {
                    var n = e(9670), o = e(9483), i = e(8554), a = e(5112)("species");
                    t.exports = function(t, r) {
                        var e, c = n(t).constructor;
                        return void 0 === c || i(e = n(c)[a]) ? r : o(e);
                    };
                },
                6293: (t, r, e) => {
                    var n = e(7392), o = e(7293);
                    t.exports = !!Object.getOwnPropertySymbols && !o((function() {
                        var t = Symbol();
                        return !String(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && n && n < 41;
                    }));
                },
                261: (t, r, e) => {
                    var n, o, i, a, c = e(7854), u = e(2104), s = e(9974), f = e(614), p = e(2597), v = e(7293), l = e(490), h = e(206), d = e(317), y = e(8053), m = e(6833), g = e(5268), b = c.setImmediate, x = c.clearImmediate, S = c.process, w = c.Dispatch, j = c.Function, O = c.MessageChannel, E = c.String, T = 0, P = {}, L = "onreadystatechange";
                    v((function() {
                        n = c.location;
                    }));
                    var C = function(t) {
                        if (p(P, t)) {
                            var r = P[t];
                            delete P[t], r();
                        }
                    }, R = function(t) {
                        return function() {
                            C(t);
                        };
                    }, _ = function(t) {
                        C(t.data);
                    }, D = function(t) {
                        c.postMessage(E(t), n.protocol + "//" + n.host);
                    };
                    b && x || (b = function(t) {
                        y(arguments.length, 1);
                        var r = f(t) ? t : j(t), e = h(arguments, 1);
                        return P[++T] = function() {
                            u(r, void 0, e);
                        }, o(T), T;
                    }, x = function(t) {
                        delete P[t];
                    }, g ? o = function(t) {
                        S.nextTick(R(t));
                    } : w && w.now ? o = function(t) {
                        w.now(R(t));
                    } : O && !m ? (a = (i = new O).port2, i.port1.onmessage = _, o = s(a.postMessage, a)) : c.addEventListener && f(c.postMessage) && !c.importScripts && n && "file:" !== n.protocol && !v(D) ? (o = D, 
                    c.addEventListener("message", _, !1)) : o = L in d("script") ? function(t) {
                        l.appendChild(d("script"))[L] = function() {
                            l.removeChild(this), C(t);
                        };
                    } : function(t) {
                        setTimeout(R(t), 0);
                    }), t.exports = {
                        set: b,
                        clear: x
                    };
                },
                1400: (t, r, e) => {
                    var n = e(9303), o = Math.max, i = Math.min;
                    t.exports = function(t, r) {
                        var e = n(t);
                        return e < 0 ? o(e + r, 0) : i(e, r);
                    };
                },
                5656: (t, r, e) => {
                    var n = e(8361), o = e(4488);
                    t.exports = function(t) {
                        return n(o(t));
                    };
                },
                9303: (t, r, e) => {
                    var n = e(4758);
                    t.exports = function(t) {
                        var r = +t;
                        return r != r || 0 === r ? 0 : n(r);
                    };
                },
                7466: (t, r, e) => {
                    var n = e(9303), o = Math.min;
                    t.exports = function(t) {
                        return t > 0 ? o(n(t), 9007199254740991) : 0;
                    };
                },
                7908: (t, r, e) => {
                    var n = e(4488), o = Object;
                    t.exports = function(t) {
                        return o(n(t));
                    };
                },
                7593: (t, r, e) => {
                    var n = e(6916), o = e(111), i = e(2190), a = e(8173), c = e(2140), u = e(5112), s = TypeError, f = u("toPrimitive");
                    t.exports = function(t, r) {
                        if (!o(t) || i(t)) return t;
                        var e, u = a(t, f);
                        if (u) {
                            if (void 0 === r && (r = "default"), e = n(u, t, r), !o(e) || i(e)) return e;
                            throw s("Can't convert object to primitive value");
                        }
                        return void 0 === r && (r = "number"), c(t, r);
                    };
                },
                4948: (t, r, e) => {
                    var n = e(7593), o = e(2190);
                    t.exports = function(t) {
                        var r = n(t, "string");
                        return o(r) ? r : r + "";
                    };
                },
                1694: (t, r, e) => {
                    var n = {};
                    n[e(5112)("toStringTag")] = "z", t.exports = "[object z]" === String(n);
                },
                1340: (t, r, e) => {
                    var n = e(648), o = String;
                    t.exports = function(t) {
                        if ("Symbol" === n(t)) throw TypeError("Cannot convert a Symbol value to a string");
                        return o(t);
                    };
                },
                6330: t => {
                    var r = String;
                    t.exports = function(t) {
                        try {
                            return r(t);
                        } catch (t) {
                            return "Object";
                        }
                    };
                },
                9711: (t, r, e) => {
                    var n = e(1702), o = 0, i = Math.random(), a = n(1..toString);
                    t.exports = function(t) {
                        return "Symbol(" + (void 0 === t ? "" : t) + ")_" + a(++o + i, 36);
                    };
                },
                3307: (t, r, e) => {
                    var n = e(6293);
                    t.exports = n && !Symbol.sham && "symbol" == typeof Symbol.iterator;
                },
                3353: (t, r, e) => {
                    var n = e(9781), o = e(7293);
                    t.exports = n && o((function() {
                        return 42 != Object.defineProperty((function() {}), "prototype", {
                            value: 42,
                            writable: !1
                        }).prototype;
                    }));
                },
                8053: t => {
                    var r = TypeError;
                    t.exports = function(t, e) {
                        if (t < e) throw r("Not enough arguments");
                        return t;
                    };
                },
                4811: (t, r, e) => {
                    var n = e(7854), o = e(614), i = n.WeakMap;
                    t.exports = o(i) && /native code/.test(String(i));
                },
                5112: (t, r, e) => {
                    var n = e(7854), o = e(2309), i = e(2597), a = e(9711), c = e(6293), u = e(3307), s = n.Symbol, f = o("wks"), p = u ? s.for || s : s && s.withoutSetter || a;
                    t.exports = function(t) {
                        return i(f, t) || (f[t] = c && i(s, t) ? s[t] : p("Symbol." + t)), f[t];
                    };
                },
                9191: (t, r, e) => {
                    "use strict";
                    var n = e(5005), o = e(2597), i = e(8880), a = e(7976), c = e(7674), u = e(9920), s = e(2626), f = e(9587), p = e(6277), v = e(8340), l = e(5392), h = e(9781), d = e(1913);
                    t.exports = function(t, r, e, y) {
                        var m = "stackTraceLimit", g = y ? 2 : 1, b = t.split("."), x = b[b.length - 1], S = n.apply(null, b);
                        if (S) {
                            var w = S.prototype;
                            if (!d && o(w, "cause") && delete w.cause, !e) return S;
                            var j = n("Error"), O = r((function(t, r) {
                                var e = p(y ? r : t, void 0), n = y ? new S(t) : new S;
                                return void 0 !== e && i(n, "message", e), l(n, O, n.stack, 2), this && a(w, this) && f(n, this, O), 
                                arguments.length > g && v(n, arguments[g]), n;
                            }));
                            if (O.prototype = w, "Error" !== x ? c ? c(O, j) : u(O, j, {
                                name: !0
                            }) : h && m in S && (s(O, S, m), s(O, S, "prepareStackTrace")), u(O, S), !d) try {
                                w.name !== x && i(w, "name", x), w.constructor = O;
                            } catch (t) {}
                            return O;
                        }
                    };
                },
                1703: (t, r, e) => {
                    var n = e(2109), o = e(7854), i = e(2104), a = e(9191), c = "WebAssembly", u = o[c], s = 7 !== Error("e", {
                        cause: 7
                    }).cause, f = function(t, r) {
                        var e = {};
                        e[t] = a(t, r, s), n({
                            global: !0,
                            constructor: !0,
                            arity: 1,
                            forced: s
                        }, e);
                    }, p = function(t, r) {
                        if (u && u[t]) {
                            var e = {};
                            e[t] = a(c + "." + t, r, s), n({
                                target: c,
                                stat: !0,
                                constructor: !0,
                                arity: 1,
                                forced: s
                            }, e);
                        }
                    };
                    f("Error", (function(t) {
                        return function(r) {
                            return i(t, this, arguments);
                        };
                    })), f("EvalError", (function(t) {
                        return function(r) {
                            return i(t, this, arguments);
                        };
                    })), f("RangeError", (function(t) {
                        return function(r) {
                            return i(t, this, arguments);
                        };
                    })), f("ReferenceError", (function(t) {
                        return function(r) {
                            return i(t, this, arguments);
                        };
                    })), f("SyntaxError", (function(t) {
                        return function(r) {
                            return i(t, this, arguments);
                        };
                    })), f("TypeError", (function(t) {
                        return function(r) {
                            return i(t, this, arguments);
                        };
                    })), f("URIError", (function(t) {
                        return function(r) {
                            return i(t, this, arguments);
                        };
                    })), p("CompileError", (function(t) {
                        return function(r) {
                            return i(t, this, arguments);
                        };
                    })), p("LinkError", (function(t) {
                        return function(r) {
                            return i(t, this, arguments);
                        };
                    })), p("RuntimeError", (function(t) {
                        return function(r) {
                            return i(t, this, arguments);
                        };
                    }));
                },
                8862: (t, r, e) => {
                    var n = e(2109), o = e(5005), i = e(2104), a = e(6916), c = e(1702), u = e(7293), s = e(614), f = e(2190), p = e(206), v = e(8044), l = e(6293), h = String, d = o("JSON", "stringify"), y = c(/./.exec), m = c("".charAt), g = c("".charCodeAt), b = c("".replace), x = c(1..toString), S = /[\uD800-\uDFFF]/g, w = /^[\uD800-\uDBFF]$/, j = /^[\uDC00-\uDFFF]$/, O = !l || u((function() {
                        var t = o("Symbol")();
                        return "[null]" != d([ t ]) || "{}" != d({
                            a: t
                        }) || "{}" != d(Object(t));
                    })), E = u((function() {
                        return '"\\udf06\\ud834"' !== d("\udf06\ud834") || '"\\udead"' !== d("\udead");
                    })), T = function(t, r) {
                        var e = p(arguments), n = v(r);
                        if (s(n) || void 0 !== t && !f(t)) return e[1] = function(t, r) {
                            if (s(n) && (r = a(n, this, h(t), r)), !f(r)) return r;
                        }, i(d, null, e);
                    }, P = function(t, r, e) {
                        var n = m(e, r - 1), o = m(e, r + 1);
                        return y(w, t) && !y(j, o) || y(j, t) && !y(w, n) ? "\\u" + x(g(t, 0), 16) : t;
                    };
                    d && n({
                        target: "JSON",
                        stat: !0,
                        arity: 3,
                        forced: O || E
                    }, {
                        stringify: function(t, r, e) {
                            var n = p(arguments), o = i(O ? T : d, null, n);
                            return E && "string" == typeof o ? b(o, S, P) : o;
                        }
                    });
                },
                9070: (t, r, e) => {
                    var n = e(2109), o = e(9781), i = e(3070).f;
                    n({
                        target: "Object",
                        stat: !0,
                        forced: Object.defineProperty !== i,
                        sham: !o
                    }, {
                        defineProperty: i
                    });
                },
                7941: (t, r, e) => {
                    var n = e(2109), o = e(7908), i = e(1956);
                    n({
                        target: "Object",
                        stat: !0,
                        forced: e(7293)((function() {
                            i(1);
                        }))
                    }, {
                        keys: function(t) {
                            return i(o(t));
                        }
                    });
                },
                1539: (t, r, e) => {
                    var n = e(1694), o = e(8052), i = e(288);
                    n || o(Object.prototype, "toString", i, {
                        unsafe: !0
                    });
                },
                821: (t, r, e) => {
                    "use strict";
                    var n = e(2109), o = e(6916), i = e(9662), a = e(8523), c = e(2534), u = e(408);
                    n({
                        target: "Promise",
                        stat: !0,
                        forced: e(612)
                    }, {
                        all: function(t) {
                            var r = this, e = a.f(r), n = e.resolve, s = e.reject, f = c((function() {
                                var e = i(r.resolve), a = [], c = 0, f = 1;
                                u(t, (function(t) {
                                    var i = c++, u = !1;
                                    f++, o(e, r, t).then((function(t) {
                                        u || (u = !0, a[i] = t, --f || n(a));
                                    }), s);
                                })), --f || n(a);
                            }));
                            return f.error && s(f.value), e.promise;
                        }
                    });
                },
                4164: (t, r, e) => {
                    "use strict";
                    var n = e(2109), o = e(1913), i = e(3702).CONSTRUCTOR, a = e(2492), c = e(5005), u = e(614), s = e(8052), f = a && a.prototype;
                    if (n({
                        target: "Promise",
                        proto: !0,
                        forced: i,
                        real: !0
                    }, {
                        catch: function(t) {
                            return this.then(void 0, t);
                        }
                    }), !o && u(a)) {
                        var p = c("Promise").prototype.catch;
                        f.catch !== p && s(f, "catch", p, {
                            unsafe: !0
                        });
                    }
                },
                3401: (t, r, e) => {
                    "use strict";
                    var n, o, i, a = e(2109), c = e(1913), u = e(5268), s = e(7854), f = e(6916), p = e(8052), v = e(7674), l = e(8003), h = e(6340), d = e(9662), y = e(614), m = e(111), g = e(5787), b = e(6707), x = e(261).set, S = e(5948), w = e(842), j = e(2534), O = e(8572), E = e(9909), T = e(2492), P = e(3702), L = e(8523), C = "Promise", R = P.CONSTRUCTOR, _ = P.REJECTION_EVENT, D = P.SUBCLASSING, M = E.getterFor(C), k = E.set, I = T && T.prototype, N = T, F = I, A = s.TypeError, U = s.document, G = s.process, V = L.f, H = V, q = !!(U && U.createEvent && s.dispatchEvent), z = "unhandledrejection", B = function(t) {
                        var r;
                        return !(!m(t) || !y(r = t.then)) && r;
                    }, J = function(t, r) {
                        var e, n, o, i = r.value, a = 1 == r.state, c = a ? t.ok : t.fail, u = t.resolve, s = t.reject, p = t.domain;
                        try {
                            c ? (a || (2 === r.rejection && Y(r), r.rejection = 1), !0 === c ? e = i : (p && p.enter(), 
                            e = c(i), p && (p.exit(), o = !0)), e === t.promise ? s(A("Promise-chain cycle")) : (n = B(e)) ? f(n, e, u, s) : u(e)) : s(i);
                        } catch (t) {
                            p && !o && p.exit(), s(t);
                        }
                    }, W = function(t, r) {
                        t.notified || (t.notified = !0, S((function() {
                            for (var e, n = t.reactions; e = n.get(); ) J(e, t);
                            t.notified = !1, r && !t.rejection && $(t);
                        })));
                    }, K = function(t, r, e) {
                        var n, o;
                        q ? ((n = U.createEvent("Event")).promise = r, n.reason = e, n.initEvent(t, !1, !0), 
                        s.dispatchEvent(n)) : n = {
                            promise: r,
                            reason: e
                        }, !_ && (o = s["on" + t]) ? o(n) : t === z && w("Unhandled promise rejection", e);
                    }, $ = function(t) {
                        f(x, s, (function() {
                            var r, e = t.facade, n = t.value;
                            if (X(t) && (r = j((function() {
                                u ? G.emit("unhandledRejection", n, e) : K(z, e, n);
                            })), t.rejection = u || X(t) ? 2 : 1, r.error)) throw r.value;
                        }));
                    }, X = function(t) {
                        return 1 !== t.rejection && !t.parent;
                    }, Y = function(t) {
                        f(x, s, (function() {
                            var r = t.facade;
                            u ? G.emit("rejectionHandled", r) : K("rejectionhandled", r, t.value);
                        }));
                    }, Q = function(t, r, e) {
                        return function(n) {
                            t(r, n, e);
                        };
                    }, Z = function(t, r, e) {
                        t.done || (t.done = !0, e && (t = e), t.value = r, t.state = 2, W(t, !0));
                    }, tt = function(t, r, e) {
                        if (!t.done) {
                            t.done = !0, e && (t = e);
                            try {
                                if (t.facade === r) throw A("Promise can't be resolved itself");
                                var n = B(r);
                                n ? S((function() {
                                    var e = {
                                        done: !1
                                    };
                                    try {
                                        f(n, r, Q(tt, e, t), Q(Z, e, t));
                                    } catch (r) {
                                        Z(e, r, t);
                                    }
                                })) : (t.value = r, t.state = 1, W(t, !1));
                            } catch (r) {
                                Z({
                                    done: !1
                                }, r, t);
                            }
                        }
                    };
                    if (R && (F = (N = function(t) {
                        g(this, F), d(t), f(n, this);
                        var r = M(this);
                        try {
                            t(Q(tt, r), Q(Z, r));
                        } catch (t) {
                            Z(r, t);
                        }
                    }).prototype, (n = function(t) {
                        k(this, {
                            type: C,
                            done: !1,
                            notified: !1,
                            parent: !1,
                            reactions: new O,
                            rejection: !1,
                            state: 0,
                            value: void 0
                        });
                    }).prototype = p(F, "then", (function(t, r) {
                        var e = M(this), n = V(b(this, N));
                        return e.parent = !0, n.ok = !y(t) || t, n.fail = y(r) && r, n.domain = u ? G.domain : void 0, 
                        0 == e.state ? e.reactions.add(n) : S((function() {
                            J(n, e);
                        })), n.promise;
                    })), o = function() {
                        var t = new n, r = M(t);
                        this.promise = t, this.resolve = Q(tt, r), this.reject = Q(Z, r);
                    }, L.f = V = function(t) {
                        return t === N || void 0 === t ? new o(t) : H(t);
                    }, !c && y(T) && I !== Object.prototype)) {
                        i = I.then, D || p(I, "then", (function(t, r) {
                            var e = this;
                            return new N((function(t, r) {
                                f(i, e, t, r);
                            })).then(t, r);
                        }), {
                            unsafe: !0
                        });
                        try {
                            delete I.constructor;
                        } catch (t) {}
                        v && v(I, F);
                    }
                    a({
                        global: !0,
                        constructor: !0,
                        wrap: !0,
                        forced: R
                    }, {
                        Promise: N
                    }), l(N, C, !1, !0), h(C);
                },
                8674: (t, r, e) => {
                    e(3401), e(821), e(4164), e(6027), e(683), e(6294);
                },
                6027: (t, r, e) => {
                    "use strict";
                    var n = e(2109), o = e(6916), i = e(9662), a = e(8523), c = e(2534), u = e(408);
                    n({
                        target: "Promise",
                        stat: !0,
                        forced: e(612)
                    }, {
                        race: function(t) {
                            var r = this, e = a.f(r), n = e.reject, s = c((function() {
                                var a = i(r.resolve);
                                u(t, (function(t) {
                                    o(a, r, t).then(e.resolve, n);
                                }));
                            }));
                            return s.error && n(s.value), e.promise;
                        }
                    });
                },
                683: (t, r, e) => {
                    "use strict";
                    var n = e(2109), o = e(6916), i = e(8523);
                    n({
                        target: "Promise",
                        stat: !0,
                        forced: e(3702).CONSTRUCTOR
                    }, {
                        reject: function(t) {
                            var r = i.f(this);
                            return o(r.reject, void 0, t), r.promise;
                        }
                    });
                },
                6294: (t, r, e) => {
                    "use strict";
                    var n = e(2109), o = e(5005), i = e(1913), a = e(2492), c = e(3702).CONSTRUCTOR, u = e(9478), s = o("Promise"), f = i && !c;
                    n({
                        target: "Promise",
                        stat: !0,
                        forced: i || c
                    }, {
                        resolve: function(t) {
                            return u(f && this === s ? a : this, t);
                        }
                    });
                },
                4747: (t, r, e) => {
                    var n = e(7854), o = e(8324), i = e(8509), a = e(8533), c = e(8880), u = function(t) {
                        if (t && t.forEach !== a) try {
                            c(t, "forEach", a);
                        } catch (r) {
                            t.forEach = a;
                        }
                    };
                    for (var s in o) o[s] && u(n[s] && n[s].prototype);
                    u(i);
                }
            }, r = {};
            function e(n) {
                var o = r[n];
                if (void 0 !== o) return o.exports;
                var i = r[n] = {
                    exports: {}
                };
                return t[n](i, i.exports, e), i.exports;
            }
            e.d = (t, r) => {
                for (var n in r) e.o(r, n) && !e.o(t, n) && Object.defineProperty(t, n, {
                    enumerable: !0,
                    get: r[n]
                });
            }, e.g = function() {
                if ("object" == typeof globalThis) return globalThis;
                try {
                    return this || new Function("return this")();
                } catch (t) {
                    if ("object" == typeof window) return window;
                }
            }(), e.o = (t, r) => Object.prototype.hasOwnProperty.call(t, r), e.r = t => {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(t, "__esModule", {
                    value: !0
                });
            };
            var n = {};
            (() => {
                "use strict";
                e.r(n), e.d(n, {
                    default: () => p,
                    init: () => r,
                    send: () => s,
                    sendForm: () => f
                });
                var t = {
                    _origin: "https://api.emailjs.com"
                }, r = function(r) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "https://api.emailjs.com";
                    t._userID = r, t._origin = e;
                }, o = (e(8862), function(t, r, e) {
                    if (!t) throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account";
                    if (!r) throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
                    if (!e) throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
                    return !0;
                });
                e(1539), e(8674), e(4747), e(7941), e(1703), e(9070);
                function i(t, r) {
                    for (var e = 0; e < r.length; e++) {
                        var n = r[e];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                        Object.defineProperty(t, n.key, n);
                    }
                }
                function a(t, r, e) {
                    return r && i(t.prototype, r), e && i(t, e), t;
                }
                var c = a((function t(r) {
                    !function(t, r) {
                        if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function");
                    }(this, t), this.status = r ? r.status : 0, this.text = r ? r.responseText : "Network Error";
                })), u = function(r, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return new Promise((function(o, i) {
                        var a = new XMLHttpRequest;
                        a.addEventListener("load", (function(t) {
                            var r = t.target, e = new c(r);
                            200 === e.status || "OK" === e.text ? o(e) : i(e);
                        })), a.addEventListener("error", (function(t) {
                            var r = t.target;
                            i(new c(r));
                        })), a.open("POST", t._origin + r, !0), Object.keys(n).forEach((function(t) {
                            a.setRequestHeader(t, n[t]);
                        })), a.send(e);
                    }));
                }, s = function(r, e, n, i) {
                    var a = i || t._userID;
                    o(a, r, e);
                    var c = {
                        lib_version: "3.11.0",
                        user_id: a,
                        service_id: r,
                        template_id: e,
                        template_params: n
                    };
                    return u("/api/v1.0/email/send", JSON.stringify(c), {
                        "Content-type": "application/json"
                    });
                }, f = function(r, e, n, i) {
                    var a = i || t._userID, c = function(t) {
                        var r;
                        if (!(r = "string" == typeof t ? document.querySelector(t) : t) || "FORM" !== r.nodeName) throw "The 3rd parameter is expected to be the HTML form element or the style selector of form";
                        return r;
                    }(n);
                    o(a, r, e);
                    var s = new FormData(c);
                    return s.append("lib_version", "3.11.0"), s.append("service_id", r), s.append("template_id", e), 
                    s.append("user_id", a), u("/api/v1.0/email/send-form", s);
                };
                const p = {
                    init: r,
                    send: s,
                    sendForm: f
                };
            })(), self.emailjs = n;
        })();
        const themeButton = document.getElementById("js-theme-button");
        const darkTheme = "dark-theme";
        const iconTheme = "_icon-sun";
        const selectedTheme = localStorage.getItem("selected-theme");
        const selectedIcon = localStorage.getItem("selected-icon");
        const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? "dark" : "light";
        const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? "_icon-moon" : "_icon-sun";
        if (selectedTheme) {
            document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme);
            themeButton.classList[selectedIcon === "_icon-moon" ? "add" : "remove"](iconTheme);
        }
        themeButton.addEventListener("click", (() => {
            document.body.classList.toggle(darkTheme);
            themeButton.classList.toggle(iconTheme);
            localStorage.setItem("selected-theme", getCurrentTheme());
            localStorage.setItem("selected-icon", getCurrentIcon());
        }));
        const rubAnim = document.querySelectorAll(".label__pop");
        if (rubAnim) for (let i = 0; i < rubAnim.length; i++) rubAnim[i].addEventListener("mouseenter", (function() {
            rubAnim[i].classList.add("rubberBand");
            setTimeout((function() {
                rubAnim[i].classList.remove("rubberBand");
            }), 1e3);
        }));
        const root = document.documentElement;
        const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
        const marqueeContent = document.querySelector("ul.marquee__content");
        if (marqueeContent) {
            root.style.setProperty("--marquee-elements", marqueeContent.children.length);
            for (let i = 0; i < marqueeElementsDisplayed; i++) marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
        }
        const goTopBtn = document.querySelector("[data-go-top]");
        if (goTopBtn) window.addEventListener("scroll", (function() {
            if (window.scrollY >= 120) goTopBtn.classList.add("active"); else goTopBtn.classList.remove("active");
        }));
        window["ART"] = false;
        isWebp();
        addTouchClass();
        addLoadedClass();
        menuInit();
        fullVHfix();
        pageNavigation();
        headerScroll();
        filterGallery();
        libsForSendingFormsEmail();
    })();
})();

      // variables
      let customEase =
        "slow(0.7, 0.7, false)";
      let counter = {
        value: 0
      };
      let loaderDuration = 8;


      function updateLoaderText() {
        let progress = Math.round(counter.value);
        $(".loader_number").text(progress);
      }

      function endLoaderAnimation() {
        $(".trigger").click();
      }

      let tl = gsap.timeline({
        onComplete: endLoaderAnimation
      });
      tl.to(counter, {
        value: 100,
        onUpdate: updateLoaderText,
        duration: loaderDuration,
        ease: "slow(0.7, 0.7, false)"
      });
      tl.to(".loader_progress", {
        width: "100%",
        duration: loaderDuration,
        ease: "slow(0.7, 0.7, false)"
      }, 0);

      window.addEventListener("DOMContentLoaded", (event) => {
        // Split text into spans
        let typeSplit = new SplitType("[text-split]", {
          types: "words, chars",
          tagName: "span"
        });

        // Link timelines to scroll position
        function createScrollTrigger(triggerElement, timeline) {
          // Reset tl when scroll out of view past bottom of screen
          ScrollTrigger.create({
            trigger: triggerElement,
            start: "top bottom",
            onLeaveBack: () => {
              timeline.progress(0);
              timeline.pause();
            }
          });
          // Play tl when scrolled into view (60% from top of screen)
          ScrollTrigger.create({
            trigger: triggerElement,
            start: "top 60%",
            onEnter: () => timeline.play()
          });
        }

        $("[words-slide-up]").each(function(index) {
          let tl = gsap.timeline({
            paused: true
          });
          tl.from($(this).find(".word"), {
            opacity: 0,
            yPercent: 100,
            duration: 0.5,
            ease: "back.out(2)",
            stagger: {
              amount: 0.5
            }
          });
          createScrollTrigger($(this), tl);
        });

        $("[words-rotate-in]").each(function(index) {
          let tl = gsap.timeline({
            paused: true
          });
          tl.set($(this).find(".word"), {
            transformPerspective: 1000
          });
          tl.from($(this).find(".word"), {
            rotationX: -90,
            duration: 0.6,
            ease: "power2.out",
            stagger: {
              amount: 0.6
            }
          });
          createScrollTrigger($(this), tl);
        });

        $("[words-slide-from-right]").each(function(index) {
          let tl = gsap.timeline({
            paused: true
          });
          tl.from($(this).find(".word"), {
            opacity: 0,
            x: "1em",
            duration: 0.6,
            ease: "power2.out",
            stagger: {
              amount: 0.2
            }
          });
          createScrollTrigger($(this), tl);
        });

        $("[letters-slide-up]").each(function(index) {
          let tl = gsap.timeline({
            paused: true
          });
          tl.from($(this).find(".char"), {
            yPercent: 100,
            duration: 0.2,
            ease: "power1.out",
            stagger: {
              amount: 0.6
            }
          });
          createScrollTrigger($(this), tl);
        });

        $("[letters-slide-down]").each(function(index) {
          let tl = gsap.timeline({
            paused: true
          });
          tl.from($(this).find(".char"), {
            yPercent: -120,
            duration: 0.3,
            ease: "power1.out",
            stagger: {
              amount: 0.7
            }
          });
          createScrollTrigger($(this), tl);
        });

        $("[letters-fade-in]").each(function(index) {
          let tl = gsap.timeline({
            paused: true
          });
          tl.from($(this).find(".char"), {
            opacity: 0,
            duration: 0.2,
            ease: "power1.out",
            stagger: {
              amount: 0.8
            }
          });
          createScrollTrigger($(this), tl);
        });

        $("[letters-fade-in-random]").each(function(index) {
          let tl = gsap.timeline({
            paused: true
          });
          tl.from($(this).find(".char"), {
            opacity: 0,
            duration: 0.05,
            ease: "power1.out",
            stagger: {
              amount: 0.4,
              from: "random"
            }
          });
          createScrollTrigger($(this), tl);
        });

        $("[scrub-each-word]").each(function(index) {
          let tl = gsap.timeline({
            scrollTrigger: {
              trigger: $(this),
              start: "top 90%",
              end: "top center",
              scrub: true
            }
          });
          tl.from($(this).find(".word"), {
            opacity: 0.2,
            duration: 0.2,
            ease: "power1.out",
            stagger: {
              each: 0.4
            }
          });
        });
        gsap.set("[text-split]", {
          opacity: 1
        });
      });

      const text=['DESIGNER','DEVELOPER'];
let count=0,index=0,currentText='',letter='';


//self invokes function
function type(){
    if(count===text.length)
    {
        count=0;    //if printed both words in text then reset count to 0
    }
    currentText=text[count];
    letter=currentText.slice(0,index++);    //take a subset of the string intext till index position
    
    document.querySelector('.typing').textContent=letter;
    if(letter.length===currentText.length){
        count++;    //change pointer to the next element in text array
        index=0;    //reset index to first letter of the next word
    }
    setTimeout(type,400); //calls after 400ms/
};

/* 
const t1=gsap.timeline({defaults:{ease: "power1.out"}})

t1.to('.name2',{x:"0%",duration:1},"-=1")
 t1.to('.typing',{x:"0%",duration:1},"-=1") 
 t1.fromTo('.hello',{opacity:0},{opacity:1,duration:1})  
 t1.fromTo('header',{opacity:0},{opacity:1,duration:1}); */

tl.to(".text", { y: "0%", duration: 0.2});
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.1 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");



   anime.timeline({loop:1})
   .add({
     targets: '.ml8 .circle-white',
     scale: [0, 3],
     opacity: [1, 0],
     easing: "easeInOutExpo",
     rotateZ: 360,
     duration: 1100
   }).add({
     targets: '.ml8 .circle-container',
     scale: [0, 1],
     duration: 1100,
     easing: "easeInOutExpo",
     offset: '-=1000'
   }).add({
     targets: '.ml8 .circle-dark',
     scale: [0, 1],
     duration: 1100,
     easing: "easeOutExpo",
     offset: '-=600'
   }).add({
     targets: '.ml8 .letters-left',
     scale: [0, 1],
     duration: 1200,
     offset: '-=550'
   }).add({
     targets: '.ml8 .bang',
     scale: [0, 1],
     rotateZ: [45, 15],
     duration: 1200,
     offset: '-=1000'
   });
 
 anime({
   targets: '.ml8 .circle-dark-dashed',
   rotateZ: 360,
   duration: 8000,
   easing: "linear",
   loop: true
 });

  // Wrap every letter in a span
  var textWrapper = document.querySelector('.readJournal .letters2');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  
  anime.timeline({loop: true})
    .add({
      targets: '.readJournal .letter',
      scale: [0, 1],
      duration: 1500,
      elasticity: 600,
      delay: (el, i) => 45 * (i+1)
    }).add({
      targets: '.readJournal',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });


    tl.fromTo(".name2", { opacity: 0 }, { opacity: 1, duration: 1.5,delay: 4  });
    tl.fromTo(".typing", { opacity: 0 }, { opacity: 1, duration: 1.5,  });
    tl.fromTo("header", { opacity: 0 }, { opacity: 1, duration: 1  },);
 
    setTimeout(type,7000);

    // Define the text to be typed out


// Define the typing function to type out the words in the 'text' array
function type() {
  // Check if all words in 'text' have been typed out, and reset the count if so
  if (count === text.length) {
    count = 0;
  }

  // Get the current word being typed and the subset of letters to be typed next
  currentText = text[count];
  letter = currentText.slice(0, index++);

  // Update the text content with the next subset of letters
  document.querySelector(".typing").textContent = letter;

  // Check if the entire word has been typed out, and move to the next word if so
  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }

  // Set a timeout to call the 'type' function again after 400ms
  setTimeout(type, 400);
}

// Create a GSAP timeline for animating elements on the webpage

// Add animation steps to the timeline
tl.to(".text", { y: "0%", duration: 0.2 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.1 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo(".name2", { opacity: 0 }, { opacity: 1, duration: 1.5, delay: 4 });
tl.fromTo(".typing", { opacity: 0 }, { opacity: 1, duration: 1.5 });
tl.fromTo("header", { opacity: 0 }, { opacity: 1, duration: 1 });

function A(a, b) {
        var c,
          d = this.children.length;
        for (c = 0; d > c; c++) {
          a.apply(this.children[c], b);
        }
        return this;
      }
      b.init = function (b) {
        if (this.$el = a(b), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, U.keepInherited && !U.fallback) {
          var c = W(this.el, "transition");
          c && !z.test(c) && (this.upstream = c);
        }
        G.backface && U.hideBackface && V(this.el, G.backface.css, "hidden");
      }, y("add", d), y("start", e), y("wait", f), y("then", g), y("next", h), y("stop", l), y("set", m), y("show", n), y("hide", o), y("redraw", p), y("destroy", r);

    M = l(L, function (b) {
      function c(b, c) {
        var d = a.data(b, q) || a.data(b, q, new L.Bare());
        return d.el || d.init(b), c ? d.start(c) : d;
      }
      b.init = function (b, d) {
        var e = a(b);
        if (!e.length) return this;
        if (1 === e.length) return c(e[0], d);
        var f = [];
        return e.each(function (a, b) {
          f.push(c(b, d));
        }), this.children = f, this;
      };
    }),
    N = l(function (a) {
      function b() {
        var a = this.get();
        this.update("auto");
        var b = this.get();
        return this.update(a), b;
      }
      function c(a, b, c) {
        return void 0 !== b && (c = b), a in m ? a : c;
      }
      function d(a) {
        var b = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(a);
        return (b ? e(b[1], b[2], b[3]) : a).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3");
      }
      var f = {
        duration: 500,
        ease: "ease",
        delay: 0
      };
      a.init = function (a, b, d, e) {
        this.$el = a, this.el = a[0];
        var g = b[0];
        d[2] && (g = d[2]), X[g] && (g = X[g]), this.name = g, this.type = d[1], this.duration = i(b[1], this.duration, f.duration), this.ease = c(b[2], this.ease, f.ease), this.delay = i(b[3], this.delay, f.delay), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = A.test(this.name), this.unit = e.unit || this.unit || U.defaultUnit, this.angle = e.angle || this.angle || U.defaultAngle, U.fallback || e.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + B + this.duration + "ms" + ("ease" != this.ease ? B + m[this.ease][0] : "") + (this.delay ? B + this.delay + "ms" : ""));
      }, a.set = function (a) {
        a = this.convert(a, this.type), this.update(a), this.redraw();
      }, a.transition = function (a) {
        this.active = !0, a = this.convert(a, this.type), this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()), this.redraw()), "auto" == a && (a = b.call(this))), this.nextStyle = a;
      }, a.fallback = function (a) {
        var c = this.el.style[this.name] || this.convert(this.get(), this.type);
        a = this.convert(a, this.type), this.auto && ("auto" == c && (c = this.convert(this.get(), this.type)), "auto" == a && (a = b.call(this))), this.tween = new R({
          from: c,
          to: a,
          duration: this.duration,
          delay: this.delay,
          ease: this.ease,
          update: this.update,
          context: this
        });
      }, a.get = function () {
        return W(this.el, this.name);
      }, a.update = function (a) {
        V(this.el, this.name, a);
      }, a.stop = function () {
        (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, V(this.el, this.name, this.get()));
        var a = this.tween;
        a && a.context && a.destroy();
      }, a.convert = function (a, b) {
        if ("auto" == a && this.auto) return a;
        var c,
          e = "number" == typeof a,
          f = "string" == typeof a;
        switch (b) {
          case t:
            if (e) return a;
            if (f && "" === a.replace(r, "")) return +a;
            c = "number(unitless)";
            break;
          case u:
            if (f) {
              if ("" === a && this.original) return this.original;
              if (b.test(a)) return "#" == a.charAt(0) && 7 == a.length ? a : d(a);
            }
            c = "hex or rgb string";
            break;
          case v:
            if (e) return a + this.unit;
            if (f && b.test(a)) return a;
            c = "number(px) or string(unit)";
            break;
          case w:
            if (e) return a + this.unit;
            if (f && b.test(a)) return a;
            c = "number(px) or string(unit or %)";
            break;
          case x:
            if (e) return a + this.angle;
            if (f && b.test(a)) return a;
            c = "number(deg) or string(angle)";
            break;
          case y:
            if (e) return a;
            if (f && w.test(a)) return a;
            c = "number(unitless) or string(unit or %)";
        }
        return g(c, a), a;
      }, a.redraw = function () {
        this.el.offsetHeight;
      };
    }),
    O = l(N, function (a, b) {
      a.init = function () {
        b.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), u));
      };
    }),
    P = l(N, function (a, b) {
      a.init = function () {
        b.init.apply(this, arguments), this.animate = this.fallback;
      }, a.get = function () {
        return this.$el[this.name]();
      }, a.update = function (a) {
        this.$el[this.name](a);
      };
    }),
    Q = l(N, function (a, b) {
      function c(a, b) {
        var c, d, e, f, g;
        for (c in a) {
          f = Z[c], e = f[0], d = f[1] || c, g = this.convert(a[c], e), b.call(this, d, g, e);
        }
      }
      a.init = function () {
        b.init.apply(this, arguments), this.current || (this.current = {}, Z.perspective && U.perspective && (this.current.perspective = U.perspective, V(this.el, this.name, this.style(this.current)), this.redraw()));
      }, a.set = function (a) {
        c.call(this, a, function (a, b) {
          this.current[a] = b;
        }), V(this.el, this.name, this.style(this.current)), this.redraw();
      }, a.transition = function (a) {
        var b = this.values(a);
        this.tween = new T({
          current: this.current,
          values: b,
          duration: this.duration,
          delay: this.delay,
          ease: this.ease
        });
        var c,
          d = {};
        for (c in this.current) {
          d[c] = c in b ? b[c] : this.current[c];
        }
        this.active = !0, this.nextStyle = this.style(d);
      }, a.fallback = function (a) {
        var b = this.values(a);
        this.tween = new T({
          current: this.current,
          values: b,
          duration: this.duration,
          delay: this.delay,
          ease: this.ease,
          update: this.update,
          context: this
        });
      }, a.update = function () {
        V(this.el, this.name, this.style(this.current));
      }, a.style = function (a) {
        var b,
          c = "";
        for (b in a) {
          c += b + "(" + a[b] + ") ";
        }
        return c;
      }, a.values = function (a) {
        var b,
          d = {};
        return c.call(this, a, function (a, c, e) {
          d[a] = c, void 0 === this.current[a] && (b = 0, ~a.indexOf("scale") && (b = 1), this.current[a] = this.convert(b, e));
        }), d;
      };
    }),
    R = l(function (b) {
      function c(a) {
        1 === n.push(a) && J(g);
      }
      function g() {
        var a,
          b,
          c,
          d = n.length;
        if (d) for (J(g), b = K(), a = d; a--;) {
          c = n[a], c && c.render(b);
        }
      }
      function i(b) {
        var c,
          d = a.inArray(b, n);
        d >= 0 && (c = n.slice(d + 1), n.length = d, c.length && (n = n.concat(c)));
      }
      function j(a) {
        return Math.round(a * o) / o;
      }
      function k(a, b, c) {
        return e(a[0] + c * (b[0] - a[0]), a[1] + c * (b[1] - a[1]), a[2] + c * (b[2] - a[2]));
      }
      var l = {
        ease: m.ease[1],
        from: 0,
        to: 1
      };
      b.init = function (a) {
        this.duration = a.duration || 0, this.delay = a.delay || 0;
        var b = a.ease || l.ease;
        m[b] && (b = m[b][1]), "function" != typeof b && (b = l.ease), this.ease = b, this.update = a.update || f, this.complete = a.complete || f, this.context = a.context || this, this.name = a.name;
        var c = a.from,
          d = a.to;
        void 0 === c && (c = l.from), void 0 === d && (d = l.to), this.unit = a.unit || "", "number" == typeof c && "number" == typeof d ? (this.begin = c, this.change = d - c) : this.format(d, c), this.value = this.begin + this.unit, this.start = K(), a.autoplay !== !1 && this.play();
      }, b.play = function () {
        this.active || (this.start || (this.start = K()), this.active = !0, c(this));
      }, b.stop = function () {
        this.active && (this.active = !1, i(this));
      }, b.render = function (a) {
        var b,
          c = a - this.start;
        if (this.delay) {
          if (c <= this.delay) return;
          c -= this.delay;
        }
        if (c < this.duration) {
          var d = this.ease(c, 0, 1, this.duration);
          return b = this.startRGB ? k(this.startRGB, this.endRGB, d) : j(this.begin + d * this.change), this.value = b + this.unit, void this.update.call(this.context, this.value);
        }
        b = this.endHex || this.begin + this.change, this.value = b + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy();
      }, b.format = function (a, b) {
        if (b += "", a += "", "#" == a.charAt(0)) return this.startRGB = d(b), this.endRGB = d(a), this.endHex = a, this.begin = 0, void (this.change = 1);
        if (!this.unit) {
          var c = b.replace(r, ""),
            e = a.replace(r, "");
          c !== e && h("tween", b, a), this.unit = c;
        }
        b = parseFloat(b), a = parseFloat(a), this.begin = this.value = b, this.change = a - b;
      }, b.destroy = function () {
        this.stop(), this.context = null, this.ease = this.update = this.complete = f;
      };
      var n = [],
        o = 1e3;
    }),
    S = l(R, function (a) {
      a.init = function (a) {
        this.duration = a.duration || 0, this.complete = a.complete || f, this.context = a.context, this.play();
      }, a.render = function (a) {
        var b = a - this.start;
        b < this.duration || (this.complete.call(this.context), this.destroy());
      };
    }),
    T = l(R, function (a, b) {
      a.init = function (a) {
        this.context = a.context, this.update = a.update, this.tweens = [], this.current = a.current;
        var b, c;
        for (b in a.values) {
          c = a.values[b], this.current[b] !== c && this.tweens.push(new R({
            name: b,
            from: this.current[b],
            to: c,
            duration: a.duration,
            delay: a.delay,
            ease: a.ease,
            autoplay: !1
          }));
        }
        this.play();
      }, a.render = function (a) {
        var b,
          c,
          d = this.tweens.length,
          e = !1;
        for (b = d; b--;) {
          c = this.tweens[b], c.context && (c.render(a), this.current[c.name] = c.value, e = !0);
        }
        return e ? void (this.update && this.update.call(this.context)) : this.destroy();
      }, a.destroy = function () {
        if (b.destroy.call(this), this.tweens) {
          var a,
            c = this.tweens.length;
          for (a = c; a--;) {
            this.tweens[a].destroy();
          }
          this.tweens = null, this.current = null;
        }
      };
    }),
    U = b.config = {
      debug: !1,
      defaultUnit: "px",
      defaultAngle: "deg",
      keepInherited: !1,
      hideBackface: !1,
      perspective: "",
      fallback: !G.transition,
      agentTests: []
    };
  b.fallback = function (a) {
    if (!G.transition) return U.fallback = !0;
    U.agentTests.push("(" + a + ")");
    var b = new RegExp(U.agentTests.join("|"), "i");
    U.fallback = b.test(navigator.userAgent);
  }, b.fallback("6.0.[2-5] Safari"), b.tween = function (a) {
    return new R(a);
  }, b.delay = function (a, b, c) {
    return new S({
      complete: b,
      duration: a,
      context: c
    });
  }, a.fn.tram = function (a) {
    return b.call(null, this, a);
  };
  var V = a.style,
    W = a.css,
    X = {
      transform: G.transform && G.transform.css
    },
    Y = {
      color: [O, u],
      background: [O, u, "background-color"],
      "outline-color": [O, u],
      "border-color": [O, u],
      "border-top-color": [O, u],
      "border-right-color": [O, u],
      "border-bottom-color": [O, u],
      "border-left-color": [O, u],
      "border-width": [N, v],
      "border-top-width": [N, v],
      "border-right-width": [N, v],
      "border-bottom-width": [N, v],
      "border-left-width": [N, v],
      "border-spacing": [N, v],
      "letter-spacing": [N, v],
      margin: [N, v],
      "margin-top": [N, v],
      "margin-right": [N, v],
      "margin-bottom": [N, v],
      "margin-left": [N, v],
      padding: [N, v],
      "padding-top": [N, v],
      "padding-right": [N, v],
      "padding-bottom": [N, v],
      "padding-left": [N, v],
      "outline-width": [N, v],
      opacity: [N, t],
      top: [N, w],
      right: [N, w],
      bottom: [N, w],
      left: [N, w],
      "font-size": [N, w],
      "text-indent": [N, w],
      "word-spacing": [N, w],
      width: [N, w],
      "min-width": [N, w],
      "max-width": [N, w],
      height: [N, w],
      "min-height": [N, w],
      "max-height": [N, w],
      "line-height": [N, y],
      "scroll-top": [P, t, "scrollTop"],
      "scroll-left": [P, t, "scrollLeft"]
    },
    Z = {};
  G.transform && (Y.transform = [Q], Z = {
    x: [w, "translateX"],
    y: [w, "translateY"],
    rotate: [x],
    rotateX: [x],
    rotateY: [x],
    scale: [t],
    scaleX: [t],
    scaleY: [t],
    skew: [x],
    skewX: [x],
    skewY: [x]
  }), G.transform && G.backface && (Z.z = [w, "translateZ"], Z.rotateZ = [x], Z.scaleZ = [t], Z.perspective = [v]);
  var $ = /ms/,
    _ = /s|\./;
  return a.tram = b;
(window.jQuery);

// Use Anime.js to create animations for the 'readJournal' section of the webpage
// First, wrap every letter in a span element
const textWrapper = document.querySelector(".readJournal .letters2");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

/*
// VARIABLES

const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    burger.addEventListener("click", () => {
        // Toggle Nav
        nav.classList.toggle("nav-active");

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle("toggle");
    });
};

navSlide();

const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
});

sr.reveal(".home-header", {});
sr.reveal(".home-scroll", { delay: 200 });
sr.reveal(".home-img", { delay: 400 });
sr.reveal(".home-social-link", { interval: 200 });

sr.reveal(".about-img", {});
sr.reveal(".about-subtitle", { delay: 400 });
sr.reveal(".about-text", { delay: 400 });

sr.reveal(".skills-subtitle", {});
sr.reveal(".skills-text", {});
sr.reveal(".skills-data", { interval: 200 });
sr.reveal(".skills-img", { delay: 600 });

      {
        return renderTransform(element, refState, actionState, actionItem, elementApi);
      }
    case RENDER_STYLE:
      {
        return renderStyle(element, refState, actionState, actionItem, styleProp, elementApi);
      }
    case RENDER_GENERAL:
      {
        return renderGeneral(element, actionItem, elementApi);
      }
    case RENDER_PLUGIN:
      {
        var actionTypeId = actionItem.actionTypeId;
        if ((0, _IX2VanillaPlugins.isPluginType)(actionTypeId)) {
          // $FlowFixMe
          return (0, _IX2VanillaPlugins.renderPlugin)(actionTypeId)(pluginInstance, refState, actionItem);
        }
      }
  }
}

  // Set transform-style: preserve-3d
  if (hasDefined3dTransform(actionItem, actionState)) {
    setStyle(element, _IX2BrowserSupport.TRANSFORM_STYLE_PREFIXED, PRESERVE_3D);
  }
}
function renderFilter(element, actionState, actionItemConfig, elementApi) {
  var filterValue = (0, _reduce["default"])(actionState, function (result, value, type) {
    return "".concat(result, " ").concat(type, "(").concat(value).concat(getFilterUnit(type, actionItemConfig), ")");
  }, '');
  var setStyle = elementApi.setStyle;
  addWillChange(element, FILTER, elementApi);
  setStyle(element, FILTER, filterValue);
}
function renderFontVariation(element, actionState, actionItemConfig, elementApi) {
  var fontVariationValue = (0, _reduce["default"])(actionState, function (result, value, type) {
    result.push("\"".concat(type, "\" ").concat(value));
    return result;
  }, []).join(', ');
  var setStyle = elementApi.setStyle;
  addWillChange(element, FONT_VARIATION_SETTINGS, elementApi);
  setStyle(element, FONT_VARIATION_SETTINGS, fontVariationValue);
}
;
}

*/

// Define an Anime.js timeline for the letter animations
anime.timeline({ loop: true })
  .add({
    targets: ".readJournal .letter",
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i + 1)
  })
  .add({
    targets: ".readJournal",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

// Call the 'type' function after 7 seconds to start typing out the words
setTimeout(type, 7000);

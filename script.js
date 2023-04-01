
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

// Use Anime.js to create animations for the 'readJournal' section of the webpage
// First, wrap every letter in a span element
const textWrapper = document.querySelector(".readJournal .letters2");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

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

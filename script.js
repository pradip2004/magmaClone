function loco() {
      gsap.registerPlugin(ScrollTrigger);

      const locoScroll = new LocomotiveScroll({
            el: document.querySelector("#main"),
            smooth: true
      });

      locoScroll.on("scroll", ScrollTrigger.update);


      ScrollTrigger.scrollerProxy("#main", {
            scrollTop(value) {
                  return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
            },
            getBoundingClientRect() {
                  return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
            },

            pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
      });

      ScrollTrigger.addEventListener("refresh", () => locoScroll.update());


      ScrollTrigger.refresh();
}
loco()

let clutter = "";

const page2Text = document.querySelector("#page2>h1")
page2Text.textContent.split(" ").forEach((e) => {
      clutter += `<span> ${e} </span>`
      document.querySelector("#page2>h1").innerHTML = clutter;
})

gsap.to("#page2>h1>span", {
      scrollTrigger: {
            trigger: `#page2>h1>span`,
            start: `top 90%`,
            end: `bottom top`,
            scroller: `#main`,
            scrub: .5,
            markers: false
      },
      stagger: .2,
      color: `#fff`
})

function canvas() {
      const canvas = document.querySelector("#page3>canvas");
      const context = canvas.getContext("2d");

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;


      window.addEventListener("resize", function () {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            render();
      });

      function files(index) {
            var data = `
    ./img/frames00007.png
    ./img/frames00010.png
    ./img/frames00013.png
    ./img/frames00016.png
    ./img/frames00019.png
    ./img/frames00022.png
    ./img/frames00025.png
    ./img/frames00028.png
    ./img/frames00031.png
    ./img/frames00034.png
    ./img/frames00037.png
    ./img/frames00040.png
    ./img/frames00043.png
    ./img/frames00046.png
    ./img/frames00049.png
    ./img/frames00052.png
    ./img/frames00055.png
    ./img/frames00058.png
    ./img/frames00061.png
    ./img/frames00064.png
    ./img/frames00067.png
    ./img/frames00070.png
    ./img/frames00073.png
    ./img/frames00076.png
    ./img/frames00079.png
    ./img/frames00082.png
    ./img/frames00085.png
    ./img/frames00088.png
    ./img/frames00091.png
    ./img/frames00094.png
    ./img/frames00097.png
    ./img/frames00100.png
    ./img/frames00103.png
    ./img/frames00106.png
    ./img/frames00109.png
    ./img/frames00112.png
    ./img/frames00115.png
    ./img/frames00118.png
    ./img/frames00121.png
    ./img/frames00124.png
    ./img/frames00127.png
    ./img/frames00130.png
    ./img/frames00133.png
    ./img/frames00136.png
    ./img/frames00139.png
    ./img/frames00142.png
    ./img/frames00145.png
    ./img/frames00148.png
    ./img/frames00151.png
    ./img/frames00154.png
    ./img/frames00157.png
    ./img/frames00160.png
    ./img/frames00163.png
    ./img/frames00166.png
    ./img/frames00169.png
    ./img/frames00172.png
    ./img/frames00175.png
    ./img/frames00178.png
    ./img/frames00181.png
    ./img/frames00184.png
    ./img/frames00187.png
    ./img/frames00190.png
    ./img/frames00193.png
    ./img/frames00196.png
    ./img/frames00199.png
    ./img/frames00202.png
   `;
            return data.split("\n")[index];
      }

      const frameCount = 67;

      const images = [];
      const imageSeq = {
            frame: 1,
      };

      for (let i = 0; i < frameCount; i++) {
            const img = new Image();
            img.src = files(i);
            images.push(img);
      }

      gsap.to(imageSeq, {
            frame: frameCount - 1,
            snap: "frame",
            ease: `none`,
            scrollTrigger: {
                  scrub: .5,
                  trigger: `#page3`,
                  start: `top top`,
                  end: `250% top`,
                  scroller: `#main`,
            },
            onUpdate: render,
      });

      images[1].onload = render;

      function render() {
            scaleImage(images[imageSeq.frame], context);
      }

      function scaleImage(img, ctx) {
            var canvas = ctx.canvas;
            var hRatio = canvas.width / img.width;
            var vRatio = canvas.height / img.height;
            var ratio = Math.max(hRatio, vRatio);
            var centerShift_x = (canvas.width - img.width * ratio) / 2;
            var centerShift_y = (canvas.height - img.height * ratio) / 2;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(
                  img,
                  0,
                  0,
                  img.width,
                  img.height,
                  centerShift_x,
                  centerShift_y,
                  img.width * ratio,
                  img.height * ratio
            );
      }
      ScrollTrigger.create({

            trigger: "#page3",
            pin: true,
            scroller: `#main`,
            start: `top top`,
            end: `250% top`,
      });
}
canvas()


var clutter1 = "";

document.querySelector("#page4>h1").textContent.split("").forEach(function (dets) {
      clutter1 += `<span>${dets}</span>`

      document.querySelector("#page4>h1").innerHTML = clutter1;
})

gsap.to("#page4>h1>span", {
      scrollTrigger: {
            trigger: `#page4>h1>span`,
            start: `top bottom`,
            end: `bottom top`,
            scroller: `#main`,
            scrub: .5,
      },
      stagger: .2,
      color: `#fff`
})


function canvas1() {
      const canvas = document.querySelector("#page5>canvas");
      const context = canvas.getContext("2d");

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;


      window.addEventListener("resize", function () {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            render();
      });

      function files(index) {
            var data = `
    ./img/bridges00004.png
    ./img/bridges00007.png
    ./img/bridges00010.png
    ./img/bridges00013.png
    ./img/bridges00016.png
    ./img/bridges00019.png
    ./img/bridges00022.png
    ./img/bridges00025.png
    ./img/bridges00028.png
    ./img/bridges00031.png
    ./img/bridges00034.png
    ./img/bridges00037.png
    ./img/bridges00040.png
    ./img/bridges00043.png
    ./img/bridges00046.png
    ./img/bridges00049.png
    ./img/bridges00052.png
    ./img/bridges00055.png
    ./img/bridges00058.png
    ./img/bridges00061.png
    ./img/bridges00064.png
    ./img/bridges00067.png
    ./img/bridges00070.png
    ./img/bridges00073.png
    ./img/bridges00076.png
    ./img/bridges00079.png
    ./img/bridges00082.png
    ./img/bridges00085.png
    ./img/bridges00088.png
    ./img/bridges00091.png
    ./img/bridges00094.png
    ./img/bridges00097.png
    ./img/bridges00100.png
    ./img/bridges00103.png
    ./img/bridges00106.png
    ./img/bridges00109.png
    ./img/bridges00112.png
    ./img/bridges00115.png
    ./img/bridges00118.png
    ./img/bridges00121.png
    ./img/bridges00124.png
    ./img/bridges00127.png
    ./img/bridges00130.png
    ./img/bridges00133.png
    ./img/bridges00136.png
    ./img/bridges00139.png
    ./img/bridges00142.png
    ./img/bridges00145.png
    ./img/bridges00148.png
    ./img/bridges00151.png
    ./img/bridges00154.png
    ./img/bridges00157.png
    ./img/bridges00160.png
    ./img/bridges00163.png
    ./img/bridges00166.png
    ./img/bridges00169.png
    ./img/bridges00172.png
    ./img/bridges00175.png
    ./img/bridges00178.png
    ./img/bridges00181.png
    ./img/bridges00184.png
    ./img/bridges00187.png
    ./img/bridges00190.png
    ./img/bridges00193.png
    ./img/bridges00196.png
    ./img/bridges00199.png
    ./img/bridges00202.png
    `;
            return data.split("\n")[index];
      }

      const frameCount = 67;

      const images = [];
      const imageSeq = {
            frame: 1,
      };

      for (let i = 0; i < frameCount; i++) {
            const img = new Image();
            img.src = files(i);
            images.push(img);
      }

      gsap.to(imageSeq, {
            frame: frameCount - 1,
            snap: "frame",
            ease: `none`,
            scrollTrigger: {
                  scrub: .5,
                  trigger: `#page5`,
                  start: `top top`,
                  end: `250% top`,
                  scroller: `#main`,
            },
            onUpdate: render,
      });

      images[1].onload = render;

      function render() {
            scaleImage(images[imageSeq.frame], context);
      }

      function scaleImage(img, ctx) {
            var canvas = ctx.canvas;
            var hRatio = canvas.width / img.width;
            var vRatio = canvas.height / img.height;
            var ratio = Math.max(hRatio, vRatio);
            var centerShift_x = (canvas.width - img.width * ratio) / 2;
            var centerShift_y = (canvas.height - img.height * ratio) / 2;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(
                  img,
                  0,
                  0,
                  img.width,
                  img.height,
                  centerShift_x,
                  centerShift_y,
                  img.width * ratio,
                  img.height * ratio
            );
      }
      ScrollTrigger.create({

            trigger: "#page5",
            pin: true,
            scroller: `#main`,
            start: `top top`,
            end: `250% top`,
      });
}
canvas1()


var clutter2 = "";

document.querySelector("#page6>h1").textContent.split("").forEach(function (dets) {
      clutter2 += `<span>${dets}</span>`

      document.querySelector("#page6>h1").innerHTML = clutter2;
})

gsap.to("#page6>h1>span", {
      scrollTrigger: {
            trigger: `#page6>h1>span`,
            start: `top bottom`,
            end: `bottom top`,
            scroller: `#main`,
            scrub: .5,
      },
      stagger: .2,
      color: `#fff`
})


function canvas2() {
      const canvas = document.querySelector("#page7>canvas");
      const context = canvas.getContext("2d");

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;


      window.addEventListener("resize", function () {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            render();
      });
/* 
      function files(index) {
            var data = `
    
    https://thisismagma.com/assets/home/lore/seq/1.webp?2
    https://thisismagma.com/assets/home/lore/seq/2.webp?2
    https://thisismagma.com/assets/home/lore/seq/3.webp?2
    https://thisismagma.com/assets/home/lore/seq/4.webp?2
    https://thisismagma.com/assets/home/lore/seq/5.webp?2
    https://thisismagma.com/assets/home/lore/seq/6.webp?2
    https://thisismagma.com/assets/home/lore/seq/7.webp?2
    https://thisismagma.com/assets/home/lore/seq/8.webp?2
    https://thisismagma.com/assets/home/lore/seq/9.webp?2
    https://thisismagma.com/assets/home/lore/seq/10.webp?2
    https://thisismagma.com/assets/home/lore/seq/11.webp?2
    https://thisismagma.com/assets/home/lore/seq/12.webp?2
    https://thisismagma.com/assets/home/lore/seq/13.webp?2
    https://thisismagma.com/assets/home/lore/seq/14.webp?2
    https://thisismagma.com/assets/home/lore/seq/15.webp?2
    https://thisismagma.com/assets/home/lore/seq/16.webp?2
    https://thisismagma.com/assets/home/lore/seq/17.webp?2
    https://thisismagma.com/assets/home/lore/seq/18.webp?2
    https://thisismagma.com/assets/home/lore/seq/19.webp?2
    https://thisismagma.com/assets/home/lore/seq/20.webp?2
    https://thisismagma.com/assets/home/lore/seq/21.webp?2
    https://thisismagma.com/assets/home/lore/seq/22.webp?2
    https://thisismagma.com/assets/home/lore/seq/23.webp?2
    https://thisismagma.com/assets/home/lore/seq/24.webp?2
    https://thisismagma.com/assets/home/lore/seq/25.webp?2
    https://thisismagma.com/assets/home/lore/seq/26.webp?2
    https://thisismagma.com/assets/home/lore/seq/27.webp?2
    https://thisismagma.com/assets/home/lore/seq/28.webp?2
    https://thisismagma.com/assets/home/lore/seq/29.webp?2
    https://thisismagma.com/assets/home/lore/seq/30.webp?2
    https://thisismagma.com/assets/home/lore/seq/31.webp?2
    https://thisismagma.com/assets/home/lore/seq/32.webp?2
    https://thisismagma.com/assets/home/lore/seq/33.webp?2
    https://thisismagma.com/assets/home/lore/seq/34.webp?2
    https://thisismagma.com/assets/home/lore/seq/35.webp?2
    https://thisismagma.com/assets/home/lore/seq/36.webp?2
    https://thisismagma.com/assets/home/lore/seq/37.webp?2
    https://thisismagma.com/assets/home/lore/seq/38.webp?2
    https://thisismagma.com/assets/home/lore/seq/39.webp?2
    https://thisismagma.com/assets/home/lore/seq/40.webp?2
    https://thisismagma.com/assets/home/lore/seq/41.webp?2
    https://thisismagma.com/assets/home/lore/seq/42.webp?2
    https://thisismagma.com/assets/home/lore/seq/43.webp?2
    https://thisismagma.com/assets/home/lore/seq/44.webp?2
    https://thisismagma.com/assets/home/lore/seq/45.webp?2
    https://thisismagma.com/assets/home/lore/seq/46.webp?2
    https://thisismagma.com/assets/home/lore/seq/47.webp?2
    https://thisismagma.com/assets/home/lore/seq/48.webp?2
    https://thisismagma.com/assets/home/lore/seq/49.webp?2
    https://thisismagma.com/assets/home/lore/seq/50.webp?2
    https://thisismagma.com/assets/home/lore/seq/51.webp?2
    https://thisismagma.com/assets/home/lore/seq/52.webp?2
    https://thisismagma.com/assets/home/lore/seq/53.webp?2
    https://thisismagma.com/assets/home/lore/seq/54.webp?2
    https://thisismagma.com/assets/home/lore/seq/55.webp?2
    https://thisismagma.com/assets/home/lore/seq/56.webp?2
    https://thisismagma.com/assets/home/lore/seq/57.webp?2
    https://thisismagma.com/assets/home/lore/seq/58.webp?2
    https://thisismagma.com/assets/home/lore/seq/59.webp?2
    https://thisismagma.com/assets/home/lore/seq/60.webp?2
    https://thisismagma.com/assets/home/lore/seq/61.webp?2
    https://thisismagma.com/assets/home/lore/seq/62.webp?2
    https://thisismagma.com/assets/home/lore/seq/63.webp?2
    https://thisismagma.com/assets/home/lore/seq/64.webp?2
    https://thisismagma.com/assets/home/lore/seq/65.webp?2
    https://thisismagma.com/assets/home/lore/seq/66.webp?2
    https://thisismagma.com/assets/home/lore/seq/67.webp?2
    https://thisismagma.com/assets/home/lore/seq/68.webp?2
    https://thisismagma.com/assets/home/lore/seq/69.webp?2
    https://thisismagma.com/assets/home/lore/seq/70.webp?2
    https://thisismagma.com/assets/home/lore/seq/71.webp?2
    https://thisismagma.com/assets/home/lore/seq/72.webp?2
    https://thisismagma.com/assets/home/lore/seq/73.webp?2
    https://thisismagma.com/assets/home/lore/seq/74.webp?2
    https://thisismagma.com/assets/home/lore/seq/75.webp?2
    https://thisismagma.com/assets/home/lore/seq/76.webp?2
    https://thisismagma.com/assets/home/lore/seq/77.webp?2
    https://thisismagma.com/assets/home/lore/seq/78.webp?2
    https://thisismagma.com/assets/home/lore/seq/79.webp?2
    https://thisismagma.com/assets/home/lore/seq/80.webp?2
    https://thisismagma.com/assets/home/lore/seq/81.webp?2
    https://thisismagma.com/assets/home/lore/seq/82.webp?2
    https://thisismagma.com/assets/home/lore/seq/83.webp?2
    https://thisismagma.com/assets/home/lore/seq/84.webp?2
    https://thisismagma.com/assets/home/lore/seq/85.webp?2
    https://thisismagma.com/assets/home/lore/seq/86.webp?2
    https://thisismagma.com/assets/home/lore/seq/87.webp?2
    https://thisismagma.com/assets/home/lore/seq/88.webp?2
    https://thisismagma.com/assets/home/lore/seq/89.webp?2
    https://thisismagma.com/assets/home/lore/seq/90.webp?2
    https://thisismagma.com/assets/home/lore/seq/91.webp?2
    https://thisismagma.com/assets/home/lore/seq/92.webp?2
    https://thisismagma.com/assets/home/lore/seq/93.webp?2
    https://thisismagma.com/assets/home/lore/seq/94.webp?2
    https://thisismagma.com/assets/home/lore/seq/95.webp?2
    https://thisismagma.com/assets/home/lore/seq/96.webp?2
    https://thisismagma.com/assets/home/lore/seq/97.webp?2
    https://thisismagma.com/assets/home/lore/seq/98.webp?2
    https://thisismagma.com/assets/home/lore/seq/99.webp?2
    https://thisismagma.com/assets/home/lore/seq/100.webp?2
    https://thisismagma.com/assets/home/lore/seq/101.webp?2
    https://thisismagma.com/assets/home/lore/seq/102.webp?2
    https://thisismagma.com/assets/home/lore/seq/103.webp?2
    https://thisismagma.com/assets/home/lore/seq/104.webp?2
    https://thisismagma.com/assets/home/lore/seq/105.webp?2
    https://thisismagma.com/assets/home/lore/seq/106.webp?2
    https://thisismagma.com/assets/home/lore/seq/107.webp?2
    https://thisismagma.com/assets/home/lore/seq/108.webp?2
    https://thisismagma.com/assets/home/lore/seq/109.webp?2
    https://thisismagma.com/assets/home/lore/seq/110.webp?2
    https://thisismagma.com/assets/home/lore/seq/111.webp?2
    https://thisismagma.com/assets/home/lore/seq/112.webp?2
    https://thisismagma.com/assets/home/lore/seq/113.webp?2
    https://thisismagma.com/assets/home/lore/seq/114.webp?2
    https://thisismagma.com/assets/home/lore/seq/115.webp?2
    https://thisismagma.com/assets/home/lore/seq/116.webp?2
    https://thisismagma.com/assets/home/lore/seq/117.webp?2
    https://thisismagma.com/assets/home/lore/seq/118.webp?2
    https://thisismagma.com/assets/home/lore/seq/119.webp?2
    https://thisismagma.com/assets/home/lore/seq/120.webp?2
    https://thisismagma.com/assets/home/lore/seq/121.webp?2
    https://thisismagma.com/assets/home/lore/seq/122.webp?2
    https://thisismagma.com/assets/home/lore/seq/123.webp?2
    https://thisismagma.com/assets/home/lore/seq/124.webp?2
    https://thisismagma.com/assets/home/lore/seq/125.webp?2
    https://thisismagma.com/assets/home/lore/seq/126.webp?2
    https://thisismagma.com/assets/home/lore/seq/127.webp?2
    https://thisismagma.com/assets/home/lore/seq/128.webp?2
    https://thisismagma.com/assets/home/lore/seq/129.webp?2
    https://thisismagma.com/assets/home/lore/seq/130.webp?2
    https://thisismagma.com/assets/home/lore/seq/131.webp?2
    https://thisismagma.com/assets/home/lore/seq/132.webp?2
    https://thisismagma.com/assets/home/lore/seq/133.webp?2
    https://thisismagma.com/assets/home/lore/seq/134.webp?2
    https://thisismagma.com/assets/home/lore/seq/135.webp?2
    https://thisismagma.com/assets/home/lore/seq/136.webp?2
    
    `;
            return data.split("\n")[index];
      }
            */
      function files(index) {
            var data = `
    ./assets/img/frames/titan-watch_000.jpg
    ./assets/img/frames/titan-watch_001.jpg
    ./assets/img/frames/titan-watch_002.jpg
    ./assets/img/frames/titan-watch_003.jpg
    ./assets/img/frames/titan-watch_004.jpg
    ./assets/img/frames/titan-watch_005.jpg
    ./assets/img/frames/titan-watch_006.jpg
    ./assets/img/frames/titan-watch_007.jpg
    ./assets/img/frames/titan-watch_008.jpg
    ./assets/img/frames/titan-watch_009.jpg
    ./assets/img/frames/titan-watch_010.jpg
    ./assets/img/frames/titan-watch_011.jpg
    ./assets/img/frames/titan-watch_012.jpg
    ./assets/img/frames/titan-watch_013.jpg
    ./assets/img/frames/titan-watch_014.jpg
    ./assets/img/frames/titan-watch_015.jpg
    ./assets/img/frames/titan-watch_016.jpg
    ./assets/img/frames/titan-watch_017.jpg
    ./assets/img/frames/titan-watch_018.jpg
    ./assets/img/frames/titan-watch_019.jpg
    ./assets/img/frames/titan-watch_020.jpg
    ./assets/img/frames/titan-watch_021.jpg
    ./assets/img/frames/titan-watch_022.jpg
    ./assets/img/frames/titan-watch_023.jpg
    ./assets/img/frames/titan-watch_024.jpg
    ./assets/img/frames/titan-watch_025.jpg
    ./assets/img/frames/titan-watch_026.jpg
    ./assets/img/frames/titan-watch_027.jpg
    ./assets/img/frames/titan-watch_028.jpg
    ./assets/img/frames/titan-watch_029.jpg
    ./assets/img/frames/titan-watch_030.jpg
    ./assets/img/frames/titan-watch_031.jpg
    ./assets/img/frames/titan-watch_032.jpg
    ./assets/img/frames/titan-watch_033.jpg
    ./assets/img/frames/titan-watch_034.jpg
    ./assets/img/frames/titan-watch_035.jpg
    ./assets/img/frames/titan-watch_036.jpg
    ./assets/img/frames/titan-watch_037.jpg
    ./assets/img/frames/titan-watch_038.jpg
    ./assets/img/frames/titan-watch_039.jpg
    ./assets/img/frames/titan-watch_040.jpg
    ./assets/img/frames/titan-watch_041.jpg
    ./assets/img/frames/titan-watch_042.jpg
    ./assets/img/frames/titan-watch_043.jpg
    ./assets/img/frames/titan-watch_044.jpg
    ./assets/img/frames/titan-watch_045.jpg
    ./assets/img/frames/titan-watch_046.jpg
    ./assets/img/frames/titan-watch_047.jpg
    ./assets/img/frames/titan-watch_048.jpg
    ./assets/img/frames/titan-watch_049.jpg
    ./assets/img/frames/titan-watch_050.jpg
    ./assets/img/frames/titan-watch_051.jpg
    ./assets/img/frames/titan-watch_052.jpg
    ./assets/img/frames/titan-watch_053.jpg
    ./assets/img/frames/titan-watch_054.jpg
    ./assets/img/frames/titan-watch_055.jpg
    ./assets/img/frames/titan-watch_056.jpg
    ./assets/img/frames/titan-watch_057.jpg
    ./assets/img/frames/titan-watch_058.jpg
    ./assets/img/frames/titan-watch_059.jpg
    ./assets/img/frames/titan-watch_060.jpg
    ./assets/img/frames/titan-watch_061.jpg
    ./assets/img/frames/titan-watch_062.jpg
    ./assets/img/frames/titan-watch_063.jpg
    ./assets/img/frames/titan-watch_064.jpg
    ./assets/img/frames/titan-watch_065.jpg
    ./assets/img/frames/titan-watch_066.jpg
    ./assets/img/frames/titan-watch_067.jpg
    ./assets/img/frames/titan-watch_068.jpg
    ./assets/img/frames/titan-watch_069.jpg
    ./assets/img/frames/titan-watch_070.jpg
    ./assets/img/frames/titan-watch_071.jpg
    ./assets/img/frames/titan-watch_072.jpg
    ./assets/img/frames/titan-watch_073.jpg
    ./assets/img/frames/titan-watch_074.jpg
    ./assets/img/frames/titan-watch_075.jpg
    ./assets/img/frames/titan-watch_076.jpg
    ./assets/img/frames/titan-watch_077.jpg
    ./assets/img/frames/titan-watch_078.jpg
    ./assets/img/frames/titan-watch_079.jpg
    ./assets/img/frames/titan-watch_080.jpg
    ./assets/img/frames/titan-watch_081.jpg
    ./assets/img/frames/titan-watch_082.jpg
    ./assets/img/frames/titan-watch_083.jpg
    ./assets/img/frames/titan-watch_084.jpg
    ./assets/img/frames/titan-watch_085.jpg
    ./assets/img/frames/titan-watch_086.jpg
    ./assets/img/frames/titan-watch_087.jpg
    ./assets/img/frames/titan-watch_088.jpg
    ./assets/img/frames/titan-watch_089.jpg
    ./assets/img/frames/titan-watch_090.jpg
    ./assets/img/frames/titan-watch_091.jpg
    ./assets/img/frames/titan-watch_092.jpg
    ./assets/img/frames/titan-watch_093.jpg
    ./assets/img/frames/titan-watch_094.jpg
    ./assets/img/frames/titan-watch_095.jpg
    ./assets/img/frames/titan-watch_096.jpg
    ./assets/img/frames/titan-watch_097.jpg
    ./assets/img/frames/titan-watch_098.jpg
    ./assets/img/frames/titan-watch_099.jpg
    ./assets/img/frames/titan-watch_100.jpg
    ./assets/img/frames/titan-watch_101.jpg
    ./assets/img/frames/titan-watch_102.jpg
    ./assets/img/frames/titan-watch_103.jpg
    ./assets/img/frames/titan-watch_104.jpg
    ./assets/img/frames/titan-watch_105.jpg
    ./assets/img/frames/titan-watch_106.jpg
    ./assets/img/frames/titan-watch_107.jpg
    ./assets/img/frames/titan-watch_108.jpg
    ./assets/img/frames/titan-watch_109.jpg
    ./assets/img/frames/titan-watch_110.jpg
    ./assets/img/frames/titan-watch_111.jpg
    ./assets/img/frames/titan-watch_112.jpg
    ./assets/img/frames/titan-watch_113.jpg
    ./assets/img/frames/titan-watch_114.jpg
    ./assets/img/frames/titan-watch_115.jpg
    ./assets/img/frames/titan-watch_116.jpg
    ./assets/img/frames/titan-watch_117.jpg
    ./assets/img/frames/titan-watch_118.jpg
    ./assets/img/frames/titan-watch_119.jpg
    ./assets/img/frames/titan-watch_120.jpg
    ./assets/img/frames/titan-watch_121.jpg
    ./assets/img/frames/titan-watch_122.jpg
    ./assets/img/frames/titan-watch_123.jpg
    ./assets/img/frames/titan-watch_124.jpg
    ./assets/img/frames/titan-watch_125.jpg
    ./assets/img/frames/titan-watch_126.jpg
    ./assets/img/frames/titan-watch_127.jpg
    ./assets/img/frames/titan-watch_128.jpg
    ./assets/img/frames/titan-watch_129.jpg
    ./assets/img/frames/titan-watch_130.jpg
    ./assets/img/frames/titan-watch_131.jpg
    ./assets/img/frames/titan-watch_132.jpg
    ./assets/img/frames/titan-watch_133.jpg
    ./assets/img/frames/titan-watch_134.jpg
    ./assets/img/frames/titan-watch_135.jpg
    ./assets/img/frames/titan-watch_136.jpg
    ./assets/img/frames/titan-watch_137.jpg
    ./assets/img/frames/titan-watch_138.jpg
    ./assets/img/frames/titan-watch_139.jpg
    ./assets/img/frames/titan-watch_140.jpg
    ./assets/img/frames/titan-watch_141.jpg
    ./assets/img/frames/titan-watch_142.jpg
    ./assets/img/frames/titan-watch_143.jpg
    ./assets/img/frames/titan-watch_144.jpg
    ./assets/img/frames/titan-watch_145.jpg
    ./assets/img/frames/titan-watch_146.jpg
    ./assets/img/frames/titan-watch_147.jpg
    ./assets/img/frames/titan-watch_148.jpg
    ./assets/img/frames/titan-watch_149.jpg
    ./assets/img/frames/titan-watch_150.jpg
    ./assets/img/frames/titan-watch_151.jpg
    ./assets/img/frames/titan-watch_152.jpg
    ./assets/img/frames/titan-watch_153.jpg
    ./assets/img/frames/titan-watch_154.jpg
    ./assets/img/frames/titan-watch_155.jpg
    ./assets/img/frames/titan-watch_156.jpg
    ./assets/img/frames/titan-watch_157.jpg
    ./assets/img/frames/titan-watch_158.jpg
    ./assets/img/frames/titan-watch_159.jpg
      `;
            return data.split("\n")[index];
        }

      const frameCount = 160;

      const images = [];
      const imageSeq = {
            frame: 1,
      };

      for (let i = 0; i < frameCount; i++) {
            const img = new Image();
            img.src = files(i);
            images.push(img);
      }

      gsap.to(imageSeq, {
            frame: frameCount - 1,
            snap: "frame",
            ease: `none`,
            scrollTrigger: {
                  scrub: .5,
                  trigger: `#page7`,
                  start: `top top`,
                  end: `250% top`,
                  scroller: `#main`,
            },
            onUpdate: render,
      });

      images[1].onload = render;

      function render() {
            scaleImage(images[imageSeq.frame], context);
      }

      function scaleImage(img, ctx) {
            var canvas = ctx.canvas;
            var hRatio = canvas.width / img.width;
            var vRatio = canvas.height / img.height;
            var ratio = Math.max(hRatio, vRatio);
            var centerShift_x = (canvas.width - img.width * ratio) / 2;
            var centerShift_y = (canvas.height - img.height * ratio) / 2;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(
                  img,
                  0,
                  0,
                  img.width,
                  img.height,
                  centerShift_x,
                  centerShift_y,
                  img.width * ratio,
                  img.height * ratio
            );
      }
      ScrollTrigger.create({

            trigger: "#page7",
            pin: true,
            scroller: `#main`,
            start: `top top`,
            end: `250% top`,
      });
}
canvas2()

gsap.to(".page7-cir", {
      scrollTrigger: {
            trigger: `.page7-cir`,
            start: `top center`,
            end: `bottom top`,
            scroller: `#main`,
            scrub: .5
      },
      scale: 1.5
})



gsap.to(".page7-cir-inner", {
      scrollTrigger: {
            trigger: `.page7-cir-inner`,
            start: `top center`,
            end: `bottom top`,
            scroller: `#main`,
            scrub: .5
      },
      backgroundColor: `#0a3bce91`,
})


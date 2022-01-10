/*
 *   Copyright (c) 2022
 *   All rights reserved.
 */

// up botton in landing section
let upEle = document.querySelector(".up");
window.addEventListener("scroll", function () {
  if (this.scrollY >= 400) {
    upEle.classList.add("show");
  } else {
    upEle.classList.remove("show");
  }
});

// scrollbar in our skills section
let sectionSkillsEle = document.querySelector("section#our-skills");
beforeRangEle = document.querySelectorAll(
  "section.our-skills .content .rang .rang-width"
);
window.addEventListener("scroll", function () {
  if (window.scrollY >= sectionSkillsEle.offsetTop - 100) {
    beforeRangEle.forEach((el) => (el.style.width = el.dataset.width));
  }
});

// increase number in Our Stats section
let sectionStatsEle = document.querySelector("section.our-awesome-stats");
let numEle = document.querySelectorAll(
  "section.our-awesome-stats .container .box .item p"
);

window.addEventListener("scroll", function () {
  if (window.scrollY >= sectionStatsEle.offsetTop - 250) {
    numEle.forEach(function (el) {
      let cont = setInterval(function () {
        if (el.innerHTML < parseInt(el.dataset.num)) {
          el.innerHTML++;
        } else {
          clearInterval(cont);
        }
      }, 3000 / parseInt(el.dataset.num));
    });
  }
});

//Countdown in latestevents section

let countEles = document.querySelectorAll(
  "section.latest-events .container .box .content .time .data p"
);
let finaleDate = new Date("Dec 31, 2022 23:59:59").getTime();

let counter = setInterval(function () {
  let dateNow = new Date().getTime();
  let dateDiff = finaleDate - dateNow;
  let days = dateDiff / (1000 * 60 * 60 * 24);
  let hours = (days - Math.floor(days)) * 24;
  let minutes = (hours - Math.floor(hours)) * 60;
  let secounds = (minutes - Math.floor(minutes)) * 60;

  let arr = [days, hours, minutes, secounds];
  for (let i = 0; i < countEles.length; i++) {
    countEles[0].innerHTML =
      Math.floor(arr[0]) < 100 ? `00${Math.floor(arr[0])}` : Math.floor(arr[0]);
    countEles[i].innerHTML =
      Math.floor(arr[i]) < 10 ? `0${Math.floor(arr[i])}` : Math.floor(arr[i]);
    if (countEles[i].innerHTML === 0) {
      clearInterval(counter);
    }
  }
}, 1000);

//playing videos in topvideos section

let iframeEle = document.querySelector(
  "section.top-videos .container .box .video iframe"
);
let videoItemEles = document.querySelectorAll(
  "section.top-videos .container .box .content .box-item ul li.item"
);
let videoDescrEle = document.querySelector(
  "section.top-videos .container .box .video p"
);
let closeContentEle = document.querySelector(
  "section.top-videos .container .box .content .head i"
);
let contentEle = document.querySelector(
  "section.top-videos .container .box .content"
);
let newOpencontentEle = document.createElement("i");
newOpencontentEle.classList.add("open", "fas", "fa-random");
let boxEle = document.querySelector("section.top-videos .container .box");

videoItemEles.forEach(function (el) {
  el.addEventListener("click", function () {
    setTimeout(() => (iframeEle.src = el.dataset.src + "?autoplay=1"), 200);
    console.log(el.children[0]);
    iframeEle.title = el.children[0].textContent;
    videoDescrEle.textContent = el.children[0].textContent;
  });
});

closeContentEle.addEventListener("click", function () {
  contentEle.style.display = "none";
  newOpencontentEle.style.display = "flex";
  boxEle.prepend(newOpencontentEle);
  boxEle.style.borderWidth = "0";
});
newOpencontentEle.addEventListener("click", function (e) {
  newOpencontentEle.style.display = "none";
  contentEle.style.display = "block";
  boxEle.style.borderWidth = "1px";
});



/*
 *   Copyright (c) 2022
 *   All rights reserved.
 */

// up button in landing section
let upEle = document.querySelector(".up");
window.addEventListener("scroll", upHandle());

function upHandle() {
  if (this.scrollY >= 400) {
    upEle.classList.add("show");
  } else {
    upEle.classList.remove("show");
  }
}

// scrollbar in our skills section
let sectionSkillsEle = document.querySelector("section#our-skills");
beforeRangEle = document.querySelectorAll(
  "section.our-skills .content .rang .rang-width"
);
window.addEventListener("scroll", scrollbarHandle);
function scrollbarHandle() {
  if (window.scrollY >= sectionSkillsEle.offsetTop - 100) {
    beforeRangEle.forEach((el) => (el.style.width = el.dataset.width));
  }
}

// increase number in Our Stats section
let sectionStatsEle = document.querySelector("section.our-awesome-stats");
let numEle = document.querySelectorAll(
  "section.our-awesome-stats .container .box .item p"
);

window.addEventListener("scroll", statsHandle);
function statsHandle() {
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
}

//Countdown in latest events section

let countElse = document.querySelectorAll(
  "section.latest-events .container .box .content .time .data p"
);
let finaleDate = new Date("Dec 31, 2022 23:59:59").getTime();

let counter = setInterval(function () {
  let dateNow = new Date().getTime();
  let dateDiff = finaleDate - dateNow;
  let days = dateDiff / (1000 * 60 * 60 * 24);
  let hours = (days - Math.floor(days)) * 24;
  let minutes = (hours - Math.floor(hours)) * 60;
  let seconds = (minutes - Math.floor(minutes)) * 60;

  let arr = [days, hours, minutes, seconds];
  for (let i = 0; i < countElse.length; i++) {
    countElse[0].innerHTML =
      Math.floor(arr[0]) < 100 ? `00${Math.floor(arr[0])}` : Math.floor(arr[0]);
    countElse[i].innerHTML =
      Math.floor(arr[i]) < 10 ? `0${Math.floor(arr[i])}` : Math.floor(arr[i]);
    if (countElse[i].innerHTML === 0) {
      clearInterval(counter);
    }
  }
}, 1000);

//playing videos in top videos section

let iframeEle = document.querySelector(
  "section.top-videos .container .box .video iframe"
);
let videoItemElse = document.querySelectorAll(
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
let newOpenContentEle = document.createElement("i");
newOpenContentEle.classList.add("open", "fas", "fa-random");
let boxEle = document.querySelector("section.top-videos .container .box");

videoItemElse.forEach(function (el) {
  el.addEventListener("click", videoHandle);
  function videoHandle(e) {
    videoItemElse.forEach((element) =>
      element.classList.remove("video-active")
    );
    e.currentTarget.classList.add("video-active");
    setTimeout(() => (iframeEle.src = el.dataset.src + "?autoplay=1"), 200);
    iframeEle.title = el.children[0].textContent;
    videoDescrEle.textContent = el.children[0].textContent;
  }
});

closeContentEle.addEventListener("click", closeHandle);
function closeHandle(e) {
  contentEle.style.display = "none";
  newOpenContentEle.style.display = "flex";
  boxEle.prepend(newOpenContentEle);
  boxEle.style.borderWidth = "0";
}

newOpenContentEle.addEventListener("click", openHandle);
function openHandle(e) {
  newOpenContentEle.style.display = "none";
  contentEle.style.display = "block";
  boxEle.style.borderWidth = "1px";
}

module.exports = [upHandle, scrollbarHandle, statsHandle, closeHandle, openHandle];

"use strict";var featuresLottieFirstContainer=document.querySelector("#features__lottie-first"),featuresLottieSecondContainer=document.querySelector("#features__lottie-second"),featuresLottieThirdContainer=document.querySelector("#features__lottie-third"),featuresLottieFirst=bodymovin.loadAnimation({wrapper:featuresLottieFirstContainer,animType:"svg",loop:!0,path:"./animations/first.json",rendererSettings:{progressiveLoad:!0}}),featuresLottieSecond=bodymovin.loadAnimation({wrapper:featuresLottieSecondContainer,animType:"svg",loop:!0,path:"./animations/second.json",rendererSettings:{progressiveLoad:!0}}),featuresLottieThird=bodymovin.loadAnimation({wrapper:featuresLottieThirdContainer,animType:"svg",loop:!0,path:"./animations/third.json",rendererSettings:{progressiveLoad:!0}});featuresLottieFirst.setSpeed(.7),featuresLottieSecond.setSpeed(.7),featuresLottieThird.setSpeed(.7),lottie.searchAnimations();
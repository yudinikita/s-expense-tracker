const featuresLottieFirstContainer = document.querySelector(
  "#features__lottie-first"
);
const featuresLottieSecondContainer = document.querySelector(
  "#features__lottie-second"
);
const featuresLottieThirdContainer = document.querySelector(
  "#features__lottie-third"
);

const featuresLottieFirst = bodymovin.loadAnimation({
  wrapper: featuresLottieFirstContainer,
  animType: "svg",
  loop: true,
  path: "./first.json",
  rendererSettings: {
    progressiveLoad: true,
  },
});

const featuresLottieSecond = bodymovin.loadAnimation({
  wrapper: featuresLottieSecondContainer,
  animType: "svg",
  loop: true,
  path: "./second.json",
  rendererSettings: {
    progressiveLoad: true,
  },
});

const featuresLottieThird = bodymovin.loadAnimation({
  wrapper: featuresLottieThirdContainer,
  animType: "svg",
  loop: true,
  path: "./third.json",
  rendererSettings: {
    progressiveLoad: true,
  },
});

featuresLottieFirst.setSpeed(0.7);
featuresLottieSecond.setSpeed(0.7);
featuresLottieThird.setSpeed(0.7);

lottie.searchAnimations();

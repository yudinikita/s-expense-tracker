function loadLottieAnimation() {
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
    path: "./animations/first.json",
    rendererSettings: {
      progressiveLoad: true,
    },
  });

  const featuresLottieSecond = bodymovin.loadAnimation({
    wrapper: featuresLottieSecondContainer,
    animType: "svg",
    loop: true,
    path: "./animations/second.json",
    rendererSettings: {
      progressiveLoad: true,
    },
  });

  const featuresLottieThird = bodymovin.loadAnimation({
    wrapper: featuresLottieThirdContainer,
    animType: "svg",
    loop: true,
    path: "./animations/third.json",
    rendererSettings: {
      progressiveLoad: true,
    },
  });

  const SPEED_ANIMATION = 0.7;

  featuresLottieFirst.setSpeed(SPEED_ANIMATION);
  featuresLottieSecond.setSpeed(SPEED_ANIMATION);
  featuresLottieThird.setSpeed(SPEED_ANIMATION);
}

loadLottieAnimation();

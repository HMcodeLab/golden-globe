/**
 * Golden Globe
 * Golden Globe is an Online Education Website Template Kit
 * Exclusively on https://1.envato.market/Golden Globe-html
 *
 * @encoding        UTF-8
 * @version         1.0.2
 * @copyright       (C) 2018 - 2022 Merkulove ( https://merkulov.design/ ). All rights reserved.
 * @license         Envato License https://1.envato.market/KYbje
 * @contributors    Lamber Lilith (winter.rituel@gmail.com)
 * @support         help@merkulov.design
 **/
"use strict";

import { CountUp } from "countup.js";
import { inViewport } from "./helpers";

function animateNumber(
  numSelector = ".countNum",
  animationDuration = 1.5,
  startVal = 0
) {
  const numArr = document.querySelectorAll(numSelector);
  for (let i = 0; i < numArr.length; i++) {
    let num = numArr[i];
    let value = +num.dataset.value;
    let options = {
      prefix: num.dataset.prefix ? num.dataset.prefix : "",
      suffix: num.dataset.suffix ? num.dataset.suffix : "",
      separator: num.dataset.separator ? num.dataset.separator : "",
      duration: animationDuration,
      startVal: startVal,
    };
    let animatedNum = new CountUp(num, value, options);

    function triggerAnimation() {
      if (!inViewport(num)) {
        animatedNum.start();
      }
    }

    triggerAnimation();

    window.addEventListener("scroll", triggerAnimation);
  }
}

export default animateNumber;

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

export function preventDefault() {
  const forms = document.querySelectorAll("form");

  document.addEventListener("click", function (e) {
    if (
      (e.target.tagName === "A" && e.target.getAttribute("href") === "#") ||
      (e.target.closest("a") !== null &&
        e.target.closest("a").getAttribute("href") === "#")
    ) {
      e.preventDefault();
    }
  });

  document.addEventListener("submit", (e) => {
    if (e.target.tagName === "FORM") {
      e.preventDefault();
    }
  });
}

export function inViewport(el) {
  let rect = el.getBoundingClientRect();
  return (
    rect.bottom < 0 ||
    rect.right < 0 ||
    rect.left > window.innerWidth ||
    rect.top > window.innerHeight
  );
}

export function hideCover() {
  const coverElems = document.querySelectorAll(".cover");
  if (coverElems) {
    coverElems.forEach((el, i) => {
      el.addEventListener("click", () => {
        el.classList.add("hidden");
      });
    });
  }
}

export function setCurrentYear() {
  const container = document.getElementById("currentYear");

  if (container) {
    container.textContent = String(new Date().getFullYear());
  }
}

export function addSelectIcon() {
  const selectOpeners = document.querySelectorAll(".custom-select-opener");
  selectOpeners.forEach((el) => {
    let icon = document.createElement("i");
    icon.classList.add("icon", "icon-caret-down-solid");
    el.append(icon);
  });
}

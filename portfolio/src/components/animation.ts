import gsap from "gsap";
import { TextPlugin, EasePack } from "gsap/all";

gsap.registerPlugin(TextPlugin, EasePack);

// Regular expression to check for sentence-ending punctuation
const _sentenceEndExp = /(\.|\?|!)$/g;

/**
 * Animates words one by one inside the #demo container.
 * @param text - The string of text to animate.
 */
export function machineGun(text: string): void {
  const container = document.getElementById("demo");

  if (!container) return;

  container.innerHTML = ""; // Clear previous text
  const words = text.split(" ");
  const tl = gsap.timeline({ delay: 0.6, repeat: 2, repeatDelay: 4 });
  let time = 0;

  words.forEach((word) => {
    const isSentenceEnd = _sentenceEndExp.test(word);
    const element = document.createElement("h3");
    element.innerText = word;
    container.appendChild(element);

    const duration = Math.max(0.5, word.length * 0.08) + (isSentenceEnd ? 0.6 : 0);

    gsap.set(element, { autoAlpha: 0, scale: 0, z: 0.01 });

    tl.to(element, {
      scale: 1.2,
      autoAlpha: 1,
      duration,
      ease: "slow(0.25, 0.9)",
    }, time)
    .to(element, {
      autoAlpha: 0, // Fade out after displaying
      duration: 0.5,
      ease: "power2.out",
    }, time + duration - 0.1); // Start fade-out before next word

    time += duration;
    if (isSentenceEnd) time += 0.6; // Pause at the end of a sentence
  });
}

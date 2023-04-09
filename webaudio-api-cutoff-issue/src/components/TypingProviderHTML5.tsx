import { Howl } from "howler";
import { PropsWithChildren, useRef } from "react";

import type1 from "../sounds/type-1.mp3";
import type2 from "../sounds/type-2.mp3";
import type3 from "../sounds/type-3.mp3";

const soundType1 = new Howl({ src: [type1], preload: true, html5: true });
const soundType2 = new Howl({ src: [type2], preload: true, html5: true });
const soundType3 = new Howl({ src: [type3], preload: true, html5: true });

Howler.autoUnlock = true;

type Props = PropsWithChildren<{}>;

/**
 * Returns a random whole number between the min and max
 * @param min the minimum number in the pool of possibilities
 * @param max the maximum number in the pool of possibilities
 * @returns a number between the min and max
 */
export const randomWholeNumber = (min: number, max: number): number => {
  return Math.floor(min + Math.random() * (max - min + 1));
};

const TypingProviderHTML5 = ({ children }: Props) => {
  const currentTypeCount = useRef<number>(1);

  /**
   * prevents currentTypeCount variable from growing insanely large, and causing a stack overflow over time.
   */
  const handleTypeCount = () => {
    if (currentTypeCount.current > 36) {
      currentTypeCount.current = 1;
    } else {
      currentTypeCount.current = currentTypeCount.current + 1;
    }
  };

  const keydownHandler = (e: KeyboardEvent) => {
    const rando = randomWholeNumber(1, 10);
    const modulus = currentTypeCount.current % rando;
    let audio = null;
    if (modulus >= 0 && modulus <= 2) {
      console.debug("playing 1");
      audio = soundType1;
    } else if (modulus > 2 && modulus <= 4) {
      console.debug("playing 2");
      audio = soundType2;
    } else if (modulus > 4) {
      console.debug("playing 3");
      audio = soundType3;
    }
    if (audio != null) {
      audio.play();
    }
    handleTypeCount();
  };

  return <span onKeyDown={keydownHandler as any}>{children}</span>;
};

export default TypingProviderHTML5;

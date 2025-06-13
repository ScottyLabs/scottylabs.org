import { useEffect, useRef, useState } from "react";
import css from "./TartanHacks.module.css";
import tartanhacksLogo from "./assets/tartanhacks-logo.svg";
import Button from "./components/Button";
import { getAllImageLinksInAssetDirectory } from "./utils/files";

function getRandomLetter(targetChar: string, chanceForTarget: number) {
  if (Math.random() <= chanceForTarget) return targetChar;
  const characters = "abcdefghijklmnopqrstuvwxyz ";
  const randomChar =
    characters[
      Math.floor(Math.random() * characters.length) % characters.length
    ];
  if (randomChar === targetChar) return getRandomLetter(targetChar, 0); // go again
  return randomChar;
}
const alternateNamesForParticipants = [
  "boba recipients",
  "midnight snackers",
  "morning yogis",
  "hackers",
];
function StatTile() {
  const [wordIndex, setWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(
    alternateNamesForParticipants[wordIndex]
  );
  const prevWordRef = useRef("");
  useEffect(() => {
    const intervalId = setInterval(() => {
      setWordIndex(
        (index) => (index + 1) % alternateNamesForParticipants.length
      );
    }, 4000);
    return () => clearInterval(intervalId);
  }, [alternateNamesForParticipants]);
  useEffect(() => {
    const startTime = +new Date();
    const wordToTransitionTo = alternateNamesForParticipants[wordIndex];
    const prevWord = prevWordRef.current;

    prevWordRef.current = wordToTransitionTo;
    let finished = false;

    const intervalId = setInterval(() => {
      const len = Math.max(prevWord.length, wordToTransitionTo.length);
      const frontierIndex = Math.floor((+new Date() - startTime) / 100);
      const windowSize = 1;
      let newWordState = "";
      for (let i = 0; i < len; i++) {
        if (i <= frontierIndex - windowSize) {
          newWordState += wordToTransitionTo[i] || " ";
        } else if (i <= frontierIndex) {
          newWordState += getRandomLetter(
            wordToTransitionTo[i] || " ",
            wordToTransitionTo[i] === undefined ? 1 : 0
          ); // if new word is shorter, replace extra characters in randomWindow with ' '
        } else {
          newWordState += prevWord[i] || " ";
        }
      }

      setCurrentWord(newWordState);
      if (newWordState.trimEnd() === wordToTransitionTo) {
        finished = true;
        clearInterval(intervalId);
      }
    }, 30);
    return () => {
      if (!finished) clearInterval(intervalId);
    };
  }, [wordIndex]);
  return (
    <div className={css["photo-gallery__stat-box"]}>
      <div className={css["stat-box__number"]}>700+</div>
      <div className={css["stat-box__description"]}>{currentWord}</div>
    </div>
  );
}
export default function TartanHacks() {
  const pics = getAllImageLinksInAssetDirectory("tartanhacks-photos");

  return (
    <section className={css["main-container"]}>
      <div className="centered-section">
        <h1 className={css["header"]}>
          We host Pittsburgh's largest annual hackathon,
        </h1>
        <img className={css["tartanhacks-logo"]} src={tartanhacksLogo} alt="" />
        <div className={css["photo-gallery"]}>
          {pics.slice(0, 5).map((pic) => (
            <img
              className={css["photo-gallery__image"]}
              src={pic}
              alt=""
              key={pic}
            />
          ))}
          <StatTile />
        </div>
        <Button
          label="View all events"
          variant="primary"
          className={css["all-events-button"]}
        />
      </div>
    </section>
  );
}

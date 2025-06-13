import { useEffect, useState } from "react";
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
  useEffect(() => {
    const intervalId = setInterval(() => {
      setWordIndex(
        (index) => (index + 1) % alternateNamesForParticipants.length
      );
    }, 5000);
    return () => clearInterval(intervalId);
  }, [alternateNamesForParticipants]);
  useEffect(() => {
    let numIterations = 0;
    const wordToTransitionTo = alternateNamesForParticipants[wordIndex];
    let finished = false;
    const intervalid = setInterval(() => {
      // React strict mode will call setCurrentWord twice in dev (per call), so it might look like it doesn't really work.
      setCurrentWord((currentWord) => {
        let nextWordState = "";
        for (
          let i = 0;
          i < Math.max(currentWord.length, wordToTransitionTo.length);
          i++
        ) {
          const curChar = currentWord[i] || " ";
          const targetChar = wordToTransitionTo[i] || " ";

          if (curChar !== targetChar) {
            nextWordState += getRandomLetter(
              targetChar,
              numIterations / 10 - i * 0.05
            );
          } else {
            nextWordState += targetChar;
          }
        }
        if (nextWordState.trimEnd() === wordToTransitionTo) {
          finished = true;
          clearInterval(intervalid);
        }
        numIterations++;
        return nextWordState;
      });
    }, 50);
    return () => {
      if (!finished) clearInterval(intervalid);
    };
  }, [wordIndex, alternateNamesForParticipants]);
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
            <img className={css["photo-gallery__image"]} src={pic} alt="" />
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

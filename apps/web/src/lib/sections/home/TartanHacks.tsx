import { useEffect, useState } from "react";
import css from "./TartanHacks.module.css";
import tartanhacksLogo from "../../assets/tartanhacks-logo.svg";
import Button from "../../components/Button";
import { getAllImageLinksInAssetDirectory } from "../../utils/files";
import ImageCarousel from "../../components/ImageCarousel";
import clsx from "clsx";
import { Link } from "react-router";

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
function generateIntermediateWord(
  prevWord: string,
  newWord: string,
  frontierIndex: number,
) {
  const len = Math.max(prevWord.length, newWord.length);
  const LETTER_CHANGE_WINDOW_SIZE = 1;

  let intermediateWord = "";
  for (let i = 0; i < len; i++) {
    if (i <= frontierIndex - LETTER_CHANGE_WINDOW_SIZE) {
      intermediateWord += newWord[i] || " ";
    } else if (i <= frontierIndex) {
      intermediateWord += getRandomLetter(
        newWord[i] || " ",
        newWord[i] === undefined ? 1 : 0,
      ); // if new word is shorter, replace extra characters in randomWindow with ' '
    } else {
      intermediateWord += prevWord[i] || " ";
    }
  }
  return intermediateWord;
}

function StatTile() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedWord, setDisplayedWord] = useState(
    alternateNamesForParticipants[wordIndex],
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setWordIndex(
        (index) => (index + 1) % alternateNamesForParticipants.length,
      );
    }, 4000);
    return () => clearInterval(intervalId);
  }, []);

  // sets up loop for transitioning in-between words
  useEffect(() => {
    const startTime = Date.now();
    const wordToTransitionTo = alternateNamesForParticipants[wordIndex];
    const prevWord =
      alternateNamesForParticipants[
        (wordIndex - 1 + alternateNamesForParticipants.length) %
          alternateNamesForParticipants.length
      ];
    let finished = false;
    const intervalId = setInterval(() => {
      const frontierIndex = Math.floor((Date.now() - startTime) / 100);
      const intermediateState = generateIntermediateWord(
        prevWord,
        wordToTransitionTo,
        frontierIndex,
      );
      setDisplayedWord(intermediateState.trimEnd());
      if (intermediateState.trimEnd() === wordToTransitionTo) {
        finished = true;
        clearInterval(intervalId);
      }
    }, 30);
    return () => {
      if (!finished) {
        // we should've finished the transition though
        clearInterval(intervalId);
      }
    };
  }, [wordIndex]);

  return (
    <div className={css["stat-box"]}>
      <div>
        <div className={css["stat-box__number"]}>700+</div>
        <div className={css["stat-box__description"]}>
          {displayedWord.replace(/ /g, "\u00A0")}
          {/* replace normal spaces with the non-breaking space */}
        </div>
      </div>
    </div>
  );
}
export default function TartanHacks() {
  return (
    <section className={css["main-container"]}>
      <div className="centered-section">
        <h1 className={css["header"]}>
          We host Pittsburgh's largest annual hackathon,
        </h1>
        <img className={css["tartanhacks-logo"]} src={tartanhacksLogo} alt="" />
      </div>
      <div
        className={clsx(
          css["carousel-container"],
          css["carousel-container--first"],
        )}
      >
        <ImageCarousel
          heightPx={150}
          speedPxPerSecond={50}
          imageLinks={getAllImageLinksInAssetDirectory("tartanhacks-photos")}
          gapPx={15}
        />
      </div>
      <div className={css["carousel-container"]}>
        <ImageCarousel
          heightPx={200}
          speedPxPerSecond={-30}
          imageLinks={getAllImageLinksInAssetDirectory("tartanhacks-photos")}
          gapPx={15}
          PeriodicTileInsert={StatTile}
        />
      </div>
      {/* <Link to="/events" prefetch="viewport">
        <Button
          label="View all events"
          variant="primary"
          className={css["all-events-button"]}
        />
      </Link> */}
    </section>
  );
}

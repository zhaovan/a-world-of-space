import Head from "next/head";
import TypeIt from "typeit-react";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";

import text from "../script/script";

const DEFAULT_SPEED = 50;

export default function Home() {
  const [instance, setInstance] = useState(null);
  const [showButton, setShowButton] = useState(false);
  const [location, setLocation] = useState(48);
  const [backgroundAudio, setBackgroundAudio] = useState(null);
  const [voiceAudio, setVoiceAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  // const [endingAudio, setEndingAudio] = useState(null);

  useEffect(() => {
    setBackgroundAudio(new Audio("/music1.mp3"));
    setVoiceAudio(new Audio("/voice.m4a"));
    // setEndingAudio(new Audio("/end.mp3"));
  }, []);

  function progressStory(currChoice = "") {
    setShowButton(false);
    const pastLocation = location;
    const newLocation = location + 1;
    setLocation(newLocation);

    voiceAudio.loop = true;

    // if it is a real text message and not a spacing line
    if (
      (text[location].display.includes("...") &&
        text[location].display.length <= 4) ||
      newLocation >= text.length
    ) {
    } else {
      voiceAudio.play();
    }
    if (backgroundAudio && !isPlaying && location >= 23) {
      setIsPlaying(true);
      backgroundAudio.playbackRate = 0.7;
      backgroundAudio.volume = 1;
      backgroundAudio.loop = true;
      backgroundAudio.play();
    }

    if (newLocation >= text.length) {
      instance.options({ speed: 300 });
      instance.delete(text[pastLocation].display.length).flush(() => {
        setTimeout(() => (backgroundAudio.volume = 0.5), 2000);
        setTimeout(() => (backgroundAudio.volume = 0.4), 4000);
        setTimeout(() => (backgroundAudio.volume = 0.3), 6000);
        setTimeout(() => (backgroundAudio.volume = 0.2), 8000);
        setTimeout(() => (backgroundAudio.volume = 0.1), 10000);
      });
      return;
    }

    // pulling plug

    if (location === 41) {
      instance
        .delete(text[pastLocation].display.length, { instant: true })
        .type(text[newLocation].display);
      if (currChoice === "pull the plug") instance.options({ speed: 200 });
      instance.type(" " + currChoice).flush(() => {
        voiceAudio.pause();
        delayButton(1000);
      });
      instance.options({ speed: DEFAULT_SPEED });
    } else {
      instance
        // .reset()
        .delete(text[pastLocation].display.length, { instant: true })
        .type(text[newLocation].display)

        .flush(() => {
          voiceAudio.pause();
          delayButton(1000);
        });
    }
  }

  function delayButton(time) {
    setTimeout(() => setShowButton(true), time);
  }

  return (
    <div>
      <Head>
        <title>a void in space</title>
        <meta name="description" content="a void in space" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.displayContainer}>
          <TypeIt
            getBeforeInit={(instance) => {
              instance.options({ speed: DEFAULT_SPEED });
              instance
                .type(text[location].display)
                .flush(() => delayButton(1000));

              return instance;
            }}
            getAfterInit={(instance) => {
              setInstance(instance);
              return instance;
            }}
          />
        </div>

        {showButton &&
          voiceAudio &&
          (text[location].choice ? (
            text[location].button.split("/").map((event, i) => {
              return (
                <button
                  key={i}
                  onClick={() => progressStory(event)}
                  style={{ marginBottom: "2vh" }}
                >
                  {event}
                </button>
              );
            })
          ) : (
            <button onClick={() => progressStory()}>
              {text[location].button}
            </button>
          ))}
      </div>
    </div>
  );
}

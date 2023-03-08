import Head from "next/head";
import TypeIt from "typeit-react";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";

import text from "../script/script";

const DEFAULT_SPEED = 50;

const DEBUG_SPEED = 1;

export default function Home() {
  const [instance, setInstance] = useState(null);
  const [showButton, setShowButton] = useState(false);

  const [firstLoad, setFirstLoad] = useState(false);

  // 59 is the choice
  const [location, setLocation] = useState(0);

  const [backgroundAudio, setBackgroundAudio] = useState(null);
  const [voiceAudio, setVoiceAudio] = useState(null);
  const [shoppingAudio, setShoppingAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hospitalAudio, setHospitalAudio] = useState(null);

  const [coffeeAudio, setCoffeeAudio] = useState(null);
  const [startTime, setStartTime] = useState(null);

  const displayText = text;

  const [cookie, setCookie] = useState(null);

  const [debug, setDebug] = useState(false);

  let skipNumber = 0;

  useEffect(() => {
    setBackgroundAudio(new Audio("/music1.mp3"));
    setVoiceAudio(new Audio("/voice.m4a"));
    setHospitalAudio(new Audio("/hospital.m4a"));
    setShoppingAudio(new Audio("/shopping.m4a"));
    setCoffeeAudio(new Audio("/coffee.mp3"));
    setCookie(localStorage.getItem("time"));
    setDebug(localStorage.getItem("debug") === "true");
    setTimeout(() => setFirstLoad(true), 2500);
    setStartTime(new Date());
  }, []);

  function progressStory(currChoice = "", text = "") {
    setShowButton(false);

    const currStage = displayText[location];

    if (currStage.countTime) {
      const endTime = new Date();
      localStorage.setItem("time", endTime.getTime() - startTime.getTime());
    }

    if (currStage.end) {
      return;
    }

    // functionality for skipping around in the dialog
    if ("skipNumbers" in currStage || "skipNumber" in currStage) {
      if ("skipNumber" in currStage) {
        skipNumber = currStage.skipNumber;
      } else {
        skipNumber = currStage.skipNumbers[currChoice];
      }
    } else {
      skipNumber = 0;
    }

    const pastLocation = location;
    let newLocation = location + 1 + skipNumber;

    setLocation(newLocation);

    const currPath = displayText[newLocation];

    voiceAudio.loop = true;

    // if it is a real displayText message and not a spacing line
    if (
      currPath.display.includes("....") ||
      currPath.display.includes("*") ||
      newLocation >= displayText.length
    ) {
    } else {
      voiceAudio.play();
    }
    if (backgroundAudio && !isPlaying && currPath.backgroundMusicOn) {
      setIsPlaying(true);
      backgroundAudio.playbackRate = 0.7;
      backgroundAudio.volume = 1;
      backgroundAudio.loop = true;
      backgroundAudio.play();
    }

    if (currPath.backgroundMusicOn === false) {
      console.log("background music off");
      backgroundAudio.pause();
    }

    if (currPath.coffeeSoundOn) {
      console.log("coffee sound on");
      coffeeAudio.play();
      coffeeAudio.volume = 0.6;
    }

    if (currPath.coffeeSoundOn === false) {
      console.log("coffee sound off");
      coffeeAudio.pause();
    }

    if (shoppingAudio && currPath.shoppingMusicOn) {
      console.log("shopping music on");
      shoppingAudio.volume = 0.7;
      shoppingAudio.play();
    }

    if (currPath.shoppingMusicOn === false) {
      console.log("shopping music off");
      shoppingAudio.pause();
    }

    // hospital music
    if (hospitalAudio && currPath.hospitalMusicOn) {
      console.log("hospital audio on");
      hospitalAudio.volume = 0.3;
      hospitalAudio.play();
    }

    if (currPath.hospitalMusicOn === false) {
      console.log("hospital music off");
      hospitalAudio.pause();
    }

    instance
      .delete(displayText[pastLocation].display.length, { instant: true })
      .type(currPath.display)

      .flush(() => {
        voiceAudio.pause();
        delayButton(1000);
      });
  }

  function delayButton(time) {
    setTimeout(() => setShowButton(true), time);
  }

  return (
    <div>
      <Head>
        <title>a world of space</title>
        <meta name="description" content="a world of space" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <div className={styles.container}>
        {/* Code to handle cookie / completion of game the first time */}
        {cookie !== null ? (
          <TypeIt
            getBeforeInit={(instance) => {
              instance.options({ speed: DEFAULT_SPEED });
              console.log(cookie);
              const min = Math.floor(parseInt(cookie) / (1000 * 60));
              const sec = Math.floor(parseInt(cookie) / 1000);
              const time = min + " minutes and " + sec + " seconds";
              instance
                .type(
                  "you spent " +
                    time +
                    " with him at the end... he might not remember it but you will... now go on and leave this place"
                )
                .flush();

              return instance;
            }}
          />
        ) : (
          <>
            <div className={styles.displayContainer}>
              {location === 0 ? (
                <h1 className={styles.title}>A world of space</h1>
              ) : (
                <></>
              )}
              {firstLoad && (
                <TypeIt
                  getBeforeInit={(instance) => {
                    instance.options({
                      speed: debug ? DEBUG_SPEED : DEFAULT_SPEED,
                    });
                    instance
                      .type(displayText[location].display)

                      .flush(() => delayButton(1000));

                    return instance;
                  }}
                  getAfterInit={(instance) => {
                    setInstance(instance);
                    return instance;
                  }}
                />
              )}
            </div>

            {showButton &&
              voiceAudio &&
              (displayText[location].choice ? (
                displayText[location].button.split("/").map((event, i) => {
                  return (
                    <button
                      key={i}
                      onClick={() => progressStory(parseInt(i), event)}
                      style={{ marginBottom: "2vh" }}
                    >
                      {event}
                    </button>
                  );
                })
              ) : // using empty button string to denote that no button should exist
              displayText[location].button !== "" ? (
                <button onClick={() => progressStory()}>
                  {displayText[location].button}
                </button>
              ) : (
                <></>
              ))}
          </>
        )}
      </div>
    </div>
  );
}

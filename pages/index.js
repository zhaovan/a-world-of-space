import Head from "next/head";
import TypeIt from "typeit-react";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";

import text from "../script/script";

const DEFAULT_SPEED = 50;

export default function Home() {
  const [instance, setInstance] = useState(null);
  const [showButton, setShowButton] = useState(false);

  const [location, setLocation] = useState(0);

  const [backgroundAudio, setBackgroundAudio] = useState(null);
  const [voiceAudio, setVoiceAudio] = useState(null);
  const [shoppingAudio, setShoppingAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hospitalAudio, setHospitalAudio] = useState(null);
  const [choice, setChoice] = useState(null);
  const [skipNumber, setSkipNumber] = useState(0);

  const [displayText, setDisplayText] = useState(text);

  const [cookie, setCookie] = useState(null);

  useEffect(() => {
    setBackgroundAudio(new Audio("/music1.mp3"));
    setVoiceAudio(new Audio("/voice.m4a"));
    setHospitalAudio(new Audio("/hospital.m4a"));
    setShoppingAudio(new Audio("/shopping.m4a"));
    setCookie(localStorage.getItem("choice"));
  }, []);

  function progressStory(currChoice = "") {
    setShowButton(false);
    let newLocation = location + 1 + skipNumber;

    const pastLocation = location;

    setLocation(newLocation);
    setSkipNumber(0);

    const currPath = displayText[newLocation];

    if (currChoice !== "") {
      setChoice(currChoice);
      backgroundAudio.pause();
      hospitalAudio.pause();
      shoppingAudio.pause();
      currPath.display += " " + currChoice + "*";
    }

    if (currChoice === "pull the plug") {
      backgroundAudio.pause();
    }
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
      console.log(hospitalAudio);
      hospitalAudio.pause();
    }

    instance
      .delete(displayText[pastLocation].display.length, { instant: true })
      .type(currPath.display)

      .flush(() => {
        voiceAudio.pause();
        delayButton(1000);
      });
    if (currChoice === "let him go slowly" && currPath.skip) {
      setSkipNumber(currPath.skipNumber);
    }
    if (currPath.end) {
      if (choice === "pull the plug") {
        localStorage.setItem("choice", "pull the plug");
      } else {
        localStorage.setItem("choice", "let him go slowly");
      }
    }
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
        {cookie === "pull the plug" ? (
          <TypeIt
            getBeforeInit={(instance) => {
              instance.options({ speed: DEFAULT_SPEED });
              instance
                .type(
                  "there's a faint noise... as if there used to be a man sipping espresso with you here"
                )
                .flush();

              return instance;
            }}
          />
        ) : cookie === "let him go slowly" ? (
          <TypeIt
            getBeforeInit={(instance) => {
              instance.options({ speed: DEFAULT_SPEED });
              instance.type("i can't believe he's really gone").flush();

              return instance;
            }}
          />
        ) : (
          <>
            <div className={styles.displayContainer}>
              <TypeIt
                getBeforeInit={(instance) => {
                  instance.options({ speed: DEFAULT_SPEED });
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
            </div>

            {showButton &&
              voiceAudio &&
              (displayText[location].choice ? (
                displayText[location].button.split("/").map((event, i) => {
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
              ) : displayText[location].button !== "" ? (
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

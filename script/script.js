const text = [
  { display: "recommended: having sound on low", button: "get started" },
  { display: "hey", button: "hey?", backgroundMusicOn: true },
  {
    display: "do i know you?",
    button: "i'm not sure... i just got here.",
  },
  {
    display: "oh you just look ... never mind",
    button: "do you know what this place is?",
  },
  {
    display:
      "not sure... it seems to be a tiny speck in the black void. for some reason I can't remember much or see much else",
    button: "me neither to be quite honest",
  },
  {
    display:
      "spooky... i've been walking around for hours... it's just you and me here",
    button: "oh. how'd we even get here?",
  },
  {
    display: "maybe our digital consciousness touched",
    button: "right",
  },
  {
    display: "somewhere... in the world",
    button: "okay...",
  },
  {
    display: "and it's here... meant to be together",
    button: "that really doesn't clear it up",
  },
  { display: "or maybe we're DEAD", button: "WHAT ???" },
  { display: "im just kidding", button: "ha ha verryyyyy funny" },
  { display: "well if you really want you can leave", button: "how?" },
  {
    display: "i think you know",
    button: "i'll keep it in mind. i'll stick around for a bit though",
  },
  {
    display:
      "anyways, we might be here for a while... might as well make ourselves at home",
    button: "ill try",
  },

  {
    display: "i would kill for a good espresso",
    button: "maybe i'll manifest one",
  },
  { display: "*just then a machine appears*", button: "..." },
  {
    display:
      "well i'll be damned. anything's possible here. alright, espresso?",
    button: "can you make it a double? didn't sleep well last night",
  },
  {
    display: "yesiree. wish me a million bucks",
    button: "not sure if it works like that but i'll try",
  },
  { display: "*coffee machine whirs*", button: "..." },
  {
    display: "*a faint grunting sound can be heard in the back*",
    button: "....?",
  },
  {
    display: "....",
    button: "*it sound's like he's struggling... maybe I should help?*",
  },
  {
    display: "all done! here ya go... one double shot, on me!",
    button: "thank you",
  },
  {
    display: "....",
    button: "*it's good, just the way you like it*",
  },
  {
    display: "*a long sip*",
    button: "...",
  },
  {
    display: "....!",
    button: "...?",
  },
  {
    display: "*it seems like he wants to tell you something*",
    button: "what's up?",
  },
  {
    display: "i just remembered something... i'm not sure what it means",
    button: "tell me and we can work it out together",
  },
  { display: "sounds good", button: "..." },
  { display: "here it goes", button: "..." },
  {
    display:
      "a boy and a father are out on a shopping trip. the boy wants to stop by at the ice cream parlor. the father, being the dutiful dad, obliges",
    button: "...",
    shoppingMusicOn: true,
  },
  {
    display:
      "at the shop, the boy looks around at all the flavors, indulging in the choices. overwhelmed, the boy asks the father to pick for him.",
    button: "...",
  },
  {
    display:
      "knowing his favorites, the father picks a double scoop of cookie dough. the boy claps giddily, and grabs the overflowing waffle cone lined with little dough nuggets",
    button: "...",
  },
  {
    display:
      "he is happy now... what more could he want in the world? god bestowed upon him the greatest gift",
    button: "...",
  },
  {
    display:
      "twenty years pass, and the boy is a boy no longer. in weathered hands are a fresh bouquet of flowers",
    button: "...",
    shoppingMusicOn: false,
  },
  {
    display:
      "the father is now in the infirmary, a heart too full placed him there",
    button: "...",
    hospitalMusicOn: true,
  },
  {
    display: "the boy is ushered into the room, a faint beeping can be heard",
    button: "...",
  },
  {
    display: "he looks at his father's body, riddled with years of life",
    button: "...",
  },
  { display: "the doctor walks in", button: "..." },
  {
    display:
      "the doctor looks at him with a heavy heart, and hands him a sheaf of papers. documents to sign off on for his father's impending death",
    button: "...",
  },
  {
    display:
      "'your father has been fighting for months... I don't know how much longer it can go'",
    button: "...",
  },
  {
    display: "beep.... beep.... beep....",
    button: "...",
  },
  {
    display: "he ached from inside... what was it?",
    button: "...",
  },
  {
    display:
      "only the slow, gnawing, pull of death; vertigo, from the passage of time.",
    button: "...",
  },
  {
    display:
      "the boy is conflicted... the boy had been coming here for months now... what had changed... why now?",
    button: "...",
  },
  {
    display:
      "the doctor said that the father was in terrible pain, that to keep him going would be more damaging than good",
    button: "...",
  },
  {
    display: "the old bouquet of flowers sits in a glass vase nearby.",
    button: "...",
  },
  {
    display:
      "the once buttery daffodils, creamy daisies, and chocolately tulips dribble over the sides of the bowl",
    button: "...",
  },
  {
    display:
      "the boy wants some time to think, to ponder his options. the doctor nods and gently retreats from the room",
    button: "...",
  },
  {
    display: "the boy wonders how he could ever pick",
    button: "...",
  },
  {
    display:
      "he thinks back to the years that they had spent together. the father had always been there for him, and he had always been there for the father",
    button: "...",
  },
  { display: "but things are different now...", button: "..." },
  {
    display: "ultimately, he had to pick",
    button: "...",
    hospitalMusicOn: false,
    backgroundMusicOn: false,
  },
  {
    display: "....",
    button: "pull the plug/let him go slowly",
    choice: true,
  },
  { display: "*you chose to", button: "...", skip: true, skipNumber: 5 },
  { display: "i guess that's only fair", button: "..." },
  {
    display:
      "we're all simply an ocean of thoughts, with a tiny leak, dripping to the ends of existence",
    button: "...",
  },
  { display: "and it all comes to a halt", button: "..." },
  { display: "*the man fades away slowly... *", button: "" },
  { display: "* and hes gones*", button: "...", end: true },
  {
    display: "*he breathes a deep sigh... it's almost gratitude?*",
    button: "...",
  },
  {
    display: "you know, you still have a soft spot... for your old man",
    button: "...",
  },
  { display: "*winks*", button: "..." },
  { display: "i'll keep you in my heart old chap", button: "..." },
  { display: "but be true to yourself", button: "..." },
  { display: "and i'll catch you around", button: "..." },
  {
    display: "*he closes his eyes... and a soft snore can be heard*",
    button: "...",
  },
  { display: "....", button: "", end: true },
];

export default text;

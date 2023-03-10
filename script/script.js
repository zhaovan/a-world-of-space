const text = [
  { display: "recommended: having sound on low", button: "get started" },
  { display: "hey", button: "hey?", backgroundMusicOn: true },
  { display: "do i know you?", button: "i'm not sure... i just got here." },
  {
    display: "oh you just look ... never mind",
    button: "do you know what this place is?",
  },
  {
    display: "not sure... I can't remember much",
    button: "me neither to be quite honest",
  },
  {
    display: "i've been walking around for hours... it's just you and me here",
    button: "oh. how'd we even get here?",
  },
  { display: "maybe your consciousness touched mine", button: "okay..." },
  {
    display: "and it's here... meant to be together",
    button: "that really doesn't clear it up",
  },
  { display: "or maybe we're dead", button: "WHAT ???" },
  { display: "im just kidding", button: "ha ha verryyyyy funny" },
  { display: "well if you really want to you can leave", button: "how?" },
  {
    display: "i think you know",
    button: "i'll keep it in mind. i'll stick around for a bit though",
  },
  {
    display:
      "we might be here for a while... might as well make ourselves at home",
    button: "i'll try",
  },
  {
    display: "i would kill for a good espresso",
    button: "maybe i'll manifest one",
  },
  { display: "*just then a machine appears*", button: "..." },
  {
    display: "well i'll be damned. alright, espresso?",
    button: "can you make it a double? didn't sleep well last night",
  },
  {
    display: "yesiree",
    button: "...",
  },
  { display: "*coffee machine whirs*", button: "...", coffeeSoundOn: true },
  {
    display: "*a faint grunting sound can be heard in the back*",
    button: "....?",
  },
  {
    display: "....",
    button: "*it sounds like he's struggling... maybe I should help?*",
  },
  {
    display: "all done! here ya go... one double shot, on me!",
    button: "thank you",
    coffeeSoundOn: false,
  },
  { display: "....", button: "*it's good, just the way you like it*" },
  { display: "*a long sip*", button: "..." },
  { display: "....!", button: "...?" },
  {
    display: "*the man looks up at you briefly, then back down to his cup*",
    button: "...",
  },
  {
    display: "*he scratches the back of his head with his hand*",
    button: "what's up?",
  },
  {
    display: "i just remembered something... i'm not sure what it means",
    button: "tell me and we can work it out together",
  },
  { display: "sounds good, here goes", button: "..." },
  {
    display:
      "a boy and a father are out on a shopping trip. the boy wants to stop by the ice cream parlor. the father, being the dutiful dad, obliges",
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
      "knowing his favorites, the father picks a double scoop of cookie dough. the boy claps, and grabs the overflowing waffle cone lined with little dough nuggets",
    button: "...",
  },
  {
    display: "he is happy now... what more could he want in the world?",
    button: "...",
  },
  {
    display:
      "twenty years pass and he is a boy no longer. in weathered hands are a fresh bouquet of flowers",
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
    display: "the man is ushered into the room, a faint beeping can be heard",
    button: "...",
  },
  {
    display: "he looks at his father's body, riddled with years of life",
    button: "...",
  },
  {
    display:
      "the father had been put into palliative care a few months ago and was moved to a different part of the hospital",
    button: "...",
  },
  {
    display:
      "in the room is an old bouquet of flowers. it sits in a glass vase",
    button: "...",
  },
  {
    display:
      "the once buttery daffodils, creamy daisies, and chocolatey tulips dribble over the sides of the bowl",
    button: "...",
  },
  { display: "the doctor walks in", button: "..." },
  {
    display:
      "“your father has been fighting for months... I don't know how much longer he should go in this state”",
    button: "...",
  },
  { display: "beep.... beep.... beep....", button: "..." },
  {
    display:
      "“sometimes, a patient in this state would have an advance directive, something telling their family member what to do”",
    button: "...",
  },
  {
    display: "“do you happen to have an advanced directive by chance?”",
    button: "i don't know. he never talked about it",
  },
  {
    display:
      "he gently nods, “that's extremely common, no one wants to think of their own mortality“ ",
    button: "...",
  },
  {
    display: "“because of this, you have to make the decision for him...”",
    button: "...",
  },
  {
    display: "the man began to ache from inside... what was it?",
    button: "...",
  },
  {
    display: "only the slow, gnawing, pull; vertigo, the passage of time.",
    button: "...",
  },

  { display: "the man wants some time alone", button: "..." },
  {
    display: "the doctor nods and gently retreats from the room",
    button: "...",
  },
  {
    display:
      "the man thinks back to the years that they had spent together. the father had always been there for him, and he had always been there for the father",
    button: "...",
  },
  { display: "but things are different now...", button: "..." },
  {
    display:
      "he looks at the menagerie of tubes pumping his father full of oxygen, electrical fluids running in his veins",
    button: "...",
  },
  {
    display: "....",
    button:
      "hold your father's hand/stay in the corner/play his favorite song/pray for his wellbeing",
    choice: true,

    skipNumbers: [0, 2, 4, 6],
  },
  {
    display: "*you walk up and grab your father's hand, being pumped with IV*",
    button: "...",
  },
  {
    display: "it feels cold and weak..., you recoil back in pain",
    button: "...",
    skipNumber: 6,
  },
  // Staying in the corner
  {
    display: "*you sit down, slouched against the wall, feeling defeated*",
    button: "...",
  },
  {
    display: "the beeping continues",
    button: "...",
    skipNumber: 4,
  },
  {
    display:
      "*you pull out your phone and play his favorite, sinatra's my way, the one he played when you were younger*",
    button: "...",
  },
  {
    display: "the swell of the music brings you back",
    button: "*turn it off*",
    skipNumber: 2,
  },
  {
    display:
      "*you haven't done this since you left for college, but you sink to your knees and pray*",
    button: "...",
  },
  {
    display: "for the first time, you dream of a spiritual presence",
    button: "...",
  },

  {
    display:
      "after a while, the doctor comes back and asks you what you want to do",
    button: "i don't think he would want to continue like this",
  },
  {
    display: "the man in front of you gives a gentle nod",
    button: "...",
    hospitalMusicOn: false,
  },
  { display: "i guess that's only fair", button: "..." },
  {
    display:
      "we're all simply an ocean of thoughts, with a tiny leak, dripping to the ends of existence",
    button: "...",
  },
  { display: "and it all comes to a halt", button: "..." },
  {
    display: "i’m at least glad for the time that we had here—",
    button: "...",
  },
  {
    display:
      "*the man dissipates in front of you, his body shimmering in and out of focus*",
    button: "...",
  },
  { display: "*and he's gone*", button: "...", countTime: true },
  { display: "....", button: "..." },
  { display: "....", button: "..." },
  {
    display: "....",
    button: "maybe try coming back? and see if he's here?",
    end: true,
  },
];

export default text;

export const quizQuestions = [
  {
    id: 1,
    questionNumber: "Question 1 of 3",
    question: "What's your most common update?",
    subtitle: "Be honest. The system is watching.",
    options: [
      { id: "a", text: "I'm hungry. 🍕", comment: "Valid, but wait for the other options..." },
      { id: "b", text: "I got hurt. 🩹", comment: "A classic gym/life episode." },
      { id: "c", text: "Guess what happened! ☕", comment: "Suspense is your specialty." },
      { id: "d", text: "All of the above. 👑", isRecommended: true, comment: "BINGO." }
    ],
    correctId: "d",
    funnyResponse: "Honestly, all of the above. 😂 Every single day is an action movie combined with a cooking show and a thriller."
  },
  {
    id: 2,
    questionNumber: "Question 2 of 3",
    question: "What should you do when you have random gossip?",
    subtitle: "Consulting the official guidelines...",
    options: [
      { id: "a", text: "Keep it to yourself.", comment: "Criminal behavior. Strictly prohibited." },
      { id: "b", text: "Tell me everything. 🗣️", isRecommended: true, comment: "The only approved answer!" },
      { id: "c", text: "Wait for the perfect moment.", comment: "There is no waiting when the tea is hot!" }
    ],
    correctId: "b",
    funnyResponse: "Option 2. Obviously. I need the complete story from start to finish, including character backstories and voice impressions."
  },
  {
    id: 3,
    questionNumber: "Question 3 of 3",
    question: "What do your little updates mean?",
    subtitle: "A serious philosophical inquiry...",
    options: [
      { id: "a", text: "Nothing at all.", comment: "Incorrect. Try again." },
      { id: "b", text: "They're just part of my day.", comment: "Warmer, but there's a better truth." },
      { id: "c", text: "They're little moments I enjoy hearing about. 🤍", isRecommended: true, comment: "Bingo. 100% true." }
    ],
    correctId: "c",
    funnyResponse: "Exactly. The little things matter too. They turn an ordinary busy day into something worth smiling about."
  }
];

export const quizResult = {
  title: "CEO of Random Updates",
  badge: "OFFICIALLY CERTIFIED 🏆",
  trophyEmoji: "👑✨",
  message: "Congratulations! You've officially been appointed CEO of Random Updates.",
  description: "By order of the Management, you are hereby granted lifetime privileges to send unfiltered voice notes, 27-minute gym reports, nail tragedy notifications, and gossip sessions without any prior warning or justification.",
  signature: "Approved with affection ♡"
};

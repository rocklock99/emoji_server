import express from "express";

const app = express();

// middleware that converts JSON to object
app.use(express.json());

// handle GET requests for all emojis
app.get("/emojis", (req, res) => {
  res.send({ success: true, emojis: emojis });
});

// handle GET requests for :emojiId
app.get("/emojis/:emojiId", (req, res) => {
  const findEmojiId = Number(req.params.emojiId); // convert string to number
  const emojiFound = emojis.find((emoji) => {
    return emoji.id === findEmojiId;
  });
  res.send({ success: true, emoji: emojiFound });
});

// handle POST request
app.post("/emojis", (req, res) => {
  const { name, character } = req.body; // deconstruct name and character from body
  const newEmoji = {
    id: emojis.length + 1,
    name,
    character, // same as saying character: character
  };
  emojis.push(newEmoji);
  res.send({ success: true, emoji: newEmoji });
});

// handle DELETE request
app.delete("/emojis/:emojiId", (req, res) => {
  const EmojiIdToDelete = Number(req.params.emojiId); // convert string to number
  const emojiFound = emojis.find((emoji) => {
    return emoji.id === EmojiIdToDelete; // find object in emojis[] where ids match
  });
  res.send({ success: true, emoji: emojiFound });
});

// handle PUT request
app.put("/emojis/:emojiId", (req, res) => {
  const EmojiIdToEdit = Number(req.params.emojiId); // convert string to number
  const { name, character } = req.body; // deconstruct properties to edit from user request body
  console.log("Name is:", name);
  console.log("Character is:", character);
  const emojiIndex = emojis.findIndex((emoji) => emoji.id === EmojiIdToEdit);
  console.log("Emoji index: ", emojiIndex);
  emojis[emojiIndex].name = name; // set new name value
  emojis[emojiIndex].character = character; // set new character value
  res.send({ success: true, emoji: emojis[emojiIndex] });
});

// error handling for incorrect request url
app.use((req, res) => {
  res.send({ success: false, error: "No route found." });
});

// express error handling
app.use((error, req, res, next) => {
  res.send({ success: false, error: error.message });
});

// port number
const port = 3000;

// start listening
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// hardcoded database simulation
let emojis = [
  { id: 1, character: "😀", name: "Grinning Face" },
  { id: 2, character: "🚀", name: "Rocket" },
  { id: 3, character: "🌟", name: "Star" },
  { id: 4, character: "🎉", name: "Party Popper" },
  { id: 5, character: "🐱", name: "Cat Face" },
  { id: 6, character: "🌺", name: "Hibiscus" },
  { id: 7, character: "🍔", name: "Hamburger" },
  { id: 8, character: "🚲", name: "Bicycle" },
  { id: 9, character: "📚", name: "Books" },
  { id: 10, character: "🎈", name: "Balloon" },
  { id: 11, character: "🍕", name: "Pizza" },
  { id: 12, character: "🏖️", name: "Beach with Umbrella" },
  { id: 13, character: "🎸", name: "Guitar" },
  { id: 14, character: "🌈", name: "Rainbow" },
  { id: 15, character: "🌊", name: "Ocean Wave" },
  { id: 16, character: "🍦", name: "Ice Cream" },
  { id: 17, character: "🎨", name: "Artist Palette" },
  { id: 18, character: "🐶", name: "Dog Face" },
  { id: 19, character: "🌄", name: "Sunrise Over Mountains" },
  { id: 20, character: "🎓", name: "Graduation Cap" },
  { id: 21, character: "🍂", name: "Fallen Leaf" },
  { id: 22, character: "🍁", name: "Maple Leaf" },
  { id: 23, character: "🎃", name: "Jack-O-Lantern" },
  { id: 24, character: "🎄", name: "Christmas Tree" },
  { id: 25, character: "❄️", name: "Snowflake" },
  { id: 26, character: "🌻", name: "Sunflower" },
  { id: 27, character: "🌍", name: "Earth Globe Europe-Africa" },
  { id: 28, character: "🌞", name: "Sun with Face" },
  { id: 29, character: "🌚", name: "New Moon Face" },
  { id: 30, character: "🎶", name: "Musical Notes" },
];

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const flavours = [
  "Vanilla",
  "Chocolate",
  "Strawberry",
  "Caramel",
  "Mint",
  "Coffee",
  "Matcha",
  "Lemon",
  "Peach",
  "Blueberry",
  "Raspberry",
  "Mango",
  "Passionfruit",
  "Grapefruit",
  "Watermelon",
  "Pineapple",
  "Kiwi",
  "Coconut",
  "Hazelnut",
  "Almond",
  "Cashew",
  "Peanut",
  "Pistachio",
  "Walnut",
];
const foods = [
  "Cookie",
  "Cake",
  "Pie",
  "Pudding",
  "Candy",
  "Donut",
  "Muffin",
  "Croissant",
  "Bagel",
  "Toast",
  "Sandwich",
  "Burger",
  "Pizza",
  "Pasta",
  "Rice",
  "Noodle",
  "Salad",
  "Soup",
  "Curry",
  "Stew",
  "Taco",
  "Sushi",
  "Bento",
  "Fries",
];

function getName() {
  const randomFlavour = flavours[Math.floor(Math.random() * flavours.length)];
  const randomFood = foods[Math.floor(Math.random() * foods.length)];
  return `${randomFlavour} ${randomFood}`;
}

async function getAvatar(name, user) {
  const response = await fetch("https://api.multiavatar.com/" + name + ".png");
  if (!response.ok) {
    throw new Error("Failed to generate avatar");
  }

  const avatarBlob = await response.blob();
  const storage = getStorage();
  const avatarRef = ref(storage, `${user.uid}/avatar`);
  await uploadBytes(avatarRef, avatarBlob);
  const downloadURL = await getDownloadURL(avatarRef);

  return downloadURL;
}

export { getName, getAvatar };

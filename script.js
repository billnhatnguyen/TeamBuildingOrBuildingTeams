const words = [
  "Danny",
  "Bill",
  "Flora",
  "Henry",
  "God",
  "Jesus",
  "10 dieu tam niem",
  "Mimi",
  "Toma Thien",
  "Sins",
  "Holy",
  "Prayer",
  "Radio",
  "TV",
  "Taco",
  "Depression",
  "Water",
  "Slaves",
  "Monkeys",
  "Sloth",
  "Zombie",
  "Llama",
  "Unicorn",
  "Meme",
  "Ninja",
  "Glow Stick",
  "Pizza",
  "Bubble Tea",
  "Popcorn",
  "Hot Dog",
  "Hoodie",
  "Backpack",
  "Headphones",
  "Sunglasses",
  "Ice Cream",
  "Cotton Candy",
  "Chocolate",
  "Sticker",
  "Toilet",
  "Monster",
  "Lava Lamp",
  "Laser",
  "Pickle"
];


function generateWord(){
    const wordBox = document.getElementById("wordBox");
    const randomIndex = Math.floor(Math.random() * words.length);
    wordBox.innerText = words[randomIndex];
}

const pressMe = document.getElementById("pressMe");
if(pressMe){
pressMe.addEventListener("click", generateWord);
}
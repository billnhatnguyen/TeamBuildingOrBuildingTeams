const words = [
  "Danny",
  "Bill",
  "Flora",
  "Henry",
  "God",
  "Jesus",
  "10 dieu tam niem",
  "Mimi",
  "Story Telling",
  "Love",
  "Peace",
  "Black",
  "Toma Thien",
  "Sins",
  "Holy",
  "Prayer",
  "Nuns",
  "School Work",
  "Tutor",
  "Radio",
  "TV",
  "Taco",
  "Depression",
  "Water",
  "Slaves",
  "Monkeys",
  "Sloth",
  "Auto Grader",
  "Cha Tap",
  "Gym",
  "Robot",
  "Ninja",
  "Basketball",
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
  "Insence",
  "Cure Disease",
  "Artificial Intelligence",
  "Monster",
  "Music",
  "Laser",
  "Monkeys",
  "IN the dark",
  "Swords",
  "World Peace",
  "Galile Camp",
  "Friends",
  "Automated",
  "Behaviour",
  "Spiritual",
  "Mental Health",
  "Physical Health",
  "Issue",
  ""
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
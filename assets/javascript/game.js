var words = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Congo",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Ecuador",
  "Egypt",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kuwait",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macau",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Namibia",
  "Nepal",
  "Netherlands",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palestine",
  "Panama",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Reunion",
  "Romania",
  "Russia",
  "Rwanda",
  "Samoa",
  "Satellite",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Spain",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Uganda",
  "Ukraine",
  "Uruguay",
  "Uzbekistan",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe"
];

var wins = 0;
var currentWord = " ";
var tries = 10;
var word;
var userText = document.getElementById("guesses");
var currentWordDiv = document.getElementById("currentWord");
var guessedLetters;

function resetGame() {
  document.getElementById("gameStatus").innerHTML =
    "Press any key to get started.";

  tries = 10;
  document.getElementById("wins").innerHTML = wins;
  document.getElementById("tries").innerHTML = tries;
  currentWord = [];
  guessedLetters = [];
  word = words[Math.floor(Math.random() * words.length)].toLowerCase();
  for (var i = 0; i < word.length; i++) {
    currentWord.push("_");
  }
  currentWordDiv.innerHTML = currentWord.join(" ");
  userText.innerHTML = "";

  document.onkeyup = function(event) {
    document.getElementById("gameStatus").innerHTML = "Keep guessing!";
    var letterIndex = word.indexOf(event.key, 0);

    if (letterIndex === -1 && guessedLetters.indexOf(event.key) === -1) {
      userText.innerHTML += event.key;
      guessedLetters.push(event.key);

      tries--;
      document.getElementById("tries").innerHTML = tries;

      if (tries === 0) {
        document.getElementById("gameStatus").innerHTML = "YOU LOSE!!!";
        document.onkeyup = function() {
          resetGame();
        };
      }
    }
    while (letterIndex > -1) {
      currentWord[letterIndex] = event.key;
      currentWordDiv.innerHTML = currentWord.join(" ");
      letterIndex = word.indexOf(event.key, letterIndex + 1);
    }
    if (word === currentWord.join("")) {
      wins++;
      document.getElementById("gameStatus").innerHTML = "YOU WIN!!!";
      document.onkeyup = function() {
        resetGame();
      };
    }
  };
}

resetGame();

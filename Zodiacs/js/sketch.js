function findZodiac() {
  // Get the user's input year
  const year = document.getElementById("yearInput").value;

  // Validate the input
  if (!year || year <= 0) {
      alert("Please enter a valid year.");
      return;
  }

  // Zodiac animals array
  const zodiacAnimals = [
      'Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig'
  ];

  // Calculate the zodiac animal index based on the year
  const zodiacIndex = (year - 4) % 12;  // Subtract 4 because the year 4 is the start of the first cycle (Rat)
  
  // Get the corresponding zodiac animal
  const zodiacAnimal = zodiacAnimals[zodiacIndex];

  // Redirect to the correct zodiac page
  window.location.href = `${zodiacAnimal.toLowerCase()}.html`;
}

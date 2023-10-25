function displayData(button) {
    const characterName = button.getAttribute("data-name");
  
    const characterDataDisplay = button.nextElementSibling;
  
    fetchCharacterData(characterName, characterDataDisplay);
  }
  
  function fetchCharacterData(characterName, characterDataDisplay) {
    const apiUrl = `https://swapi.dev/api/people/?search=${characterName}`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.results.length > 0) {
          const character = data.results[0];
          const characterData = `Name: ${character.name}<br>
            Height: ${character.height}<br>
            Gender: ${character.gender}`;
          characterDataDisplay.innerHTML = characterData;
        } else {
          characterDataDisplay.innerHTML = "Character not found.";
        }
      })
      .catch((error) => {
        characterDataDisplay.innerHTML = "Error fetching data: " + error;
      });
  }
  
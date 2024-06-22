let currentPage = 1;


    const prevButton = document.getElementById('prev-page');
    const nextButton = document.getElementById('next-page');
    const characterList = document.getElementById('character-list');

    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            fetchCharacters();
        }
    });

    nextButton.addEventListener('click', () => {
        currentPage++;
        fetchCharacters();
    });

    fetchCharacters();

    function fetchCharacters() {
        fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
            .then(response => response.json())
            .then(data => {
                displayCharacters(data.results);
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    function displayCharacters(characters) {
        characterList.innerHTML = '';
        characters.forEach(character => {
            const characterItem = document.createElement('li');
            const characterImage = document.createElement('img');
            const characterName = document.createElement('h2');
            const characterSpecies = document.createElement('p');

            characterImage.src = character.image;
            characterImage.alt = character.name;
            characterName.textContent = character.name;
            characterSpecies.textContent = character.species;

            characterItem.appendChild(characterImage);
            characterItem.appendChild(characterName);
            characterItem.appendChild(characterSpecies);
            characterList.appendChild(characterItem);
        });
    }

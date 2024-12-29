// Import game data
import GAMES_DATA from './games.js';
const GAMES_JSON = JSON.parse(GAMES_DATA);

// Set up search assistant
const gameTitles = GAMES_JSON.map((game) => game.name);
const options = {
    includeScore: true,
    threshold: 0.4
};
const fuse = new Fuse(gameTitles, options);

// modal controls
const searchModal = document.getElementById("search-modal");
const modalInfo = document.getElementById("modal-info");
const closeBtn = document.getElementById("close-btn");

closeBtn.addEventListener("click", (ev) => {
    searchModal.style.display = "none";
});

window.addEventListener("click", (ev) => {
    if (ev.target === searchModal) {
        searchModal.style.display = "none";
    }
});

// search button control
const searchButton = document.getElementById("search-btn");
searchButton.addEventListener("click", () => {
    let searchbarText = document.getElementById("searchbar").value;
    if (searchbarText === "") {
        return;
    }
    let loggedSearch = `User searched for ${searchbarText}`;
    document.getElementById("searchbar").value = '';

    // Clear modal
    deleteChildElements(modalInfo);

    const searchResults = fuse.search(searchbarText);
    if (searchResults.length === 0) {
        handleInvalidSearch(searchbarText);
    } 
    else {
        const {item, refIndex, score} = searchResults[0];
        loggedSearch += `: { ${item}, ${refIndex}, ${score} }`;    
        
        const title = document.createElement("h1");
        title.classList.add("first-modal-msg");
        title.textContent = item;
        
        handleNearMatch(score);
        
        modalInfo.appendChild(title);

        let {name, description, pledged, goal, backers, img} = GAMES_JSON[refIndex];

        modalInfo.innerHTML += `
        <img class = "modal-img" src = "${img}"/>
        <div><h2 class="remove-bottom-pad">${description}</h2>
        <div class="pledge-backer-info remove-top-pad">
            <h3>We have ${backers.toLocaleString("en-US")} backers so far who have...</h3>
            <h2 class="remove-top-pad">Pledged $${pledged.toLocaleString("en-US")} out of $${goal.toLocaleString("en-US")} </h2>
        </div>
       `;

       if (pledged < goal) {
        let donateButton = document.createElement("button");
        donateButton.classList.add("donate-button");
        donateButton.textContent = "Become a backer, Donate now!";
        modalInfo.appendChild(donateButton);
       }   
    }

    console.log(loggedSearch);
    searchModal.style.display = "block";
});


function deleteChildElements(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function handleNearMatch(score) {
    if (score !== 0.0) {
        const searchStatus = document.createElement("h3");
        searchStatus.classList.add("first-modal-msg");
        searchStatus.innerHTML = `Here is the result for the closest match:`;
        modalInfo.appendChild(searchStatus);
    }
}

function handleInvalidSearch(searchbarText) {
    const searchStatus = document.createElement("p");
    searchStatus.classList.add("first-modal-msg");
    searchStatus.innerHTML = `There wasn't a game that matched the query <strong>${searchbarText}</strong>.
    Try entering something else.`;
    modalInfo.appendChild(searchStatus);
}

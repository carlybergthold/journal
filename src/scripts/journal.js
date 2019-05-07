import addEntryToDOM from "./entriesDOM"
import API from "./data"

/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.
*/

API.getJournalEntries()
.then(entries => addEntryToDOM(entries));

const submitBtn = document.querySelector("#submit-button");

submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    let date = document.querySelector(".date").value;
    let concepts = document.querySelector(".concepts").value;
    let entry = document.querySelector(".entry").value;
    let mood = document.querySelector(".mood").value;
    let newEntry = newJournalEntry(date, concepts, entry, mood);
    if ( document.querySelector("#input-id").value === "" ) {
        API.postData(newEntry);
    } else {
        API.putData(newEntry);
    }
});

// Invoke the factory function, passing along the form field values
const newJournalEntry = (date, concepts, entry, mood) => {
    return entry = {
        date: `${date}`,
        concepts: `${concepts}`,
        entry: `${entry}`,
        mood: `${mood}`
    };
}

// event listener for search bar
const searchBar = document.querySelector("#search-input");
searchBar.addEventListener("keypress", (e) => {
    if(e.keyCode == 13) {
        e.preventDefault();
        API.getJournalEntries()
        .then(entries => {
            const inputValue = searchBar.value.toLowerCase();
            let searchEntries = entries.filter(entry => {
                for (let value of Object.values(entry)) {
                    if (isNaN(value) && value.toLowerCase().includes(inputValue)) {
                        return value;
                    }
                }
            })
            // clear the original entries
            const el = document.querySelector(".entry-container");
            el.innerHTML = "";
            addEntryToDOM(searchEntries)
        })
    }
})


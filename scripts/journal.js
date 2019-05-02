
/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.
*/

API.getJournalEntries()
.then(entries => addEntryToDOM(entries));

const submitBtn = document.querySelector("#submit-button");

submitBtn.addEventListener("click", function (e) {

    let date = document.querySelector(".date").value;
    let concepts = document.querySelector(".concepts").value;
    let entry = document.querySelector(".entry").value;
    let mood = document.querySelector(".mood").value;
    let newEntry = newJournalEntry(date, concepts, entry, mood);

    if ( document.querySelector("#input-id").value === "" ) {
        postData(newEntry);
    } else {
        putData(newEntry);
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

const postData = (object) => {
    fetch("http://localhost:8888/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(object)
    })
}

const putData = (object) => {
    let id = document.querySelector("#input-id").value;

    fetch(`http://localhost:8888/entries/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(object)
    })
}
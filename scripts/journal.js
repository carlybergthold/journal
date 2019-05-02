
/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.
*/

API.getJournalEntries()
.then(entries => addEntryToDOM(entries));

const submitBtn = document.querySelector("#submit-button");

submitBtn.addEventListener("click", function (e) {
    console.log("I was clicked");
    let date = document.querySelector(".date").value;
    let concepts = document.querySelector(".concepts").value;
    let entry = document.querySelector(".entry").value;
    let mood = document.querySelector(".mood").value;
    let newEntry = newJournalEntry(date, concepts, entry, mood);
    console.log("newentry", newEntry);
    postData(newEntry);
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



let radioButtons = document.getElementsByName("mood-radio");

radioButtons.forEach(button => {
    button.addEventListener("click", event => {

        if (event.target.value === "all") {
            API.getJournalEntries()
            .then(entries => addEntryToDOM(entries));
        }

        else {

            const moodVal = event.target.value.toLowerCase();
            console.log(moodVal);

            function moodFilter(obj) {
                if (moodVal === obj.mood.toLowerCase()) {
                return obj;
                } 
            }

            // clear the original entries
            const el = document.querySelector('.entry-container');
            el.innerHTML = "";
            
            // get the filtered entries
            API.getJournalEntries()
            .then(entries => addEntryToDOM(entries.filter(moodFilter)));

        }    
    })
});
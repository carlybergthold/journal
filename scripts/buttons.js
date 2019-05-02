const radioButtons = document.getElementsByName("mood-radio");
console.log(radioButtons);

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

//add event listeners to delete buttons
document.addEventListener("click", function(e){

    if (e.target.className === "delete-btn") {
        console.log("hi");
        const id = e.target.id;

        fetch(`http://localhost:8888/entries/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
    }
    
});



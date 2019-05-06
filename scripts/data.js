

// fetches data from journal entry JSON server
    const API = {
        getJournalEntries: function () {
            return fetch("http://localhost:8888/entries")
                .then(response => response.json())
        }
    }

    // posts data to JSON server - used for recording new journal entries
    const postData = (object) => {
        fetch("http://localhost:8888/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(object)
        })
    }
    
    // puts data on JSON server - used for editing journal entries
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
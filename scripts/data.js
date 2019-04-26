

// fetches data from journal entry JSON server
    const API = {
        getJournalEntries: function () {
            return fetch("http://localhost:8888/entries")
                .then(response => response.json())
        }
    }

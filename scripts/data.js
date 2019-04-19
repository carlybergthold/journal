

// fetches data from journal entry JSON server
    const API = {
        getJournalEntries: function () {
            return fetch("http://localhost:8088/journalEntries")
                .then(response => response.json())
        }
    }

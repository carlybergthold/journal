

// fetches data from journal entry JSON server
    const API = {
        getJournalEntries: function () {
            return fetch("http://localhost:8080/entries")
                .then(response => response.json())
        },
        postData: function (object) {
            fetch("http://localhost:8080/entries", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(object)
            })
        },
        putData: function (object) {
            let id = document.querySelector("#input-id").value;
            fetch(`http://localhost:8080/entries/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(object)
            })
        }
    }

    export default API
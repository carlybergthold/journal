

// template for journal entry HTML
createEntry = (entry) => {
    return `
            <div class="journal-entry">
                <h2>${entry.date}</h2>
                <p><strong>Concepts Learned:</strong> ${entry.concepts}</p>
                <p><strong>Entry:</strong> ${entry.entry}</p>
                <p><strong>Mood:</strong> ${entry.mood}</p>
                <button class="delete-btn" id="edit-${entry.id}">Delete</button>
                <button class="edit-btn" id="edit-${entry.id}">Edit</button>
            </div>
            `
}





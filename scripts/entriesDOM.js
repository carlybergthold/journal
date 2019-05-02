

//appends HTML journal element to the DOM
addEntryToDOM = (array) => {

    array.forEach(element => {
        const entry = createEntry(element);
        const el = document.querySelector('.entry-container');
        el.innerHTML += entry;
    });

}

// addEntryToDOM = (array) => {

//     array.forEach(element => {
//         const entry = createEntry(element);
//         const newEntry = document.createElement("div");
//         newEntry.innerHTML = entry;
//         const fragment = document.createDocumentFragment();
//         fragment.appendChild(newEntry);
//         const el = document.querySelector('.entry-container');
//         el.appendChild(fragment);
//     });
// }





import createEntry from "./entryComponent"


//appends HTML journal element to the DOM
const addEntryToDOM = (array) => {

    array.forEach(element => {
        const entry = createEntry(element);
        const el = document.querySelector(".entry-container");
        el.innerHTML += entry;
    });

}

export default addEntryToDOM




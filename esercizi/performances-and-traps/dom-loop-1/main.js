const items = Array.from({ length: 50000 }, (_, i) => `Item ${i + 1}`);
const list = document.getElementById("list");

function clearList() {
    list.innerHTML = "";
}

// Append al DOM ad ogni iterazione
document.getElementById("appendChild").addEventListener("click", () => {
    clearList();
    console.time("appendChild");
    // items.forEach(item => {
    //     const li = document.createElement("li");
    //     li.textContent = item;
    //     list.appendChild(li);
    // });
    for(const item of items) {
        const li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    }
    console.timeEnd("appendChild");
});

// Usare una stringa e aggiornare il DOM una sola volta
document.getElementById("string").addEventListener("click", () => {
    clearList();
    console.time("string");
    let listItems = "";
    for(const item of items) {
        listItems += `<li>${item}</li>`;
    }
    list.innerHTML = listItems;
    console.timeEnd("string");
});

// Usare DocumentFragment
document.getElementById("fragment").addEventListener("click", () => {
    clearList();
    console.time("fragment");
    const fragment = document.createDocumentFragment();
    for(const item of items) {
        const li = document.createElement("li");
        li.textContent = item;
        fragment.append(li);
    }
    list.appendChild(fragment);
    console.timeEnd("fragment");
});

// Usare singolo append con array di nodi
document.getElementById("singleAppend").addEventListener("click", () => {
    clearList();
    console.time("singleAppend");
    const nodes = [];
    for(const item of items) {
        const li = document.createElement("li");
        li.textContent = item;
        nodes.push(li);
    }
    list.append(...nodes);
    console.timeEnd("singleAppend");
});
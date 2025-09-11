const list = document.getElementById("list");
const items = Array.from({ length: 500 }, (_, i) => `Item ${i + 1}`);

function clearList() {
    list.innerHTML = "";
}

// Aggiorno il DOM ad ogni iterazione
document.getElementById("slow").addEventListener("click", () => {
    clearList();
    console.time("slow");
    // scatena rendering ogni volta
    // items.forEach(item => {
    //     list.innerHTML += `<li>${item}</li>`;
    // });
    for (let i = 0; i < items.length; i++) {
        list.innerHTML += `<li>${items[i]}</li>`;
    }
    console.timeEnd("slow");
});

// Costruisco l'HTML in memoria e aggiorno il DOM una sola volta
document.getElementById("fast").addEventListener("click", () => {
    clearList();
    console.time("fast");
    let html = "";
    for (let i = 0; i < items.length; i++) {
        html += `<li>${items[i]}</li>`;
    }
    list.innerHTML = html;
    console.timeEnd("fast");
});
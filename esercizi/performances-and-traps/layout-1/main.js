const container = document.getElementById("container");

for (let i = 0; i < 100; i++) {
    const box = document.createElement("div");
    box.className = "box";
    container.appendChild(box);
}

const boxes = document.querySelectorAll(".box");

// Lettura e scrittura nello stesso loop
document.getElementById("readWrite").addEventListener("click", () => {
    console.time("readWrite");
    for (let i = 0; i < boxes.length; i++) {
        const box = boxes[i];
        const width = box.offsetWidth;
        box.style.width = width + 10 + "px";
    }
    console.timeEnd("readWrite");
});

// Lettura e scrittura separate (batch)
document.getElementById("batch").addEventListener("click", () => {
    console.time("batch");
    const widths = [];
    // boxes.forEach(box => widths.push(box.offsetWidth));
    // boxes.forEach((box, i) => box.style.width = widths[i] + 10 + "px");

    for(let i = 0; i < boxes.length; i++) {
        const box = boxes[i];
        widths.push(box.offsetWidth);
    }
    for(let i = 0; i < boxes.length; i++) {
        const box = boxes[i];
        box.style.width = widths[i] + 10 + "px";
    }

    console.timeEnd("batch");
});
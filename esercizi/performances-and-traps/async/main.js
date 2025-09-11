const items = [1, 2, 3];

async function processItems() {
  items.forEach(async (item) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Done:", item);
  });

  console.log("All done? 🤔");
}

processItems();
